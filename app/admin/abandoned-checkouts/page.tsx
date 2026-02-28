import { prisma } from "@/lib/db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminAbandonedCheckoutsPage() {
    const sessions = await prisma.cartSession.findMany({
        where: { status: "ACTIVE" }, // An active session without an order is an abandoned checkout
        orderBy: { updatedAt: "desc" },
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Abandoned Checkouts</h1>
                <p className="text-muted-foreground">Recover lost sales via WhatsApp.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer / Phone</TableHead>
                            <TableHead>Cart Items</TableHead>
                            <TableHead>Total Value</TableHead>
                            <TableHead>Last Active</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sessions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No abandoned checkouts found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            sessions.map((session: any) => {
                                const items = JSON.parse(session.items);
                                const total = items.reduce((sum: number, item: any) => sum + (item.product.price * item.quantity), 0);

                                // Construct WhatsApp recovery message
                                const message = `Hi! 🥭 We noticed you left some authentic Ratnagiri Alphonso mangoes in your cart at Aam Native.\n\nHere's what you selected:\n${items.map((i: any) => `- ${i.quantity}x ${i.product.name}`).join("\n")}\n\nWould you like help completing your order? Reply here to finish securely via WhatsApp!`;
                                const whatsappUrl = `https://wa.me/91${session.phone}?text=${encodeURIComponent(message)}`;

                                return (
                                    <TableRow key={session.id}>
                                        <TableCell className="font-medium">
                                            {session.phone || "Unknown"}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex -space-x-2 overflow-hidden">
                                                {items.slice(0, 3).map((item: any, i: number) => (
                                                    <div key={i} className="relative h-8 w-8 rounded-full border-2 border-white bg-neutral-100 overflow-hidden" title={item.product.name}>
                                                        <Image src={item.product.image} alt="product" fill className="object-cover" />
                                                    </div>
                                                ))}
                                                {items.length > 3 && (
                                                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-xs font-medium">
                                                        +{items.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>₹{total.toLocaleString("en-IN")}</TableCell>
                                        <TableCell>
                                            {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(session.updatedAt)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                                    <MessageCircle className="h-4 w-4 mr-2" /> Recover
                                                </a>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
