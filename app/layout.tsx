

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/app/components/WhatsappButton";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { Toaster } from "react-hot-toast";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sptechdigital.com"),

  title: {
    default: "SP TechDigital - Website Development Company",
    template: "%s | SP TechDigital"
  },

  description:
    "Professional website development company building ecommerce, business, doctor, gym and travel websites with SEO optimization.",

  keywords: [
    "website development",
    "web developer",
    "ecommerce website development",
    "business website",
    "doctor website",
    "gym website",
    "travel website",
  ],

  authors: [{ name: "Siddhartha Dua" }],

  openGraph: {
    title: "SP TechDigital - Website Development Company",
    description:
      "Modern responsive websites for businesses, ecommerce, doctors, gyms and travel companies.",
    url: "https://sptechdigital.com",
    siteName: "SP TechDigital",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans pt-16`}>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
        <WhatsappButton />


        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0ea5e9",
              color: "#fff",
              borderRadius: "10px",
            },
          }}
        />
      </body>
    </html>
  );
}