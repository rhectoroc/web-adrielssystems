"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Globe } from "lucide-react"; // Importing an icon for the language toggle


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].navbar;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="#inicio" className={styles.logo}>
                    <Image
                        src="/logofinal2.png"
                        alt="Adriel's Systems"
                        width={267}
                        height={67}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {t.items.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleLanguage} className={styles.languageToggle} aria-label="Toggle Language">
                        <Globe size={20} />
                        <span>{language.toUpperCase()}</span>
                    </button>
                    <Link href="/signin">
                        <button className={styles.ctaButton}>{t.cta}</button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileOverlay}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <div className={styles.mobileLinks}>
                            {t.items.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className={styles.mobileLink} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Globe size={20} />
                                {language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
                            </button>
                            <Link href="/signin">
                                <button className={styles.ctaButtonMobile}>{t.cta}</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
