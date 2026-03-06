
'use client'
import React from 'react';
import Head from 'next/head';
import {
    Users,
    Calendar,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Star
} from 'lucide-react';

// --- Types ---
interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}

interface FeaturePointProps {
    text: string;
}
interface WhyChooseUsProps {
    onJoinNow: () => void;
}
// --- Components ---

const FeaturePoint: React.FC<FeaturePointProps> = ({ text }) => (
    <div className="flex items-start gap-3 group">
        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
            <CheckCircle2 className="w-3 h-3 text-cyan-600" />
        </div>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
            {text}
        </p>
    </div>
);

const StatCard: React.FC<StatCardProps> = ({ icon, title, description, delay }) => (
    <div
        className={`relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up ${delay}`}
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-4 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
            {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export default function WhyChooseUs({ onJoinNow }: WhyChooseUsProps) {
    // SEO Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "SP TechDigital",
        "description": "Professional website development company delivering modern fast and SEO optimized websites.",
        "url": "https://sptechdigital.com",
        "areaServed": "Moyna",
        "serviceType": "Website Development",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "30"
        }
    };

    return (
        <>
            <Head>
                <title>Why Choose Us | Professional Website Development Company</title>
                <meta name="description" content="Trusted website development company with 3+ years experience, 30+ businesses and 50+ successful website projects." />
                <meta name="keywords" content="website development, business website, ecommerce website development, professional website developer" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <section aria-label="Why choose our website development services"
                style={{ contentVisibility: "auto" }}
                className="relative w-full min-h-screen bg-slate-50 overflow-hidden py-8 md:py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <h2 className="sr-only">
                    Professional Website Development Services for Businesses, Ecommerce, Doctors, Gyms, Travel Agencies and Personal Brands
                </h2>
                {/* Background Decor */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-100/10 to-blue-100/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-8  md:mb-12 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-100 shadow-sm mb-6">
                            <Star className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                            <span className="text-sm font-semibold text-cyan-700 tracking-wide uppercase">Why Choose Us</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Excellence</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            We design and develop modern, fast and scalable websites that help businesses grow online and build a strong digital presence.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Visuals/Stats Cards */}
                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="sm:col-span-2">
                                    <StatCard
                                        icon={<Users className="w-7 h-7" />}
                                        title="Trusted by 30+ Businesses"
                                        description="Helping local and online businesses build powerful and professional websites."
                                        delay="delay-100"
                                    />
                                </div>
                                <StatCard
                                    icon={<Calendar className="w-7 h-7" />}
                                    title="3+ Years Experience"
                                    description="Strong expertise in modern website design, development and performance optimization."
                                    delay="delay-200"
                                />
                                <StatCard
                                    icon={<TrendingUp className="w-7 h-7" />}
                                    title="50+ Websites Delivered"
                                    description="Successfully developed modern websites for businesses across different industries."
                                    delay="delay-300"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3 animate-bounce-slow">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">Growth Rate</p>
                                    <p className="text-lg font-bold text-slate-900">+150%</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Detailed Content */}
                        <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full -mr-8 -mt-8" />

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 relative z-10">
                                    The Strategic Advantage
                                </h2>

                                <div className="space-y-5 relative z-10">
                                    <FeaturePoint text="Custom Website Development: Fully responsive websites designed for your business needs." />
                                    <FeaturePoint text="Fast Loading & SEO Friendly Websites: Optimized for speed, performance and Google ranking." />
                                    <FeaturePoint text="Modern UI/UX Design: Clean and professional designs that improve user experience." />
                                    <FeaturePoint text="Reliable Support: Continuous support and updates to keep your website running smoothly." />
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                                U{i}
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-600">
                                            +50
                                        </div>
                                    </div>
                                    <button
                                        aria-label="Join our website development service"
                                        onClick={onJoinNow}
                                        className="group flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors cursor-pointer">
                                        Join Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
        </>
    );
}