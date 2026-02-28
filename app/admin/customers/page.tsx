import { prisma } from "@/lib/db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
    const customers = await prisma.customer.findMany({
        include: {
            _count: {
                select: { orders: true }
            }
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
                <p className="text-muted-foreground">Manage your customer relationships and order history.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="text-right">Total Orders</TableHead>
                            <TableHead className="text-right">Joined</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No customers found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            customers.map((customer: any) => (
                                <TableRow key={customer.id}>
                                    <TableCell className="font-medium">
                                        {customer.name || "Unknown"}
                                    </TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email || "—"}</TableCell>
                                    <TableCell className="text-right font-medium">
                                        {customer._count.orders}
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground">
                                        {new Intl.DateTimeFormat("en-IN", {
                                            dateStyle: "medium"
                                        }).format(customer.createdAt)}
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
