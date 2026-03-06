
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
// Import your images (Update these paths according to your project structure)
import travel from "../../public/p1.jpeg";
import ecommerce from "../../public/p2.jpeg";
import doctor from "../../public/p3.jpeg";
import cafe from "../../public/p4.jpeg";
import gym from "../../public/p5.jpeg";

const project = [
    {
        id: 1,
        title: "Travel Website Development",
        desc: "Modern travel website development with online booking system, responsive design, fast loading speed and SEO optimization for travel agencies and tour businesses.",
        img: travel
    },

    {
        id: 2,
        title: "Ecommerce Website Development",
        desc: "Professional ecommerce website development with product management, secure online payments, mobile responsive design and SEO optimized store for business growth.",
        img: ecommerce
    },

    {
        id: 3,
        title: "Doctor Appointment Website Development",
        desc: "Healthcare website development with doctor appointment booking system, patient dashboard, secure data management and responsive medical website design.",
        img: doctor
    },

    {
        id: 4,
        title: "Cafe & Restaurant Website Development",
        desc: "Modern cafe and restaurant website development with online menu, reservation system, responsive design and SEO optimization for local restaurant businesses.",
        img: cafe
    },

    {
        id: 5,
        title: "Gym & Fitness Website Development",
        desc: "Professional gym and fitness website development with membership plans, class booking system, trainer profiles and SEO optimized fitness website design.",
        img: gym
    }
];

const Project = () => {
    const [index, setIndex] = useState(0);
    const totalProjects = project.length;

    const next = () => setIndex((prev) => (prev + 1) % totalProjects);
    const prev = () => setIndex((prev) => (prev - 1 + project.length) % project.length);

    /* =====================================
       🔄 AUTO SLIDE (3 SECOND GAP)
    ===================================== */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalProjects);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const getPosition = (i: number) => {
        if (i === index) return "active";
        if (i === (index + 1) % project.length) return "right1";
        if (i === (index + 2) % project.length) return "right2";
        if (i === (index - 1 + project.length) % project.length) return "left1";
        if (i === (index - 2 + project.length) % project.length) return "left2";
        return "hidden";
    };

    return (
        <>
            <section
                aria-label="Website development projects portfolio"
                style={{ contentVisibility: "auto" }}
                className="w-full pt-5 bg-white ">
                {/* Header Section */}
                <h2 className="sr-only">
                    Portfolio of website development projects including ecommerce websites,
                    business websites, gym websites, cafe websites and doctor websites
                </h2>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight text-center">
                    Our Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Development Projects</span>
                </h2>

                {/* Carousel Wrapper */}
                <div className="relative w-full h-[600px] flex items-center justify-center bg-[#f5f7fb] overflow-hidden">

                    {/* Left Navigation Button */}
                    <button
                        onClick={prev}
                        className="absolute left-5 top-1/2 -translate-y-1/2 z-[100] w-[55px] h-[55px] rounded-full bg-[#87CEEB] text-white text-2xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#00BFFF] hover:scale-110 border-none cursor-pointer"
                        aria-label="Previous project"
                    >
                        ❮
                    </button>

                    {/* Carousel Container */}
                    <div className="relative w-full max-w-[1400px] h-[500px] perspective-[1000px]">
                        {project.map((projects, i) => {
                            const position = getPosition(i);

                            // Base classes
                            let cardClasses = "absolute top-1/2 left-1/2 w-[350px] h-[480px] bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-x-1/2 -translate-y-1/2";

                            // Position specific transforms & opacity
                            if (position === "active") {
                                cardClasses += " scale-100 z-10 opacity-100";
                            } else if (position === "left1") {
                                cardClasses += " -translate-x-[140%] scale-[0.85] z-[8] opacity-90";
                            } else if (position === "right1") {
                                cardClasses += " translate-x-[40%] scale-[0.85] z-[8] opacity-90";
                            } else if (position === "left2") {
                                cardClasses += " -translate-x-[220%] scale-[0.75] z-[5] opacity-70";
                            } else if (position === "right2") {
                                cardClasses += " translate-x-[120%] scale-[0.75] z-[5] opacity-70";
                            } else {
                                cardClasses += " scale-50 opacity-0 pointer-events-none";
                            }

                            return (
                                <div key={projects.id} className={cardClasses}>
                                    {/* Image Container */}
                                    <div className="relative w-full h-[55%] overflow-hidden">
                                        <Image
                                            src={projects.img}
                                            alt={projects.title}
                                            fill
                                            sizes="(max-width:768px) 100vw, 350px"
                                            className="object-cover"
                                            priority={projects.id === 1}
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 h-[45%] flex flex-col justify-between box-border">
                                        <div>

                                            <h3 className="text-xl font-bold text-[#111] my-2 leading-snug">
                                                {projects.title}
                                            </h3>
                                            <p className="text-[15px] text-[#555] leading-relaxed line-clamp-3">
                                                {projects.desc}
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={next}
                        className="absolute right-5 top-1/2 -translate-y-1/2 z-[100] w-[55px] h-[55px] rounded-full bg-[#87CEEB] text-white text-2xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#00BFFF] hover:scale-110 border-none cursor-pointer"
                        aria-label="Next project"
                    >
                        ❯
                    </button>
                </div>
            </section>

            {/* Custom Styles for specific animations not available in default Tailwind */}
            <style jsx>{`
        .perspective-\\[1000px\\] {
          perspective: 1000px;
        }
      `}</style>
        </>
    );
};

export default Project;