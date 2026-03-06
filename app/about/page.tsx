
"use client"
import LeadPopup from "../components/ContactPopup";
import React, { useState } from 'react';
import { Metadata } from 'next';
import {
    Code2,
    Target,
    Eye,
    Zap,
    Heart,
    Users,
    Code,
    Server,
    Database,
    Cloud
} from 'lucide-react';
interface AboutProps {
    onContact: () => void;
}


export default function AboutUsPage() {
    const [popupOpen, setPopupOpen] = useState(false)
    return (
        <div className="min-h-screen font-body relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)' }}>

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 animate-float-blob"
                    style={{
                        background: 'radial-gradient(circle, #0096ff 0%, transparent 70%)',
                        filter: 'blur(80px)'
                    }}>
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-10 animate-float-blob"
                    style={{
                        background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        animationDelay: '-2s'
                    }}>
                </div>
                <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full opacity-10 animate-float-blob"
                    style={{
                        background: 'radial-gradient(circle, #0096ff 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        animationDelay: '-4s'
                    }}>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4 py-12">
                    <div className="max-w-6xl w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="animate-slide-left opacity-0" style={{ animationFillMode: 'forwards' }}>
                                    <span className="inline-block px-4 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-700 text-sm font-semibold mb-6">
                                        About Our Studio
                                    </span>
                                </div>
                                <h1 className="font-display text-5xl md:text-7xl font-bold text-sky-900 mb-6 leading-tight animate-slide-left opacity-0 delay-1"
                                    style={{ animationFillMode: 'forwards' }}>
                                    Building Digital Dreams
                                </h1>
                                <p className="text-xl text-sky-700 mb-8 font-semibold animate-slide-left opacity-0 delay-2"
                                    style={{ animationFillMode: 'forwards' }}>
                                    Founded by Siddhartha Dua - Professional Web Developer
                                </p>
                                <p className="text-lg text-sky-600 leading-relaxed mb-10 animate-slide-left opacity-0 delay-3"
                                    style={{ animationFillMode: 'forwards' }}>
                                    We're passionate about creating stunning, high-performance web solutions that transform businesses.
                                    With years of expertise in modern web technologies, we deliver innovative digital experiences that drive results.
                                </p>
                                <div className="flex flex-wrap gap-4 animate-slide-left opacity-0 delay-4"
                                    style={{ animationFillMode: 'forwards' }}>
                                    <button
                                        onClick={() => setPopupOpen(true)}
                                        className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        Let's Connect
                                    </button>

                                </div>
                            </div>

                            {/* Right Visual */}
                            <div className="animate-slide-right opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="relative">
                                    {/* Floating Card */}
                                    <div className="absolute inset-0 rounded-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.1), rgba(0, 212, 255, 0.1))',
                                            filter: 'blur(60px)'
                                        }}>
                                    </div>
                                    <div className="relative bg-gradient-to-br from-sky-50 to-white rounded-2xl p-12 border border-sky-200 animate-pulse-glow">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-400">
                                                <Code2 className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-display font-bold text-sky-900">Expert Developers</h3>
                                            <p className="text-sky-700 leading-relaxed">
                                                Specializing in React, Next.js, Node.js, and modern web technologies to deliver excellence.
                                            </p>
                                            <div className="pt-6 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                                    <span className="text-sky-700">Custom Solutions</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                                    <span className="text-sky-700">Performance Optimized</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                                    <span className="text-sky-700">24/7 Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="animate-fade-scale opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="h-full bg-white/70 backdrop-blur-lg rounded-2xl p-10 border border-sky-200 card-hover hover:border-sky-400">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-400 mb-6">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="font-display text-3xl font-bold text-sky-900 mb-4">Our Mission</h2>
                                    <p className="text-sky-700 leading-relaxed">
                                        To deliver innovative web solutions that help businesses thrive in the digital world.
                                        We combine cutting-edge technology with creative design to build digital experiences that matter.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="animate-fade-scale opacity-0 delay-2" style={{ animationFillMode: 'forwards' }}>
                                <div className="h-full bg-white/70 backdrop-blur-lg rounded-2xl p-10 border border-sky-200 card-hover hover:border-sky-400">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-400 mb-6">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="font-display text-3xl font-bold text-sky-900 mb-4">Our Vision</h2>
                                    <p className="text-sky-700 leading-relaxed">
                                        To be the trusted partner of choice for businesses seeking exceptional web development services.
                                        We envision a future where every brand has a powerful digital presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-sky-900 text-center mb-16">Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Value 1 */}
                            <div className="animate-slide-left opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 border border-sky-200 card-hover h-full">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-400 mb-4">
                                        <Zap className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-sky-900 mb-3">Innovation</h3>
                                    <p className="text-sky-700">
                                        We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Value 2 */}
                            <div className="animate-fade-scale opacity-0 delay-1" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 border border-sky-200 card-hover h-full">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-400 mb-4">
                                        <Heart className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-sky-900 mb-3">Excellence</h3>
                                    <p className="text-sky-700">
                                        Quality is at the heart of everything we do. We never compromise on delivering exceptional results.
                                    </p>
                                </div>
                            </div>

                            {/* Value 3 */}
                            <div className="animate-slide-right opacity-0 delay-2" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 border border-sky-200 card-hover h-full">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-400 mb-4">
                                        <Users className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-sky-900 mb-3">Collaboration</h3>
                                    <p className="text-sky-700">
                                        We work closely with our clients to understand their vision and transform it into reality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-sky-900 text-center mb-6">Our Expertise</h2>
                        <p className="text-center text-sky-700 text-lg mb-16 max-w-2xl mx-auto">
                            We bring together years of experience across various technologies and platforms.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="animate-slide-left opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-sky-200 text-center card-hover">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                                        <Code className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-sky-900 mb-2">Frontend</h3>
                                    <p className="text-sm text-sky-600">React, Vue, Next.js</p>
                                </div>
                            </div>

                            <div className="animate-fade-scale opacity-0 delay-1" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-sky-200 text-center card-hover">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                                        <Server className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-sky-900 mb-2">Backend</h3>
                                    <p className="text-sm text-sky-600">Node.js, Python, APIs</p>
                                </div>
                            </div>

                            <div className="animate-fade-scale opacity-0 delay-2" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-sky-200 text-center card-hover">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                                        <Database className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-sky-900 mb-2">Database</h3>
                                    <p className="text-sm text-sky-600">MongoDB, PostgreSQL, Firebase</p>
                                </div>
                            </div>

                            <div className="animate-slide-right opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-sky-200 text-center card-hover">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                                        <Cloud className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-sky-900 mb-2">Cloud</h3>
                                    <p className="text-sm text-sky-600">AWS, Vercel, Heroku</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto animate-fade-scale opacity-0" style={{ animationFillMode: 'forwards' }}>
                        <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-12 md:p-16 text-center border border-sky-300">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                                Let's create something amazing together. Get in touch and let's discuss your vision.
                            </p>
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="px-10 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-sky-50 transition-all duration-300 hover:shadow-xl">
                                Get In Touch Today
                            </button>
                        </div>
                    </div>
                </section>

                <LeadPopup open={popupOpen} setOpen={setPopupOpen} />
            </div>

            {/* Global Styles for Animations */}
            <style jsx global>{`
        @keyframes float-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 40px) scale(0.95); }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 150, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 150, 255, 0.6); }
        }

        .animate-float-blob { 
          animation: float-blob 8s ease-in-out infinite; 
        }
        
        .animate-slide-left { 
          animation: slide-left 0.8s ease-out forwards; 
        }
        
        .animate-slide-right { 
          animation: slide-right 0.8s ease-out forwards; 
        }
        
        .animate-fade-scale { 
          animation: fade-in-scale 0.8s ease-out forwards; 
        }
        
        .animate-pulse-glow { 
          animation: pulse-glow 2s ease-in-out infinite; 
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-body {
          font-family: 'Inter', sans-serif;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 150, 255, 0.15);
        }
      `}</style>
        </div>
    );
}