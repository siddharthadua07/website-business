"use client"


import React, { useState, useEffect } from "react";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
    Mail,
    MessageCircle,
    Search,
    LineChart,
    Facebook,
    FileText,
} from "lucide-react";

// --- Types ---

interface HeroProps {
    onGetStarted: () => void;
}

interface BarData {
    x: number;
    height: number;
    label: string;
}

interface OrbitIcon {
    icon: React.ReactNode;
    color: string;
    delayClass: string;
}

// --- Component ---

const HeroSection: React.FC<HeroProps> = ({ onGetStarted }) => {
    const fullText = React.useMemo(() => "Transform Your Digital Presence", []);
    const [displayText, setDisplayText] = useState<string>("");

    // Typewriter Effect
    useEffect(() => {
        let i = 0;

        const type = () => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
                setTimeout(type, 80);
            }
        };

        type();
    }, [fullText]);

    // Chart Data
    const barData = React.useMemo<BarData[]>(() => [
        { x: 50, height: 40, label: "Jan" },
        { x: 90, height: 60, label: "Feb" },
        { x: 130, height: 55, label: "Mar" },
        { x: 170, height: 85, label: "Apr" },
        { x: 210, height: 100, label: "May" },
        { x: 250, height: 125, label: "Jun" },
    ], []);

    // SVG Path Generator for Line Chart
    const linePath = barData
        .map(
            (bar, i) =>
                `${i === 0 ? "M" : "L"} ${bar.x + 10} ${130 - bar.height - 10}`
        )
        .join(" ");

    // Orbit Icons Configuration
    const orbitIcons = React.useMemo<OrbitIcon[]>(() => [
        { icon: <Mail size={20} />, color: "#87CEEB", delayClass: "delay-0" },
        { icon: <MessageCircle size={20} />, color: "#25D366", delayClass: "delay-1" },
        { icon: <Search size={20} />, color: "#FFD700", delayClass: "delay-2" },
        { icon: <LineChart size={20} />, color: "#FFA500", delayClass: "delay-3" },
        { icon: <Facebook size={20} />, color: "#1877F2", delayClass: "delay-4" },
        { icon: <FileText size={20} />, color: "#FFFFFF", delayClass: "delay-5" },
    ], []);

    // Helper to render heading with colored span
    const renderHeading = () => {
        const parts = displayText.split(/(Digital Presence)/g);
        return parts.map((part, index) =>
            part === "Digital Presence" ? (
                <span key={index} className="text-[#87CEEB] drop-shadow-[0_0_10px_rgba(135,206,235,0.3)]">
                    {part}
                </span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    return (
        <>
            <section aria-label="Website development hero section" className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-black via-[#0c4a6e] to-black text-white font-sans flex flex-col items-center justify-center">

                {/* Background Circuit Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#87CEEB 0.5px, transparent 0.5px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <main className="relative z-10 w-full max-w-7xl px-3 md:px-0 md:py-12 py-8 flex flex-col gap-8">
                    <h2 className="sr-only">
                        Professional Website Development Services for Businesses, Ecommerce, Doctors,
                        Gyms, Travel Agencies and Personal Brands
                    </h2>
                    {/* Hero Heading Section */}
                    <div className="text-center w-full mb-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[3.5rem] leading-tight tracking-tight">
                            {renderHeading()}
                            <span className="font-thin animate-blink text-[#87CEEB]">|</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl">
                            Grow your business with{" "}
                            <span className="text-[#87CEEB] font-semibold animate-highlight-blink">
                                SP TechDigital.
                            </span>
                        </p>
                    </div>

                    {/* Visual Content Container */}
                    <div className="flex flex-col lg:flex-row items-center justify-between md:gap-12 w-full">

                        {/* Left: Graph Card */}
                        <div className="w-full lg:w-1/2 max-w-lg">
                            <div className="bg-white/5 border border-[#87CEEB]/10 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-lg">
                                <h3 className="text-[#87CEEB] text-xs md:text-sm font-medium mb-4 uppercase tracking-wider">
                                    📈 Revenue Growth & Market Share
                                </h3>
                                <LazyMotion features={domAnimation}>
                                    <svg className="w-full h-auto overflow-visible" viewBox="0 0 300 160">
                                        {/* Base Line */}
                                        <line
                                            x1="30"
                                            y1="130"
                                            x2="280"
                                            y2="130"
                                            stroke="rgba(135, 206, 235, 0.2)"
                                            strokeWidth="1"
                                        />

                                        {/* Bars and Labels */}
                                        {barData.map((bar, i) => (
                                            <g key={i}>
                                                <m.rect
                                                    initial={{ height: 0, y: 130 }}
                                                    animate={{ height: bar.height, y: 130 - bar.height }}
                                                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                                    x={bar.x}
                                                    width="20"
                                                    fill="url(#barGradient)"
                                                    rx="3"
                                                />
                                                <m.text
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: i * 0.2 + 0.5 }}
                                                    x={bar.x + 10}
                                                    y="150"
                                                    textAnchor="middle"
                                                    fill="#87CEEB"
                                                    fontSize="10"
                                                >
                                                    {bar.label}
                                                </m.text>
                                            </g>
                                        ))}

                                        {/* Trend Line */}
                                        <m.path
                                            d={linePath}
                                            fill="none"
                                            stroke="#ADFF2F"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
                                        />

                                        {/* Gradient Definition */}
                                        <defs>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#87CEEB" />
                                                <stop offset="100%" stopColor="rgba(135, 206, 235, 0.1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </LazyMotion>
                            </div>
                        </div>

                        {/* Right: Orbit Animation */}
                        <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[350px]">
                            <div className="relative w-[250px] h-[250px] flex justify-center items-center orbit-container">

                                {/* Center Computer Icon */}
                                <div className="w-28 z-10">
                                    <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-lg">
                                        <rect x="10" y="20" width="80" height="50" rx="3" fill="none" stroke="#87CEEB" strokeWidth="2" />
                                        <rect x="15" y="25" width="70" height="40" fill="#1f2937" />
                                        <rect x="45" y="70" width="10" height="10" fill="#87CEEB" />
                                        <rect x="30" y="80" width="40" height="4" rx="2" fill="#87CEEB" />
                                    </svg>
                                </div>

                                {/* Orbiting Icons */}
                                {orbitIcons.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute top-1/2 left-1/2 -mt-5 -ml-5 orbit-icon ${item.delayClass}`}
                                    >
                                        <div
                                            className="bg-black/80 border p-2.5 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
                                            style={{ borderColor: item.color, color: item.color }}
                                        >
                                            {item.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Button Section */}
                    <div className="w-full flex justify-center md:mt-8">
                        <button
                            onClick={onGetStarted}
                            className="bg-[#87CEEB] text-black font-bold py-3 px-10 rounded-lg transform-gpu shadow-[0_10px_20px_rgba(135,206,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(135,206,235,0.5)] active:scale-95 cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>
                </main>
            </section>

            {/* Scoped Styles for Animations */}
            <style jsx>{`
                /* Cursor Blink */
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }

                /* Highlight Blink */
                @keyframes highlight-blink {
                    0%, 100% { opacity: 1; text-shadow: 0 0 5px #87CEEB; }
                    50% { opacity: 0.6; text-shadow: none; }
                }
                .animate-highlight-blink {
                    animation: highlight-blink 2s ease-in-out infinite;
                }

                /* Orbit Rotation */
                @keyframes rotate-orbit {
                    from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
                }

                /* Desktop Orbit Radius Adjustment */
                @media (min-width: 1024px) {
                    @keyframes rotate-orbit {
                        from { transform: rotate(0deg) translateX(160px) rotate(0deg); }
                        to { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
                    }
                }

                .orbit-icon {
                    animation: rotate-orbit 15s linear infinite;
                     will-change: transform;
                }

                /* Staggered Delays */
                .delay-0 { animation-delay: 0s; }
                .delay-1 { animation-delay: -2.5s; }
                .delay-2 { animation-delay: -5s; }
                .delay-3 { animation-delay: -7.5s; }
                .delay-4 { animation-delay: -10s; }
                .delay-5 { animation-delay: -12.5s; }
            `}</style>
        </>
    );
};

export default HeroSection;