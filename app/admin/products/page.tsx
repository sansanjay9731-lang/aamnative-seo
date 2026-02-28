import { prisma } from "@/lib/db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
    const products = await prisma.product.findMany({
        orderBy: { price: "desc" },
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                <p className="text-muted-foreground">Manage your mango catalogue and inventory.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Image</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Inventory</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product: any) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="relative h-10 w-10 overflow-hidden rounded-md border">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    {product.name}
                                    <div className="text-sm text-muted-foreground font-normal">
                                        {product.grade} Grade
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={product.inStock ? "default" : "destructive"}>
                                        {product.inStock ? "Active" : "Draft"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {product.inStock ? "In stock" : "Out of stock"}
                                </TableCell>
                                <TableCell className="text-right font-medium">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
