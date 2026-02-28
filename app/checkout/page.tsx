"use client";

import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2, Loader2, ShieldCheck, MapPin, ChevronRight, Lock, User, Edit2, Check, ArrowLeft, ChevronDown, MapPinIcon, InfoIcon, QrCode, CreditCard, Landmark, Wallet, Truck, Building2 } from "lucide-react";

export default function CheckoutPage() {
    const { items: cart, subtotal, clearCart } = useCart();
    const router = useRouter();

    const [activeStep, setActiveStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [successOrderId, setSuccessOrderId] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        saveAs: "Home" // Home, Friends, Work, Other
    });

    // Shopflo-Style OTP State
    const [otpState, setOtpState] = useState<'phone' | 'otp'>('phone');
    const [otpValue, setOtpValue] = useState("");

    // Payment State
    const [selectedPayment, setSelectedPayment] = useState<string | null>("upi");

    const totalAmount = subtotal;

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitPhone = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.phone || formData.phone.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
        setOtpState('otp');
    };

    const submitOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (otpValue === "1234") {
            setCompletedSteps(prev => Array.from(new Set([...prev, 1])));
            setActiveStep(2);
        } else {
            alert("Invalid OTP. Please enter 1234 for testing.");
        }
    };

    const submitAddress = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.address || !formData.pincode || !formData.city || !formData.state) {
            alert("Please fill all required shipping details.");
            return;
        }

        try {
            await fetch("/api/cart/sync", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cart, phone: formData.phone }),
            });
        } catch (err) {
            console.error("Failed to sync cart session", err);
        }

        setCompletedSteps(prev => Array.from(new Set([...prev, 2])));
        setActiveStep(3);
    };

    const handlePayment = async () => {
        setLoading(true);
        try {
            const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode} (${formData.saveAs})`;

            // 1. Generate Order ID
            const res = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items: cart,
                    totalAmount: selectedPayment === "cod" ? totalAmount + 19 : totalAmount,
                    customerDetails: {
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        address: fullAddress,
                    }
                }),
            });

            const orderData = await res.json();
            if (!orderData.success) throw new Error(orderData.error || "Failed to create order");

            if (orderData.isDemo || selectedPayment === "cod") {
                clearCart();
                setSuccessOrderId(orderData.dbOrderId);
                setActiveStep(4);
                setLoading(false);
                return;
            }

            // 2. Initialize Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "pk_test_placeholder",
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Aam Native",
                description: "Farm Fresh Ratnagiri Alphonso Mangoes",
                image: "/favicon.ico",
                order_id: orderData.orderId,
                handler: async function (response: any) {
                    const verifyRes = await fetch("/api/razorpay/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            dbOrderId: orderData.dbOrderId,
                        }),
                    });

                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        clearCart();
                        setSuccessOrderId(orderData.dbOrderId);
                        setActiveStep(4);
                    } else {
                        alert("Payment verification failed. Please contact support.");
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: { color: "#16a34a" },
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.on("payment.failed", function (response: any) {
                alert(`Payment Failed: ${response.error.description}`);
            });
            rzp.open();
        } catch (error) {
            console.error(error);
            alert("Something went wrong initializing the payment gateway. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0 && activeStep !== 4) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-neutral-50">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Button onClick={() => router.push("/products")} className="bg-green-700 hover:bg-green-800 h-12 px-8 text-base rounded-full">
                    Continue Shopping
                </Button>
            </div>
        );
    }

    if (activeStep === 4) {
        return (
            <div className="min-h-screen bg-neutral-50 py-16 px-4 font-sans">
                <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="animate-in zoom-in duration-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">Order Confirmed!</h1>
                    <p className="text-neutral-500 mb-8 text-sm">Thank you, {formData.name}. Your authentic Ratnagiri Alphonso mangoes are preparing for dispatch.</p>
                    <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 mb-8 text-left">
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">Order ID</p>
                        <p className="font-mono text-lg font-medium text-neutral-800">{successOrderId}</p>
                    </div>
                    <Button onClick={() => router.push("/")} className="bg-green-700 hover:bg-green-800 h-14 w-full text-base rounded-xl font-bold shadow-sm">
                        Continue Shopping
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-800/80 backdrop-blur-sm flex items-start justify-center py-0 sm:py-8 font-sans">
            <div className="w-full max-w-[450px] bg-[#f2f2f2] sm:rounded-[32px] overflow-hidden shadow-2xl min-h-screen sm:min-h-[auto] relative flex flex-col">

                {/* Header Section */}
                <div className="bg-white sticky top-0 z-50">
                    <div className="px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <ArrowLeft className="w-5 h-5 text-neutral-600 cursor-pointer" onClick={() => {
                                if (activeStep > 1) setActiveStep(activeStep - 1);
                                else router.push('/cart');
                            }} />
                            <div className="font-serif font-bold text-lg leading-none tracking-tight text-neutral-900">Aam Native</div>
                        </div>
                        <div className="flex flex-col items-end cursor-pointer">
                            <span className="text-[10px] text-neutral-500 font-medium">Order total</span>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-neutral-900">₹{totalAmount.toLocaleString("en-IN")}</span>
                                <ChevronDown className="w-4 h-4 text-neutral-500" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-700 text-white text-xs font-semibold py-2 px-4 text-center">
                        Fresh Mangoes 10% Off - WIN10 | 15% off for MEMBERS 🥭
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">

                    {/* STEP 1: LOGIN (Shopflo First Prompt) */}
                    {activeStep === 1 && (
                        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-neutral-100 relative overflow-hidden">
                            <h2 className="text-xl font-bold text-neutral-900 mb-1">Almost there...</h2>
                            <p className="text-sm text-neutral-500 mb-5">Verify your phone number to place an order</p>

                            {otpState === 'phone' ? (
                                <form onSubmit={submitPhone} className="animate-in fade-in duration-300">
                                    <div className="relative flex items-center mb-4">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                                            <span className="text-lg">🇮🇳</span>
                                            <ChevronDown className="w-3 h-3 text-neutral-400" />
                                            <span className="text-base text-neutral-800 font-medium ml-1">+91</span>
                                            <div className="w-px h-5 bg-neutral-200 ml-1"></div>
                                        </div>
                                        <Input
                                            required id="phone" name="phone" type="tel" pattern="[0-9]{10}" placeholder="" value={formData.phone} onChange={handleInputChange}
                                            className="h-14 pl-[125px] pr-4 rounded-xl border-neutral-300 focus-visible:border-green-700 focus-visible:ring-1 focus-visible:ring-green-700 text-base font-medium tracking-wide bg-white transition-all shadow-sm"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-[#175E4C] hover:bg-[#124d3e] text-white h-14 rounded-xl font-bold text-base shadow-sm">
                                        Verify with OTP
                                    </Button>
                                    <div className="mt-4 flex items-start gap-2 text-xs text-neutral-500 justify-center">
                                        <input type="checkbox" id="offers" className="mt-0.5 rounded border-neutral-300 accent-[#175E4C]" defaultChecked />
                                        <label htmlFor="offers">Keep me posted about sales and offers</label>
                                    </div>
                                    <div className="mt-6 flex justify-center items-center gap-1 text-[10px] text-neutral-400 font-medium">
                                        Powered by <span className="font-bold text-neutral-500">shopflo</span>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={submitOtp} className="animate-in slide-in-from-right-2 duration-300">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-xs text-neutral-500">OTP sent to</p>
                                            <p className="text-sm font-bold text-neutral-900">+91 {formData.phone}</p>
                                        </div>
                                        <button type="button" onClick={() => setOtpState('phone')} className="text-xs font-bold text-blue-600 hover:text-blue-800">
                                            Change Number
                                        </button>
                                    </div>
                                    <div className="relative mb-6">
                                        <Input
                                            required id="otp" type="text" pattern="[0-9]{4}" maxLength={4}
                                            placeholder="••••" value={otpValue} onChange={(e) => setOtpValue(e.target.value.replace(/\D/g, ''))}
                                            className="h-14 px-4 text-center tracking-[1em] text-2xl font-bold rounded-xl border-neutral-300 focus-visible:border-green-700 focus-visible:ring-1 focus-visible:ring-green-700 bg-white shadow-sm"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-[#175E4C] hover:bg-[#124d3e] text-white h-14 rounded-xl font-bold text-base shadow-sm">
                                        Verify & Continue
                                    </Button>
                                </form>
                            )}
                        </div>
                    )}

                    {/* COMPLETED STEP 1 OR 2 SUMMARY */}
                    {completedSteps.includes(1) && activeStep >= 2 && (
                        <div className="space-y-4">
                            {/* Deliver To Card */}
                            <div className="bg-white rounded-[20px] p-4 shadow-sm border border-neutral-100">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                                        <MapPinIcon className="w-4 h-4" />
                                        <span>Deliver to <span className="bg-neutral-100 px-2 py-0.5 rounded text-xs ml-1">{formData.saveAs || "Home"}</span></span>
                                    </div>
                                    {activeStep === 3 && (
                                        <button onClick={() => setActiveStep(2)} className="text-xs font-semibold text-blue-600 flex items-center">
                                            Edit <ChevronRight className="w-3 h-3 ml-0.5" />
                                        </button>
                                    )}
                                </div>
                                <div className="text-sm text-neutral-600 space-y-1 pl-6">
                                    {formData.name ? (
                                        <>
                                            <p><span className="font-semibold text-neutral-800">{formData.name}</span>, {formData.address}</p>
                                            <p>{formData.city}, {formData.state} - <span className="font-medium text-neutral-800">{formData.pincode}</span></p>
                                            <p className="flex items-center gap-2 mt-2 text-neutral-500 text-xs">
                                                <span>📞 +91 {formData.phone}</span>
                                                {formData.email && <span>✉️ {formData.email}</span>}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-neutral-400 italic">No address provided</p>
                                    )}
                                </div>
                                <div className="mt-4 pt-3 border-t border-dashed border-neutral-200 flex items-center justify-between text-sm pl-6">
                                    <div className="flex items-center gap-2 text-neutral-700 font-medium">
                                        <Truck className="w-4 h-4 text-neutral-400" /> Shipping
                                    </div>
                                    <span className="text-green-700 font-bold uppercase text-xs">Free <ChevronDown className="w-3 h-3 inline-block ml-1 opacity-50" /></span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: ADDRESS FORM (When Active) */}
                    {activeStep === 2 && (
                        <div className="bg-white rounded-[20px] shadow-sm border border-neutral-100 overflow-hidden animate-in slide-in-from-right-2 duration-300 relative z-50 mt-4">
                            <div className="bg-green-700 text-white text-xs font-semibold py-2 px-4 text-center">
                                Add new address
                            </div>
                            <form onSubmit={submitAddress} className="p-4 space-y-4">
                                <div>
                                    <label className="text-xs text-neutral-500 font-medium pl-1 mb-1 block">Pincode *</label>
                                    <Input required name="pincode" value={formData.pincode} onChange={handleInputChange} className="h-12 rounded-xl" placeholder="6-digit PIN" />
                                </div>
                                <div>
                                    <label className="text-xs text-neutral-500 font-medium pl-1 mb-1 block">Address *</label>
                                    <Input required name="address" value={formData.address} onChange={handleInputChange} className="h-12 rounded-xl" placeholder="House/Flat No., Street Name" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <Input required name="city" value={formData.city} onChange={handleInputChange} className="h-12 rounded-xl bg-neutral-50" placeholder="City" />
                                    </div>
                                    <div className="flex-1">
                                        <Input required name="state" value={formData.state} onChange={handleInputChange} className="h-12 rounded-xl bg-neutral-50" placeholder="State/India" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <label className="text-xs text-neutral-500 font-medium pl-1 mb-1 block">Full Name *</label>
                                    <Input required name="name" value={formData.name} onChange={handleInputChange} className="h-12 rounded-xl" placeholder="Enter your full name" />
                                </div>
                                <div>
                                    <label className="text-xs text-neutral-500 font-medium pl-1 mb-1 block">Email (Optional)</label>
                                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} className="h-12 rounded-xl" placeholder="For order updates" />
                                </div>

                                {/* Save As Selector */}
                                <div className="pt-2">
                                    <label className="text-xs text-neutral-500 font-medium pl-1 mb-2 block">Save as</label>
                                    <div className="flex gap-2 text-xs font-medium overflow-x-auto pb-2 scrollbar-hide">
                                        {['Home', 'Friends', 'Work', 'Other'].map(type => (
                                            <div
                                                key={type}
                                                onClick={() => setFormData({ ...formData, saveAs: type })}
                                                className={`px-4 py-2 rounded-full border cursor-pointer flex items-center gap-1 transition-all whitespace-nowrap ${formData.saveAs === type ? 'border-green-700 bg-green-50 text-green-800' : 'border-neutral-200 text-neutral-600'}`}
                                            >
                                                {type === 'Home' && <MapPinIcon className="w-3 h-3" />}
                                                {type === 'Work' && <Building2 className="w-3 h-3" />}
                                                {type === 'Friends' && <User className="w-3 h-3" />}
                                                {type === 'Other' && <MapPin className="w-3 h-3" />}
                                                {type}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 text-[10px] text-neutral-400 mt-2">
                                    <ShieldCheck className="w-3 h-3 mt-0.5 shrink-0" />
                                    <p>This address will be secured with OTP on Shopflo checkouts. View Terms and conditions and Privacy Policy.</p>
                                </div>

                                <Button type="submit" className="w-full bg-[#175E4C] hover:bg-[#124d3e] text-white h-14 rounded-xl font-bold text-base shadow-sm mt-4">
                                    Save and continue
                                </Button>
                            </form>
                        </div>
                    )}

                    {/* STEP 3: PAYMENT & OFFERS */}
                    {activeStep === 3 && (
                        <div className="space-y-4 animate-in slide-in-from-right-2 duration-300">

                            {/* Offers Card */}
                            <div className="bg-white rounded-[20px] p-4 shadow-sm border border-neutral-100 text-sm">
                                <h3 className="text-xs text-neutral-500 font-medium mb-3">Offers & Rewards</h3>
                                <div className="flex items-center justify-between border border-green-200 bg-green-50/50 p-3 rounded-xl cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">%</div>
                                        <div>
                                            <p className="font-bold text-green-800 text-sm">More offers</p>
                                        </div>
                                    </div>
                                    <div className="text-green-700 font-semibold text-xs flex items-center">
                                        Enter a coupon code <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-[20px] p-0 shadow-sm border border-neutral-100 overflow-hidden">
                                <div className="p-4 pb-2">
                                    <h3 className="text-xs text-neutral-500 font-medium">Payment methods</h3>
                                </div>

                                <div className="divide-y divide-neutral-100 flex flex-col">

                                    {/* UPI Option (Selected) */}
                                    <div className={`p-4 transition-all ${selectedPayment === 'upi' ? 'bg-neutral-50' : 'cursor-pointer'}`} onClick={() => setSelectedPayment('upi')}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <QrCode className="w-5 h-5 text-orange-600" />
                                                <span className="font-medium text-neutral-800 text-sm">Scan and Pay via UPI apps</span>
                                            </div>
                                            {selectedPayment === 'upi' ? (
                                                <span className="font-bold text-neutral-900 text-sm">₹{totalAmount.toLocaleString("en-IN")}</span>
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-neutral-400" />
                                            )}
                                        </div>

                                        {selectedPayment === 'upi' && (
                                            <div className="mt-4 flex gap-4 animate-in fade-in zoom-in-95 duration-200 pl-8">
                                                <div className="flex gap-2 items-center text-xs font-semibold text-neutral-600">
                                                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-[10px] text-purple-700 font-bold">Pe</div>
                                                    PhonePe
                                                </div>
                                                <div className="flex gap-2 items-center text-xs font-semibold text-neutral-600">
                                                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 shadow-sm flex items-center justify-center font-bold text-blue-600">G</div>
                                                    GPay
                                                </div>
                                                {/* Mock QR Code area */}
                                                <div className="ml-auto w-16 h-16 bg-white border border-neutral-300 rounded p-1 flex items-center justify-center opacity-50">
                                                    <QrCode className="w-full h-full text-neutral-400" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Cash on Delivery */}
                                    <div className={`p-4 transition-all ${selectedPayment === 'cod' ? 'bg-neutral-50' : 'cursor-pointer hover:bg-neutral-50/50'}`} onClick={() => setSelectedPayment('cod')}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <Landmark className="w-5 h-5 text-neutral-500" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-neutral-800 text-sm">Cash on delivery</span>
                                                    <span className="text-[10px] text-neutral-500">Pay with cash (Incl. COD fee of ₹19)</span>
                                                </div>
                                            </div>
                                            {selectedPayment === 'cod' ? (
                                                <span className="font-bold text-neutral-900 text-sm">₹{(totalAmount + 19).toLocaleString("en-IN")}</span>
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-neutral-400" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Debit/Credit Cards */}
                                    <div className={`p-4 transition-all ${selectedPayment === 'card' ? 'bg-neutral-50' : 'cursor-pointer hover:bg-neutral-50/50'}`} onClick={() => setSelectedPayment('card')}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <CreditCard className="w-5 h-5 text-blue-600" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-neutral-800 text-sm">Debit/Credit cards</span>
                                                    <span className="text-[10px] text-neutral-500">Visa, Mastercard, RuPay & more</span>
                                                </div>
                                            </div>
                                            {selectedPayment === 'card' ? (
                                                <span className="font-bold text-neutral-900 text-sm">₹{totalAmount.toLocaleString("en-IN")}</span>
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-neutral-400" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Netbanking */}
                                    <div className={`p-4 transition-all cursor-pointer hover:bg-neutral-50/50`} onClick={() => setSelectedPayment('netbanking')}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <Landmark className="w-5 h-5 text-indigo-500" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-neutral-800 text-sm">Netbanking</span>
                                                    <span className="text-[10px] text-neutral-500">Select from a list of banks</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-neutral-400" />
                                        </div>
                                    </div>

                                    {/* Wallets */}
                                    <div className={`p-4 transition-all cursor-pointer hover:bg-neutral-50/50`} onClick={() => setSelectedPayment('wallet')}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <Wallet className="w-5 h-5 text-teal-600" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-neutral-800 text-sm">Wallets</span>
                                                    <span className="text-[10px] text-neutral-500">Freecharge, Airtel, PayZapp & more</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-neutral-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>

                {/* Sticky Footer / Payment Button (Only shows on Step 3) */}
                {activeStep === 3 && (
                    <div className="bg-white border-t border-neutral-100 p-4 sticky bottom-0 z-50 rounded-b-[32px]">
                        <div className="flex justify-between items-center mb-4 text-xs">
                            <div className="flex items-center gap-2 text-neutral-500">
                                <input type="checkbox" id="footer-offers" className="rounded" defaultChecked />
                                <label htmlFor="footer-offers">Keep me posted about sales and offers</label>
                            </div>
                        </div>
                        <Button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full bg-[#175E4C] hover:bg-[#124d3e] text-white h-[60px] rounded-xl font-bold text-lg shadow-sm flex flex-col items-center justify-center gap-0.5"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                <>
                                    <span>Place Order</span>
                                </>
                            )}
                        </Button>
                        <div className="flex justify-between items-center mt-4 text-[10px] text-neutral-400 font-medium px-2 pb-2">
                            <span>Logged in with +91 {formData.phone}</span>
                            <span className="font-bold cursor-pointer" onClick={() => { setActiveStep(1); setCompletedSteps([]); }}>Log out</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
