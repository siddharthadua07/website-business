'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    title: string;
    content: string;
    projectType: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Amit Verma",
        role: "Travel Agency Owner",
        company: "SkyWay Travels",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        title: "Perfect Travel Booking Website",
        content: "Our travel website was developed exactly how we wanted. The booking system works smoothly and the design looks very professional on mobile and desktop. We started getting online travel bookings within the first month.",
        projectType: "Travel Website Development"
    },

    {
        id: 2,
        name: "Rohit Patel",
        role: "Business Owner",
        company: "Patel Electronics",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        title: "Best Ecommerce Website Development",
        content: "The ecommerce website built for our business is fast, secure and easy to manage. Product management and payment integration work perfectly. Our online sales increased after launching the website.",
        projectType: "Ecommerce Website Development"
    },

    {
        id: 3,
        name: "Dr. Anjali Sharma",
        role: "Clinic Director",
        company: "CarePlus Clinic",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        title: "Excellent Doctor Appointment Website",
        content: "Our clinic website now allows patients to book appointments online easily. The system is simple and professional. It saved our staff a lot of time managing phone calls.",
        projectType: "Doctor Website Development"
    },

    {
        id: 4,
        name: "Neha Kapoor",
        role: "Restaurant Owner",
        company: "Urban Cafe",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        title: "Beautiful Cafe Website",
        content: "The cafe website design perfectly represents our brand. Customers can see the menu and make reservations online. The website loads fast and looks amazing.",
        projectType: "Restaurant Website Development"
    },

    {
        id: 5,
        name: "Vikas Singh",
        role: "Gym Owner",
        company: "PowerFit Gym",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 5,
        title: "Professional Gym Website",
        content: "Our gym website now shows membership plans, trainers and classes. Members can easily see everything online. It helped us attract new fitness clients.",
        projectType: "Gym Website Development"
    }
];
const stats = [
    { value: "50+", label: "Websites Developed", icon: "💻" },
    { value: "30+", label: "Businesses Served", icon: "🏢" },
    { value: "3+", label: "Years Experience", icon: "📈" },
    { value: "4.9", label: "Average Client Rating", icon: "⭐" }
];

const ReviewCard: React.FC<{ review: Review; index: number }> = ({ review, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 overflow-hidden"
        >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 opacity-10">
                    <Quote className="w-16 h-16 text-sky-500" />
                </div>

                {/* Project Type Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-4"
                >
                    <Sparkles className="w-3 h-3" />
                    {review.projectType}
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * i }}
                        >
                            <Star
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                    {review.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                    "{review.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                    >
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-sky-100 group-hover:ring-sky-200 transition-all duration-300">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </motion.div>

                    <div>
                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                        <p className="text-sm text-sky-600 font-medium">{review.role}</p>
                        <p className="text-xs text-gray-500">{review.company}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const StatCard: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 text-center shadow-lg border border-sky-100 overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
                {stat.icon}
            </motion.div>

            <div className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value.includes('%') ? `${count}%` :
                    stat.value.includes('/') ? `${count}/5` :
                        `${count}+`}
            </div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
    );
};

const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {

        const updateItems = () => {
            if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItems();

        window.addEventListener("resize", updateItems);

        return () => window.removeEventListener("resize", updateItems);

    }, []);
    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, reviews.length - 2));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + Math.max(1, reviews.length - 2)) % Math.max(1, reviews.length - 2));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Website Development Service",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "30"
        },
        "review": [
            {
                "@type": "Review",
                "author": "Amit Verma",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                }
            }
        ]
    }
    return (
        <section className="relative  pt-4 md:pb-4 overflow-hidden bg-white">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-sky-50/30 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-7 md:mb-13"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        Client Reviews
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Clients Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what industry leaders say about working with our development team.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-16"
                >
                    {stats.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </motion.div>

                {/* Reviews Grid */}
                <div className="relative">
                    {/* Desktop Grid */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                        {reviews.slice(0, 3).map((review, index) => (
                            <ReviewCard key={review.id} review={review} index={index} />
                        ))}
                    </div>

                    {/* Mobile/Tablet Carousel */}
                    <div className="lg:hidden relative overflow-hidden" ref={containerRef}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {reviews.slice(currentIndex, currentIndex + itemsPerView).map((review, index) => (
                                    <ReviewCard key={review.id} review={review} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8 mb-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-white shadow-lg border border-sky-200 text-sky-600 hover:bg-sky-50 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {[...Array(Math.max(1, reviews.length - 2))].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setDirection(i > currentIndex ? 1 : -1);
                                            setCurrentIndex(i);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-sky-500' : 'bg-sky-200 hover:bg-sky-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-white shadow-lg border border-sky-200 text-sky-600 hover:bg-sky-50 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Reviews;