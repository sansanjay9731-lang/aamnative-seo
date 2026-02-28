import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { items, customerDetails, totalAmount } = await req.json();

        // 1. Create Customer in DB (or find existing)
        let customer = await prisma.customer.findUnique({
            where: { phone: customerDetails.phone },
        });

        if (!customer) {
            customer = await prisma.customer.create({
                data: {
                    phone: customerDetails.phone,
                    name: customerDetails.name,
                    email: customerDetails.email,
                    address: customerDetails.address,
                }
            });
        } else {
            // Update details if they changed
            customer = await prisma.customer.update({
                where: { phone: customerDetails.phone },
                data: {
                    name: customerDetails.name,
                    email: customerDetails.email,
                    address: customerDetails.address,
                }
            });
        }

        // 2. Create Order in our DB (before Razorpay, to get a dbOrderId for receipt/mock)
        const orderNumber = `AAM-${Math.floor(100000 + Math.random() * 900000)}`;
        let newOrder = await prisma.order.create({
            data: {
                orderNumber,
                customerId: customer.id,
                totalAmount,
                status: "PENDING",
                shippingAddress: customerDetails.address,
                items: {
                    create: items.map((item: any) => ({
                        productId: item.product.id,
                        quantity: item.quantity,
                        priceAtTime: item.product.price,
                    }))
                }
            }
        });

        const rzpKeyId = process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder";

        if (rzpKeyId === "rzp_test_placeholder") {
            // DEMO BYPASS: If no real keys are provided, simulate a successful order response
            return NextResponse.json({
                success: true,
                orderId: "mock_order_123",
                amount: totalAmount * 100,
                currency: "INR",
                dbOrderId: newOrder.id,
                isDemo: true, // Flag for the frontend to skip the Razorpay widget
            });
        }

        const razorpay = new Razorpay({
            key_id: rzpKeyId,
            key_secret: process.env.RAZORPAY_KEY_SECRET || "rzp_secret_placeholder",
        });

        // 3. Create Razorpay Order
        const options = {
            amount: totalAmount * 100, // amount in paise
            currency: "INR",
            receipt: newOrder.id,
        };
        const razorpayOrder = await razorpay.orders.create(options);

        // Update the order with razorpayOrderId
        newOrder = await prisma.order.update({
            where: { id: newOrder.id },
            data: { razorpayOrderId: razorpayOrder.id }
        });

        return NextResponse.json({
            success: true,
            orderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            dbOrderId: newOrder.id,
        });

    } catch (error) {
        console.error("Razorpay order creation error:", error);
        return NextResponse.json(
            { success: false, error: "Error creating order" },
            { status: 500 }
        );
    }
}
