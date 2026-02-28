import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, dbOrderId } = await req.json();

        const text = razorpay_order_id + "|" + razorpay_payment_id;
        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(text)
            .digest("hex");

        if (generated_signature === razorpay_signature) {
            // Payment is verified
            await prisma.order.update({
                where: { id: dbOrderId },
                data: {
                    status: "PAID",
                    paymentId: razorpay_payment_id,
                },
            });

            return NextResponse.json({ success: true, message: "Payment verified successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
        }
    } catch (error) {
        console.error("Payment verification error:", error);
        return NextResponse.json(
            { success: false, error: "Error verifying payment" },
            { status: 500 }
        );
    }
}
