import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
    const order = await prisma.order.findUnique({
        where: { id: params.id },
        include: {
            customer: true,
            items: {
                include: { product: true }
            }
        }
    });

    if (!order) return notFound();

    // For future WhatsApp integration
    const whatsappUrl = `https://wa.me/${order.customer.phone}?text=Hi ${order.customer.name}, regarding your order ${order.orderNumber}...`;

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/orders">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </Button>
                <h1 className="text-2xl font-bold tracking-tight">Order {order.orderNumber}</h1>
                <Badge variant={order.status === "PAID" ? "default" : "secondary"}>
                    {order.status}
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column - Order Details */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {order.items.map((item: any) => (
                                    <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-0">
                                        <div className="flex items-center gap-4">
                                            <div className="font-medium">{item.product.name} ({item.product.grade})</div>
                                            <div className="text-sm text-muted-foreground">x{item.quantity}</div>
                                        </div>
                                        <div>₹{(item.priceAtTime * item.quantity).toLocaleString("en-IN")}</div>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-4 font-bold">
                                    <div>Total</div>
                                    <div>₹{order.totalAmount.toLocaleString("en-IN")}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Razorpay Order ID</span>
                                <span className="font-mono text-sm">{order.razorpayOrderId || "N/A"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Payment ID</span>
                                <span className="font-mono text-sm">{order.paymentId || "N/A"}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Customer Details */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="font-medium">{order.customer.name || "Guest"}</div>
                                <div className="text-sm text-primary hover:underline mt-1">
                                    <Link href={`/admin/customers`}>View Customer</Link>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground mb-1">Contact Info</div>
                                <div className="text-sm">{order.customer.email || "No email"}</div>
                                <div className="text-sm">{order.customer.phone}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground mb-1">Shipping Address</div>
                                <div className="text-sm whitespace-pre-wrap">
                                    {order.shippingAddress || order.customer.address || "No address provided."}
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="h-4 w-4" />
                                        Contact via WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
