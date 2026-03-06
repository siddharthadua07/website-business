'use client';
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Send,
    User,
    Phone,
    MessageSquare,
    CheckCircle,
    Loader2,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    Sparkles
} from 'lucide-react';

interface FormData {
    name: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    message?: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
                {
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message sent successfully 🚀");

            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    name: "",
                    phone: "",
                    message: ""
                });
            }, 3000);

        } catch (error) {

            toast.error("Failed to send message ❌");

        }

        setIsSubmitting(false);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;

        if (name === "phone") {

            const numbersOnly = value.replace(/\D/g, "");

            if (numbersOnly.length <= 10) {
                setFormData(prev => ({ ...prev, phone: numbersOnly }));
            }

        } else {

            setFormData(prev => ({ ...prev, [name]: value }));

        }

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }

    };

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            value: "+91 9242944759",
            color: "from-green-400 to-emerald-500"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "contact@spacetechdigital.com",
            color: "from-sky-400 to-blue-500"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Moyna , West Bengal, India",
            color: "from-purple-400 to-pink-500"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            label: "Working Hours",
            value: "Mon - Sat: 9AM - 7PM",
            color: "from-orange-400 to-red-500"
        }
    ];

    return (
        <section ref={ref} className="relative py-12 overflow-hidden bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact DevStudio",
                        "url": "https://yourwebsite.com/contact",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+919876543210",
                            "contactType": "customer service",
                            "areaServed": "IN",
                            "availableLanguage": ["English", "Hindi"]
                        }
                    })
                }}
            />
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        Get In Touch
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Project</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="group relative bg-white rounded-2xl p-5 shadow-lg border border-gray-100 overflow-hidden cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="flex items-center gap-4">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg`}
                                    >
                                        {info.icon}
                                    </motion.div>

                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                                        <p className="text-gray-900 font-semibold group-hover:text-sky-600 transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                            className="mt-8 p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">+30 happy clients</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Join our growing list of satisfied clients who trusted us with their projects.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <motion.div
                            className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                        >
                            {/* Form Header */}
                            <div className="relative  h-25 md:h-32 bg-gradient-to-br from-sky-500 to-blue-600 overflow-hidden">
                                <motion.div
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                                    className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%]"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="text-center text-white"
                                    >
                                        <h3 className="text-2xl font-bold mb-1">Send Message</h3>
                                        <p className="text-sky-100 text-sm">We'd love to hear from you</p>
                                    </motion.div>
                                </div>

                                {/* Floating Elements */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-4 h-4 bg-white/20 rounded-full"
                                        style={{
                                            left: `${20 + i * 30}%`,
                                            top: `${30 + i * 20}%`
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            opacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Form Content */}
                            <div className="p-5 md:p-8">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="flex flex-col items-center justify-center py-12 text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                                            >
                                                <CheckCircle className="w-10 h-10 text-green-500" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {/* Name Field */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Your Name
                                                </label>
                                                <div className="relative">
                                                    <motion.div
                                                        animate={{
                                                            scale: focusedField === 'name' ? 1.1 : 1,
                                                            color: focusedField === 'name' ? '#0ea5e9' : '#9ca3af'
                                                        }}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                                                    >
                                                        <User className="w-5 h-5" />
                                                    </motion.div>

                                                    <motion.input
                                                        type="text"
                                                        name="name"
                                                        aria-label="Your Name"
                                                        autoComplete="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('name')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder="John Doe"
                                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 ${errors.name
                                                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                                                            : 'border-gray-200 focus:border-sky-500 focus:bg-white'
                                                            }`}
                                                        whileFocus={{ scale: 1.01 }}
                                                    />

                                                    {focusedField === 'name' && (
                                                        <motion.div
                                                            layoutId="focus-ring"
                                                            className="absolute inset-0 rounded-xl ring-2 ring-sky-500/20 pointer-events-none"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                        />
                                                    )}
                                                </div>

                                                <AnimatePresence>
                                                    {errors.name && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                                        >
                                                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                                                            {errors.name}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>

                                            {/* Phone Field */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <motion.div
                                                        animate={{
                                                            scale: focusedField === 'phone' ? 1.1 : 1,
                                                            color: focusedField === 'phone' ? '#0ea5e9' : '#9ca3af'
                                                        }}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                                                    >
                                                        <Phone className="w-5 h-5" />
                                                    </motion.div>

                                                    <motion.input
                                                        type="tel"
                                                        name="phone"
                                                        inputMode="numeric"
                                                        pattern="[0-9]*"
                                                        maxLength={10}
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('phone')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder="+91 98765 43210"
                                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 ${errors.phone
                                                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                                                            : 'border-gray-200 focus:border-sky-500 focus:bg-white'
                                                            }`}
                                                        whileFocus={{ scale: 1.01 }}
                                                    />
                                                </div>

                                                <AnimatePresence>
                                                    {errors.phone && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                                        >
                                                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                                                            {errors.phone}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>

                                            {/* Message Field */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Your Message
                                                </label>
                                                <div className="relative">
                                                    <motion.div
                                                        animate={{
                                                            scale: focusedField === 'message' ? 1.1 : 1,
                                                            color: focusedField === 'message' ? '#0ea5e9' : '#9ca3af'
                                                        }}
                                                        className="absolute left-4 top-4 z-10"
                                                    >
                                                        <MessageSquare className="w-5 h-5" />
                                                    </motion.div>

                                                    <motion.textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('message')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder="Tell us about your project..."
                                                        rows={4}
                                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 resize-none ${errors.message
                                                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                                                            : 'border-gray-200 focus:border-sky-500 focus:bg-white'
                                                            }`}
                                                        whileFocus={{ scale: 1.01 }}
                                                    />
                                                </div>

                                                <AnimatePresence>
                                                    {errors.message && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="mt-2 text-sm text-red-500 flex items-center gap-1"
                                                        >
                                                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                                                            {errors.message}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>

                                            {/* Submit Button */}
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 }}
                                                whileHover={{ scale: 1.02, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="relative w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-sky-500/30"
                                            >
                                                {/* Button Background Animation */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500"
                                                    initial={{ x: '100%' }}
                                                    whileHover={{ x: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                />

                                                {/* Shine Effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                                    animate={{ x: ['-200%', '200%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                                />

                                                <span className="relative flex items-center justify-center gap-2 cursor-pointer">
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <motion.div
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            >
                                                                <ArrowRight className="w-5 h-5" />
                                                            </motion.div>
                                                        </>
                                                    )}
                                                </span>
                                            </motion.button>

                                            {/* Privacy Note */}
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.8 }}
                                                className="text-center text-xs text-gray-500 mt-4"
                                            >
                                                Your information is safe and secure with us.

                                            </motion.p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;