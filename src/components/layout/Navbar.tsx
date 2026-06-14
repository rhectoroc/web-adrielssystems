"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, User } from "lucide-react";
import styles from "./Navbar.module.css";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].navbar;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="#inicio" className={styles.logo} onClick={() => setMenuOpen(false)}>
                    <Image
                        src="/logofinal2.webp"
                        alt="Adriel's Systems"
                        width={267}
                        height={67}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Navbar Action Icons (Unified for all screens) */}
                <div className={styles.navActions}>
                    {/* Language Switcher (Globe Icon) */}
                    <button 
                        onClick={toggleLanguage} 
                        className={styles.actionIconButton} 
                        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        aria-label="Toggle Language"
                    >
                        <Globe size={22} />
                        <span className={styles.langText}>{language.toUpperCase()}</span>
                    </button>

                    {/* Client Portal (User Silhouette) */}
                    <a 
                        href="https://app.adrielssystems.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.actionIconButton}
                        title={t.cta}
                        aria-label="Client Portal"
                    >
                        <User size={22} />
                    </a>

                    {/* Menu Toggle (Three lines) */}
                    {!menuOpen && (
                        <button
                            className={styles.menuToggle}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={26} />
                        </button>
                    )}
                </div>
            </div>

            {/* Menu Overlay / Sidebar Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Drawer content */}
                        <motion.div
                            className={styles.drawer}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                        >
                            <div className={styles.drawerHeader}>
                                <span className={styles.drawerTitle}>Menu</span>
                                <button 
                                    onClick={() => setMenuOpen(false)} 
                                    className={styles.closeButton}
                                    aria-label="Close Menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className={styles.drawerLinks}>
                                {t.items.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={styles.drawerLink}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className={styles.drawerFooter}>
                                <a 
                                    href="https://app.adrielssystems.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.drawerCta}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <User size={18} />
                                    <span>{t.cta}</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
