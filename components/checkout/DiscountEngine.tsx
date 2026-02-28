"use client";

import { useState } from "react";
import { BadgePercent, ChevronRight } from "lucide-react";

export default function DiscountEngine({ subtotal }: { subtotal: number }) {
    const [couponCode, setCouponCode] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState<null | { code: string; amount: number }>(null);

    // Mock discount logic
    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        if (couponCode.toUpperCase() === "WELCOME10") {
            setAppliedDiscount({ code: "WELCOME10", amount: subtotal * 0.1 });
        } else if (couponCode.toUpperCase() === "FREESHIP") {
            setAppliedDiscount({ code: "FREESHIP", amount: 200 }); // Mock shipping cost
        } else {
            alert("Invalid coupon code.");
        }
    };

    const handleRemove = () => {
        setAppliedDiscount(null);
        setCouponCode("");
    };

    return (
        <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] my-4">
            <div className="flex items-center gap-2 mb-3">
                <BadgePercent className="h-5 w-5 text-green-700" />
                <h3 className="text-sm font-semibold text-neutral-800">Offers & Benefits</h3>
            </div>

            {appliedDiscount ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div>
                        <p className="text-sm font-bold text-green-800 tracking-wide">{appliedDiscount.code}</p>
                        <p className="text-xs text-green-700 mt-0.5">You saved ₹{appliedDiscount.amount.toLocaleString()}!</p>
                    </div>
                    <button onClick={handleRemove} className="text-xs font-medium text-green-700 hover:text-green-900 underline underline-offset-2">
                        Remove
                    </button>
                </div>
            ) : (
                <form onSubmit={handleApply} className="flex flex-col gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="w-full h-12 pl-4 pr-24 rounded-lg bg-neutral-50 border border-neutral-200 text-sm font-medium focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none uppercase placeholder:normal-case transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={!couponCode}
                            className="absolute right-1 top-1 bottom-1 px-4 text-sm font-bold text-white bg-green-700 rounded-md disabled:bg-neutral-300 disabled:text-neutral-500 hover:bg-green-800 transition-colors"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Mock Available Coupons (Food Delivery Style) */}
                    <div className="flex bg-[#F8F9FA] rounded-xl p-0.5 mt-1 border border-neutral-200/60 overflow-hidden">
                        <button type="button" onClick={() => setCouponCode("WELCOME10")} className="flex-1 flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center -rotate-12">
                                    <span className="text-white text-[10px] font-black leading-none">%</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-neutral-900 leading-none mb-1">WELCOME10</p>
                                    <p className="text-[10px] font-medium text-neutral-500">Save 10% on your first order</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-800 transition-colors" />
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
