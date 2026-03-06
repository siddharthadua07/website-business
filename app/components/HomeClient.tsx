"use client";

import { useState } from "react";

import HeroSection from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import ServicesSection from "./ServicesSection";
import Project from "./Project";
import Review from "./Review";
import ContactSection from "./ContactFrom";
import LeadPopup from "./ContactPopup";

export default function HomeClient() {

    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div>

            <HeroSection onGetStarted={() => setPopupOpen(true)} />

            <WhyChooseUs onJoinNow={() => setPopupOpen(true)} />

            <ServicesSection onConsultation={() => setPopupOpen(true)} />

            <Project />

            <Review />

            <ContactSection />

            <LeadPopup open={popupOpen} setOpen={setPopupOpen} />

        </div>
    );
}