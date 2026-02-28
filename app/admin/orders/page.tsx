import { prisma } from "@/lib/db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
    const orders = await prisma.order.findMany({
        include: {
            customer: true,
            items: true,
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                <p className="text-muted-foreground">Manage fulfillment and track payments.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Payment</TableHead>
                            <TableHead>Fulfillment</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            orders.map((order: any) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">
                                        <Link href={`/admin/orders/${order.id}`} className="hover:underline">
                                            {order.orderNumber}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {new Intl.DateTimeFormat("en-IN", {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        }).format(order.createdAt)}
                                    </TableCell>
                                    <TableCell>{order.customer.name || order.customer.phone}</TableCell>
                                    <TableCell>
                                        <Badge variant={order.status === "PAID" ? "default" : "secondary"}>
                                            {order.status === "PAID" ? "Paid" : "Pending"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">Unfulfilled</Badge>
                                    </TableCell>
                                    <TableCell className="text-right font-medium">
                                        ₹{(order.totalAmount || 0).toLocaleString("en-IN")}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
