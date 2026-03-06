

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Youtube,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FooterProps {
    onGetStarted?: () => void;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/service" },
    { label: "Course", href: "/course" },
    { label: "About Us", href: "/about" },

];

const serviceLinks = [
    { label: "E-commerce Website", href: "/service" },
    { label: "Business / Corporate Website", href: "/service" },
    { label: "Booking Website", href: "/service" },
    { label: "Restaurant / Cafe Website", href: "/service" },
    { label: "Personal / Portfolio Website", href: "/service" },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Phone, href: "tel:+919242944759", label: "Phone" },
    { icon: Mail, href: "mailto:sptechdigital99@gmail.com", label: "Email" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Footer: React.FC<FooterProps> = ({ onGetStarted }) => {


    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* ── JSON-LD Structured Data for SEO ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Sp TechDigital",
                        url: "https://sptechdigital.com",
                        logo: "https://sptechdigital.com/footerlogo.png",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-9242944759",
                            contactType: "customer service",
                            email: "sptechdigital99@gmail.com",
                            areaServed: "IN",
                            availableLanguage: ["English", "Hindi"],
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "West Bengal",
                            postalCode: "721644",
                            addressRegion: "Moyna ",
                            addressCountry: "IN",
                        },
                        sameAs: [

                            "https://www.instagram.com/siddharth_coding",

                        ],
                    }),
                }}
            />

            <footer
                className="relative bg-black text-white pt-16  px-5 overflow-hidden"
                role="contentinfo"
                aria-label="Site footer"
            >
                {/* Background glow blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 15% 80%, rgba(56,189,248,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(56,189,248,0.04) 0%, transparent 50%)",
                    }}
                />

                {/* Animated shimmer top border */}
                <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent 0%, #38bdf8 30%, #0ea5e9 50%, #38bdf8 70%, transparent 100%)",
                        backgroundSize: "200% 100%",
                        animation: "footerShimmer 8s linear infinite",
                    }}
                />

                {/* Keyframe — single inline style tag, no external CSS */}
                <style>{`@keyframes footerShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>

                <div className="relative z-10 max-w-7xl mx-auto  ">

                    {/* ── 4-Column Grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* BRAND */}
                        <div>
                            <Link
                                href="/"
                                aria-label="Sp TechDigital — Go to homepage"
                                className="inline-block transition-opacity duration-200 hover:opacity-80"
                            >
                                <Image
                                    src="/footerlogo.png"
                                    alt="Sp TechDigital Logo"
                                    width={160}
                                    height={52}
                                    loading="lazy"
                                    className="h-12 w-auto object-contain"
                                />
                            </Link>
                            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                We build modern websites, digital products and growth-driven
                                marketing strategies for businesses worldwide.
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <nav aria-label="Quick navigation links">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
                                Quick Links
                                <span className="block mt-1 h-0.5 w-6 bg-sky-400 rounded-full" />
                            </h2>
                            <ul className="space-y-3" role="list">
                                {quickLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="group flex items-center gap-1.5 text-sm text-gray-400 transition-all duration-300 hover:text-sky-400 hover:translate-x-1"
                                        >
                                            <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base leading-none">
                                                ›
                                            </span>
                                            {label}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </nav>

                        {/* SERVICES */}
                        <nav aria-label="Services navigation">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
                                Services
                                <span className="block mt-1 h-0.5 w-6 bg-sky-400 rounded-full" />
                            </h2>
                            <ul className="space-y-3" role="list">
                                {serviceLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="group flex items-center gap-1.5 text-sm text-gray-400 transition-all duration-300 hover:text-sky-400 hover:translate-x-1"
                                        >
                                            <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base leading-none">
                                                ›
                                            </span>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CONTACT INFO */}
                        <address className="not-italic" aria-label="Contact information">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
                                Contact Us
                                <span className="block mt-1 h-0.5 w-6 bg-sky-400 rounded-full" />
                            </h2>
                            <ul className="space-y-4" role="list">
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <Mail className="text-sky-400 text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <a
                                        href="mailto:sptechdigital99@gmail.com"
                                        className="hover:text-sky-400 transition-colors duration-300 break-all"
                                    >
                                        contact@sptechdigital.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <Phone className="text-sky-400 text-sm mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <a
                                        href="tel:+919242944759"
                                        className="hover:text-sky-400 transition-colors duration-300"
                                    >
                                        +91 9242944759
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <MapPin className="text-sky-400 text-sm mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <span className="leading-relaxed">
                                        Moyna – 721644, West Bengal, India
                                    </span>
                                </li>
                            </ul>
                        </address>
                    </div>

                    {/* ── Social Icons ── */}
                    <div className="flex flex-wrap gap-3 mt-10" aria-label="Social media links">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-gray-400 text-base transition-all duration-300 hover:text-sky-400 hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_25px_rgba(56,189,248,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
                            >
                                <Icon aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    {/* ── Bottom Copyright Bar ── */}
                    <div className="flex items-center justify-center py-6 mt-12 border-t border-white/10">
                        <p className="flex items-center gap-2 text-sm text-gray-300 text-center">
                            <span
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-sky-400 text-[11px] flex-shrink-0"
                                aria-hidden="true"
                            >
                                ©
                            </span>
                            <span>{currentYear} Sp TechDigital. All rights reserved.</span>
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;