
"use client"
import React from 'react';
import Head from 'next/head';
import {
    Code2,
    Layout,
    Zap,
    Globe,
    ArrowRight,
    CheckCircle2,
    Monitor,
    Smartphone,
    Server
} from 'lucide-react';
import Image from "next/image";

import img1 from "../../public/main.jpeg";
import img2 from "../../public/m1.jpeg";
import img3 from "../../public/m2.jpeg";
import img4 from "../../public/m3.jpeg";
// --- Types ---
interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
interface ServicesProps {
    onConsultation: () => void;
}
// --- Components ---

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
    <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-cyan-300 hover:text-cyan-600 transition-colors cursor-default">
        {name}
    </span>
);

export default function Services({ onConsultation }: ServicesProps) {
    // SEO Structured Data for Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "SP TechDigital",
        "url": "https://sptechdigital.com",
        "description":
            "Professional website development services building fast responsive and SEO optimized websites for businesses.",
        "serviceType": "Website Development",
        "areaServed": "Moyna"
    };

    const features = [
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Responsive Design",
            description: "Pixel-perfect layouts that adapt seamlessly to mobile, tablet, and desktop screens."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance First",
            description: "Lightning-fast load times with optimized code, images, and server-side rendering."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "SEO Optimized Websites",
            description: "Built-in search engine optimization with semantic HTML and structured data."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile First",
            description: "Design strategy prioritizing mobile users without compromising desktop experience."
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: "Scalable Architecture",
            description: "Future-proof code structure that grows with your business needs."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Clean Code",
            description: "Maintainable, well-documented code following industry best practices."
        }
    ];

    const technologies = [
        "React", "Next.js", "TypeScript", "Python", "AI", "Tailwind CSS", "Node.js",
        "PostgreSQL", "MongoDB", "AWS", "Vercel", "Docker"
    ];

    return (
        <>
            <Head>
                <title>Website Development Services | Professional Web Solutions</title>
                <meta name="description" content="Expert website development services. We build fast, responsive, and SEO-optimized websites using modern technologies like React and Next.js." />
                <meta name="keywords" content="Website Development, Web Design, React Development, Next.js, Responsive Design, SEO, Frontend Development" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <section
                style={{ contentVisibility: "auto" }}
                aria-label="Professional website development services"
                className="relative w-full min-h-screen bg-slate-50 overflow-hidden   px-4 sm:px-6 lg:px-8 font-sans">
                <h2 className="sr-only">
                    Professional Website Development Services for Business Websites,
                    Ecommerce Websites and SEO Optimized Websites
                </h2>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl animate-float" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto md:mb-16 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-100 shadow-sm mb-6 hover:shadow-md transition-shadow">
                            <Monitor className="w-4 h-4 text-cyan-500" />
                            <span className="text-sm font-semibold text-cyan-700 tracking-wide uppercase">Our Service</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Development</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                            We build fast loading, responsive and SEO optimized websites that help businesses grow online and attract more customers.
                        </p>

                    </div>

                    {/* Main Service Showcase */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-5 md:mb-17">

                        {/* Left: Visual Representation */}
                        <div className="relative animate-slide-up">
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden group">
                                {/* Browser Mockup Header */}
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="ml-4 flex-1 h-6 bg-slate-100 rounded-md" />
                                </div>

                                {/* Mockup Content */}
                                <div className="space-y-4">

                                    {/* Top Feature Image */}
                                    <div className="relative h-32 rounded-xl overflow-hidden">
                                        <Image
                                            src={img1}
                                            alt="Website development dashboard"
                                            fill
                                            sizes="(max-width:768px) 33vw, 100px"
                                            priority

                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Modern Website Design
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Fast, responsive and SEO optimized websites for your business growth.
                                        </p>
                                    </div>

                                    {/* 3 Image Grid */}
                                    <div className="grid grid-cols-3 gap-3">

                                        <div className="relative h-20 rounded-lg overflow-hidden">
                                            <Image
                                                src={img2}
                                                alt="Ecommerce website"
                                                fill
                                                sizes="(max-width:768px) 33vw, 100px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="relative h-20 rounded-lg overflow-hidden">
                                            <Image
                                                src={img3}
                                                alt="Mobile responsive design"
                                                fill
                                                sizes="(max-width:768px) 33vw, 100px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="relative h-20 rounded-lg overflow-hidden">
                                            <Image
                                                src={img4}
                                                alt="Website UI development"
                                                fill
                                                sizes="(max-width:768px) 33vw, 100px"
                                                className="object-cover"
                                            />
                                        </div>

                                    </div>

                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse animation-delay-1000" />
                            </div>

                            {/* Stats Floating Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Success Rate</p>
                                        <p className="text-lg font-bold text-slate-900">100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Features Grid */}
                        <div className="space-y-6 animate-slide-in-right">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    Everything You Need for a Powerful Web Presence
                                </h2>
                                <p className="text-slate-600">
                                    We combine cutting-edge technology with creative design to deliver websites that not only look stunning but also convert visitors into customers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="bg-white rounded-3xl p-3 md:p-8 shadow-lg border border-slate-100 animate-fade-in">
                        <div className="text-center mb-4 md:mb-8">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                Technologies We Master
                            </h3>
                            <p className="text-slate-600">
                                Built with the modern tech stack for maximum performance
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {technologies.map((tech, index) => (
                                <TechBadge key={index} name={tech} />
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className=" mt-5 md:mt-14 text-center animate-slide-up">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-5 md:p-7 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Build Something Amazing?
                                </h2>
                                <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
                                    Let's discuss your project and create a website that sets you apart from the competition.
                                </p>
                                <button
                                    onClick={onConsultation}
                                    aria-label="Get free website development consultation"
                                    className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    Get Free Consultation
                                </button>
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
        </>
    );
}