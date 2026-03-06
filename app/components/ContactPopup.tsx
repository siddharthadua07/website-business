"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { X, User, Phone } from "lucide-react";

interface LeadPopupProps {
    open?: boolean;
    setOpen?: (value: boolean) => void;
}

export default function LeadPopup({ open, setOpen }: LeadPopupProps) {

    const [internalOpen, setInternalOpen] = useState(false);

    const isOpen = open ?? internalOpen;
    const setIsOpen = setOpen ?? setInternalOpen;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    // 15 sec auto popup
    useEffect(() => {

        const popupClosed = localStorage.getItem("popupClosed");

        if (popupClosed) return;

        const timer = setTimeout(() => {
            if (setOpen) {
                setOpen(true);
            } else {
                setInternalOpen(true);
            }
        }, 15000);

        return () => clearTimeout(timer);

    }, []);


    const sendEmail = async (e: React.FormEvent) => {

        e.preventDefault();
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!name || !phoneRegex.test(phone)) {
            toast.error("Enter valid Indian phone number");
            return;
        }

        setLoading(true);

        try {

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_POPUP!,
                {
                    name: name,
                    phone: phone,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.success("Consultation request sent 🚀");
            localStorage.setItem("popupClosed", "true");
            setName("");
            setPhone("");
            setIsOpen(false);

        } catch (error) {

            toast.error("Failed to send message");

        }

        setLoading(false);
    };
    const handleClose = () => {
        localStorage.setItem("popupClosed", "true");

        if (setOpen) {
            setOpen(false);
        } else {
            setInternalOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

            <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-[popup_0.4s_ease]">

                {/* close button */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-red-500 transition cursor-pointer"
                >
                    <X size={22} />
                </button>

                {/* title */}
                <h2 className="text-2xl font-bold text-center text-sky-600 mb-2">
                    Get Free Consultation
                </h2>

                <p className="text-center text-gray-500 mb-6">
                    Enter your details and we will contact you.
                </p>

                {/* form */}
                <form onSubmit={sendEmail} className="space-y-4">

                    <div className="flex items-center border rounded-lg px-3 py-2 focus-within:border-sky-500">
                        <User className="text-sky-500 mr-2" size={18} />
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-lg px-3 py-2 focus-within:border-sky-500">
                        <Phone className="text-sky-500 mr-2" size={18} />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            maxLength={10}
                            required
                            onChange={(e) => {

                                const value = e.target.value.replace(/\D/g, "");

                                if (value.length <= 10) {
                                    setPhone(value);
                                }

                            }}
                            className="w-full outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                </form>

            </div>
        </div>
    );
}