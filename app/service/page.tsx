import { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
    title:
        "Professional Website Development Services | SP TechDigital Moyna West Bengal",

    description:
        "SP TechDigital provides professional website development services in Moyna, West Bengal. We build fast, SEO optimized, mobile responsive websites for businesses, ecommerce stores, startups and personal brands.",

    keywords: [
        "website development Moyna",
        "website development West Bengal",
        "web developer Moyna",
        "SP TechDigital website development",
        "professional website development service",
        "custom website development",
        "business website development",
        "ecommerce website development",
        "SEO optimized website development",
        "Next.js website development",
        "React website developer India",
    ],

    metadataBase: new URL("https://sptechdigital.com"),

    openGraph: {
        title:
            "Professional Website Development Services | SP TechDigital",
        description:
            "Custom website development services by SP TechDigital in Moyna, West Bengal. Fast, SEO optimized and modern websites for businesses and startups.",
        url: "https://sptechdigital.com/service",
        siteName: "SP TechDigital",
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Professional Website Development Services | SP TechDigital",
        description:
            "SP TechDigital builds fast, secure and SEO optimized websites for businesses and startups.",
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://sptechdigital.com/service",
    },
};

export default function Page() {
    return <ServicePage />;
}