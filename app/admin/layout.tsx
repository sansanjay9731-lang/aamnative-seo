import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Package, Users } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dark-admin min-h-screen bg-background flex font-sans text-foreground">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/admin" className="font-bold text-lg tracking-tight">
                        <span className="text-[var(--saffron)]">Aam Native</span> <span className="text-muted-foreground">OMS</span>
                    </Link>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                        <LayoutDashboard size={18} />
                        Overview
                    </Link>
                    <Link
                        href="/admin/orders"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                        <ShoppingCart size={18} />
                        Orders
                    </Link>
                    <Link
                        href="/admin/products"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                        <Package size={18} />
                        Products
                    </Link>
                    <Link
                        href="/admin/customers"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                        <Users size={18} />
                        Customers
                    </Link>
                    <Link
                        href="/admin/abandoned-checkouts"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                        <ShoppingCart size={18} />
                        Cart Recovery
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 lg:px-8">
                    <div className="flex md:hidden">
                        <span className="font-bold text-[var(--saffron)]">Aam Native</span>
                    </div>
                    <div className="flex-1" /> {/* Spacer */}
                    <div className="flex items-center gap-4">
                        {/* UserButton disabled for demo */}
                        <div className="w-8 h-8 rounded-full bg-muted border border-border"></div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-6 lg:p-8 overflow-auto bg-background">
                    {children}
                </div>
            </main>
        </div >
    );
}
