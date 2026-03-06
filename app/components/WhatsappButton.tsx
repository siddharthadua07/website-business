"use client"

import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {

    const phoneNumber = "919242944759"; // apna number
    const message = "Hello, I want to know more about your services.";

    const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
        >
            <MessageCircle className="text-white w-7 h-7" />
        </a>
    );
}