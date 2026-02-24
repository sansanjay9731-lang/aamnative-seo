"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/products";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product, qty?: number) => void;
    removeItem: (productId: string) => void;
    updateQty: (productId: string, qty: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("mango_cart");
        if (saved) setItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("mango_cart", JSON.stringify(items));
    }, [items]);

    const addItem = (product: Product, qty = 1) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
                );
            }
            return [...prev, { product, quantity: qty }];
        });
        setIsOpen(true);
    };

    const removeItem = (productId: string) =>
        setItems((prev) => prev.filter((i) => i.product.id !== productId));

    const updateQty = (productId: string, qty: number) => {
        if (qty <= 0) return removeItem(productId);
        setItems((prev) =>
            prev.map((i) => (i.product.id === productId ? { ...i, quantity: qty } : i))
        );
    };

    const clearCart = () => setItems([]);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, isOpen, addItem, removeItem, updateQty, clearCart, openCart, closeCart, totalItems, subtotal }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
