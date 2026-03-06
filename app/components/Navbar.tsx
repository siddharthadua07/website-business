'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import mainLogo from '@/public/mainlogo.png';
import { Home, Briefcase, BookOpen, Info, Mail } from "lucide-react";
interface NavbarProps {
    onGetStarted?: () => void;
}

const Navbar = ({ onGetStarted }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const pathname = usePathname();

    // DESKTOP LINK STYLE WITH ACTIVE UNDERLINE
    const desktopLink = (isActive: boolean): string =>
        `relative text-gray-800 transition-colors duration-300 hover:text-sky-500 ${isActive ? 'text-sky-500' : ''
        }`;



    const closeMobileMenu = (): void => {
        setMenuOpen(false);

    };

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
                role="navigation"
                aria-label="Main Navigation"

            >
                <div className="max-w-7xl mx-auto px-3 md:px-1">
                    <div className="flex items-center justify-between h-[68px]">
                        {/* LOGO SECTION */}
                        <Link href="/" title="Home - Your Company Name" className="flex items-center">
                            <Image
                                src={mainLogo}
                                alt="Your Company Name - Web Development Services"
                                width={120}
                                height={48}
                                className="h-14  md:h-16 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* DESKTOP MENU */}
                        <ul className="hidden md:flex items-center gap-20 font-medium text-lg">
                            {/* HOME */}
                            <li className="relative group">
                                <Link
                                    href="/"
                                    aria-current={isActive('/') ? "page" : undefined}
                                    className={`${desktopLink(isActive('/'))} flex items-center gap-2`}
                                >
                                    <Home size={18} aria-hidden="true" />
                                    Home
                                </Link>
                            </li>

                            {/* SERVICES */}
                            <li className="relative group">
                                <Link
                                    href="/service"
                                    aria-current={isActive('/service') ? "page" : undefined}
                                    title="Our Web Development Service"
                                    className={`${desktopLink(isActive('/service'))} flex items-center gap-2`}
                                >
                                    <Briefcase size={18} aria-hidden="true" />
                                    <span>Service</span>

                                </Link>
                            </li>
                            {/* Course */}
                            <li className="relative group">
                                <Link
                                    href="/course"
                                    aria-current={isActive('/course') ? "page" : undefined}
                                    title="Programming Courses"
                                    className={`${desktopLink(isActive('/course'))} flex items-center gap-2`}
                                >
                                    <BookOpen size={18} aria-hidden="true" />
                                    <span>Course</span>

                                </Link>
                            </li>

                            {/* ABOUT */}
                            <li className="relative group">
                                <Link
                                    href="/about"
                                    title="About Our Company"
                                    aria-current={isActive('/about') ? "page" : undefined}
                                    className={`${desktopLink(isActive('/about'))} flex items-center gap-2`}
                                >
                                    <Info size={18} aria-hidden="true" />
                                    <span>About Us</span>

                                </Link>
                            </li>
                        </ul>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            className="md:hidden text-sky-500 outline-none transition-all duration-300 ease-in-out"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            {!menuOpen ? (
                                <svg
                                    className="w-10 h-11"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-7 h-7"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 border-t border-gray-100">
                        <Link
                            href="/"
                            aria-current={isActive('/') ? "page" : undefined}
                            prefetch
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-2 transition ${isActive('/') ? 'text-sky-500 font-medium' : 'text-gray-800'
                                }`}
                        >
                            <Home size={18} aria-hidden="true" />
                            <span>Home</span>
                        </Link>

                        {/* MOBILE SERVICES */}
                        <Link
                            href="/service"
                            title="Our Web Development Service"
                            aria-current={isActive('/service') ? "page" : undefined}

                            onClick={closeMobileMenu}
                            className={`flex items-center gap-2 transition ${isActive('/service') ? 'text-sky-500 font-medium' : 'text-gray-800'
                                }`}
                        >
                            <Briefcase size={18} aria-hidden="true" />
                            <span>Service</span>
                        </Link>


                        <Link
                            href="/course"
                            title="Programming Courses"
                            aria-current={isActive('/course') ? "page" : undefined}

                            onClick={closeMobileMenu}
                            className={`flex items-center gap-2 transition ${isActive('/course') ? 'text-sky-500 font-medium' : 'text-gray-800'
                                }`}
                        >
                            <BookOpen size={18} aria-hidden="true" />
                            <span> Course</span>
                        </Link>

                        <Link
                            href="/about"

                            title="About Our Company"
                            aria-current={isActive('/about') ? "page" : undefined}

                            onClick={closeMobileMenu}
                            className={`flex items-center gap-2 transition ${isActive('/about') ? 'text-sky-500 font-medium' : 'text-gray-800'
                                }`}
                        >
                            <Info size={18} aria-hidden="true" />
                            <span>About Us</span>
                        </Link>


                    </div>
                )}
            </nav>


        </>
    );
};

export default Navbar;