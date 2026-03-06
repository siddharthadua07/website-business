"use client"

import React from 'react';
import { useState } from "react";
import LeadPopup from "../components/ContactPopup";
import {
    Globe,
    ShoppingCart,
    Utensils,
    Dumbbell,
    Plane,
    GraduationCap,
    Stethoscope,
    User,
    CheckCircle,
    ArrowRight,
    Code,
    Smartphone,
    Zap,
    Shield,
    Search,
    Menu,
    X,
    ChevronRight,
    Star,
    Clock,
    Headphones
} from 'lucide-react';
export default function WebsiteDevelopmentPage() {

    const [popupOpen, setPopupOpen] = useState(false)
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">


            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-15 lg:py-23">
                <div className="absolute inset-0 bg-[url('/hero.webp')] opacity-10 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 mb-6 animate-pulse">
                        <Star className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Premium Web Development Solutions</span>
                    </div>

                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Professional Website <br />
                        <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                            Development Services
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Professional website development services in Moyna, West Bengal. Fast, secure and SEO-optimized websites for businesses and startups.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => setPopupOpen(true)}
                            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-sky-500/30 flex items-center">
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: '50+', label: 'Projects Delivered' },
                            { number: '98%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Support Available' },
                            { number: '100%', label: 'SEO Optimized' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">{stat.number}</div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="sr-only">
                <h2>Website Development Company in Moyna West Bengal</h2>

                <p>
                    SP TechDigital is a professional website development company in Moyna, West Bengal.
                    We provide custom website development, ecommerce website development,
                    business website design, booking systems, and modern web applications.
                </p>

                <p>
                    Our team specializes in building fast, SEO optimized, and mobile responsive websites
                    using modern technologies like Next.js, React, and Node.js.
                </p>

            </section>
            {/* Services Grid */}
            <section id="services" className="py-8 bg-slate-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-13">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Industry-Specific <span className="text-sky-600">Solutions</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Specialized website development tailored to your industry needs with cutting-edge features and functionality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* E-commerce */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <ShoppingCart className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">E-Commerce Solutions</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Full-featured online stores with payment gateways, inventory management, user accounts, and advanced analytics.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Payment Integration', 'Inventory System', 'User Dashboard', 'Order Tracking'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Restaurant & Cafe */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <Utensils className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Restaurant & Cafe</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Digital menus, online reservations, table booking systems, and food ordering platforms with real-time updates.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Digital Menu', 'Table Booking', 'Online Ordering', 'Review System'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Gym & Fitness */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <Dumbbell className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Gym & Fitness</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Membership management, class scheduling, trainer profiles, workout plans, and progress tracking systems.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Membership Portal', 'Class Scheduling', 'Trainer Profiles', 'Progress Tracking'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Travel & Tourism */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <Plane className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Travel & Tourism</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Booking engines, itinerary planners, destination guides, and review systems for travel agencies and hotels.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Booking Engine', 'Itinerary Planner', 'Gallery System', 'Review Platform'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Education */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <GraduationCap className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Education & E-Learning</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Learning management systems, student portals, course catalogs, online exams, and certificate generation.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['LMS Integration', 'Student Portal', 'Online Exams', 'Certificates'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}

                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Healthcare */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <Stethoscope className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Doctors & Healthcare</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Appointment booking, patient portals, prescription management, and telemedicine integration for clinics.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Appointment Booking', 'Patient Portal', 'Prescription Mgmt', 'Telemedicine'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Personal Services */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <User className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Services</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Portfolio websites, personal blogs, service booking, and brand showcase for individuals and freelancers.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Portfolio Layout', 'Service Booking', 'Blog System', 'Contact Forms'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div
                                onClick={() => setPopupOpen(true)}

                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <Zap className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                AI Project Development
                            </h3>

                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Custom AI and machine learning project development for startups, students, and businesses including AI tools, automation systems, and intelligent web applications.
                            </p>

                            <ul className="space-y-2 mb-6">
                                {[
                                    'Machine Learning Models',
                                    'AI Web Applications',
                                    'Automation Systems',
                                    'AI Integration'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform"
                            >
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                                <ShoppingCart className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                E-commerce Marketplace Setup
                            </h3>

                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Complete setup and management for selling products on Amazon, Flipkart, and other online marketplaces including product listing, store setup, and optimization.
                            </p>

                            <ul className="space-y-2 mb-6">
                                {[
                                    'Amazon Seller Setup',
                                    'Flipkart Store Setup',
                                    'Product Listing Optimization',
                                    'Marketplace Account Management'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div
                                onClick={() => setPopupOpen(true)}
                                className="text-sky-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform"
                            >
                                Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="md:py-10 py-5 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Why Choose Our <span className="text-sky-600">Development</span> Services?
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                We combine cutting-edge technology with creative design to deliver websites that not only look stunning but perform exceptionally.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Zap className="w-6 h-6 text-sky-500" />,
                                        title: 'Lightning Fast Performance',
                                        desc: 'Optimized code and assets ensuring sub-3-second load times'
                                    },
                                    {
                                        icon: <Smartphone className="w-6 h-6 text-sky-500" />,
                                        title: 'Fully Responsive Design',
                                        desc: 'Perfect display on all devices from mobile to desktop'
                                    },
                                    {
                                        icon: <Search className="w-6 h-6 text-sky-500" />,
                                        title: 'SEO Optimized',
                                        desc: 'Built-in SEO best practices for higher search rankings'
                                    },
                                    {
                                        icon: <Shield className="w-6 h-6 text-sky-500" />,
                                        title: 'Advanced Security',
                                        desc: 'SSL, firewall protection, and regular security updates'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20" />
                            <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                                        <span className="text-slate-400">Tech Stack</span>
                                        <span className="text-sky-400 font-mono">Modern</span>
                                    </div>
                                    {[
                                        { tech: 'Next.js / React', level: '95%' },
                                        { tech: 'TypeScript', level: '90%' },
                                        { tech: 'Python', level: '85%' },
                                        { tech: 'Tailwind CSS', level: '98%' },
                                        { tech: 'Node.js', level: '92%' },
                                        { tech: 'PostgreSQL / MongoDB', level: '88%' },
                                    ].map((tech, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white font-medium">{tech.tech}</span>
                                                <span className="text-sky-400">{tech.level}</span>
                                            </div>
                                            <div className="w-full bg-slate-700 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: tech.level }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-5 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-5 md:mb-13">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Transparent <span className="text-sky-600">Pricing</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your business needs. All plans include responsive design and basic SEO.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-sky-300 transition-all hover:shadow-xl">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                                <div className="text-4xl font-bold text-slate-900 mb-2">₹1999</div>
                                <p className="text-slate-500 text-sm">Perfect for small businesses</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Up to 5 Pages',
                                    'Mobile Responsive',
                                    'Basic SEO Setup',
                                    'Contact Form',
                                    'Social Media Integration',
                                    '1 Month Support'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="w-full py-3 border-2 border-sky-500 text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors cursor-pointer">
                                Get Started
                            </button>
                        </div>

                        {/* Professional */}
                        <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border-2 border-sky-500 transform scale-105 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                                <div className="text-4xl font-bold text-white mb-2">₹2999</div>
                                <p className="text-slate-400 text-sm">Best for growing businesses</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Up to 15 Pages',
                                    'Advanced Animations',
                                    'E-commerce Ready',
                                    'CMS Integration',
                                    'Speed Optimization',
                                    '3 Months Support',
                                    'Google Analytics Setup'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="w-full py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/30 cursor-pointer">
                                Get Started
                            </button>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-sky-300 transition-all hover:shadow-xl">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                <div className="text-4xl font-bold text-slate-900 mb-2">Custom</div>
                                <p className="text-slate-500 text-sm">For large scale projects</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Unlimited Pages',
                                    'Custom Functionality',
                                    'Advanced Database',
                                    'API Integrations',
                                    'Multi-language Support',
                                    '12 Months Support',
                                    'Dedicated Manager'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="w-full py-3 border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Section */}
            <section id="maintenance" className="py-5 md:py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Maintenance <span className="text-sky-600">Plans</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Keep your website secure, updated, and performing at its best with our comprehensive maintenance packages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: 'Basic Care',
                                price: '₹499',
                                period: '/month',
                                features: ['Weekly Backups', 'Security Monitoring', 'Monthly Updates', 'Email Support', 'Uptime Monitoring']
                            },
                            {
                                name: 'Standard Care',
                                price: '₹999',
                                period: '/month',
                                features: ['Daily Backups', 'Advanced Security', 'Weekly Updates', 'Priority Support', 'Performance Reports', 'Content Updates (2hrs)']
                            },
                            {
                                name: 'Premium Care',
                                price: '₹2999',
                                period: '/month',
                                features: ['Real-time Backups', 'Malware Protection', 'Daily Updates', '24/7 Support', 'SEO Monitoring', 'Content Updates (5hrs)', 'Speed Optimization']
                            },
                            {
                                name: 'Enterprise Care',
                                price: '₹5999',
                                period: '/month',
                                features: ['Hourly Backups', 'Dedicated Security', 'Continuous Updates', 'Dedicated Manager', 'Custom Development', 'Unlimited Updates', 'Strategy Consulting']
                            }
                        ].map((plan, index) => (
                            <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 transition-all hover:shadow-lg">
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-sky-600">{plan.price}</span>
                                        <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-2 bg-white border border-sky-500 text-sky-600 rounded-lg font-medium hover:bg-sky-50 transition-colors text-sm">
                                    Subscribe Now
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Additional Maintenance Features */}
                    <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-sky-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Regular Updates</h4>
                                <p className="text-slate-600 text-sm">Core, plugin, and security updates to keep your site running smoothly and securely.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-sky-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Security First</h4>
                                <p className="text-slate-600 text-sm">SSL management, malware scanning, firewall protection, and vulnerability patching.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Headphones className="w-6 h-6 text-sky-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">24/7 Support</h4>
                                <p className="text-slate-600 text-sm">Round-the-clock monitoring and instant alerts with rapid response times.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}


            {/* CTA Section */}
            <section id="contact" className="py-12 bg-gradient-to-br from-sky-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                        Get a free consultation and quote for your website development needs. Let's build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button

                            onClick={() => setPopupOpen(true)}
                            className="px-8 py-4 bg-white text-sky-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl cursor-pointer">
                            Get Free Quote
                        </button>

                    </div>
                </div>
            </section>

            <LeadPopup open={popupOpen} setOpen={setPopupOpen} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Website Development Service",
                        "provider": {
                            "@type": "Organization",
                            "name": "SP TechDigital",
                            "url": "https://sptechdigital.com"
                        },
                        "areaServed": "Moyna",
                        "serviceType": "Website Development"
                    })
                }}
            />

        </div>
    );
}