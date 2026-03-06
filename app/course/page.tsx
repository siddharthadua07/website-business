"use client"

import { BookOpen, Sparkles } from "lucide-react";

export default function CoursePage() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden px-6">

            {/* Background Gradient Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_26px]" />

            {/* Main Content */}
            <div className="relative text-center max-w-2xl mx-auto">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl animate-float">
                        <BookOpen className="text-white w-10 h-10" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    Courses <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Coming Soon</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We are preparing powerful courses to help you master modern web development,
                    AI projects, and real-world SaaS building. Stay tuned — something amazing is coming!
                </p>

                {/* Animated badge */}
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-md animate-pulse">
                    <Sparkles className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm font-semibold text-slate-700">
                        Launching Very Soon
                    </span>
                </div>

            </div>

            {/* Floating shapes */}
            <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>

            <style jsx global>{`

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

      `}</style>

        </section>
    );
}