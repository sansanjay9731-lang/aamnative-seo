import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { items, phone } = await req.json();

        if (!items || items.length === 0) {
            return NextResponse.json({ success: true, message: "Empty cart, skipped sync" });
        }

        // Try to find if user exists
        const customer = phone ? await prisma.customer.findUnique({
            where: { phone }
        }) : null;

        // Check if we already have an active cart session for this number
        let session;
        if (phone) {
            session = await prisma.cartSession.findFirst({
                where: { phone, status: "ACTIVE" }
            });
        }

        if (session) {
            // Update existing session
            session = await prisma.cartSession.update({
                where: { id: session.id },
                data: {
                    items: JSON.stringify(items),
                    ...(customer && { customerId: customer.id })
                }
            });
        } else {
            // Create new session
            session = await prisma.cartSession.create({
                data: {
                    phone: phone || null,
                    items: JSON.stringify(items),
                    status: "ACTIVE",
                    ...(customer && { customerId: customer.id })
                }
            });
        }

        return NextResponse.json({ success: true, sessionId: session.id });
    } catch (error) {
        console.error("Cart sync error:", error);
        return NextResponse.json(
            { success: false, error: "Error syncing cart session" },
            { status: 500 }
        );
    }
}
