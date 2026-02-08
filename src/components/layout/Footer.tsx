"use client";

import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Using Twitter icon temporarily for TikTok as Lucide might not have TikTok, or I will use a custom SVG if needed. Let's start with what we have or generic. Actually, I will check if I can use a generic icon or if I need to SVG.
// Wait, user wants TikTok. Lucide might not have it in older versions, but let's try. If not, I can't import it.
// To be safe, I will use a text label or generic icon if it fails? No, I should check.
// Let's assume Lucide has it or use a placeholder. But first, let's fix the Footer.
// User said: "solo deja los iconno de facebook, instagram y tiktok".
// I will use Facebook, Instagram, and a custom SVG or generic for TikTok if needed.
// For now I will use the available Lucide icons and maybe "Video" for TikTok if specific one missing?
// Actually simpler: I see 'Twitter' in imports. I will remove Twitter, Linkedin, Github.
// I'll add Facebook and Instagram. For TikTok, I'll use a local SVG or just a placeholder if not available.
// Let's try to import `Youtube` or similar if TikTok is not there?
// I will use "Video" from lucide as placeholder for TikTok if I can't confirm it exists, BUT
// I will try to use the SVG for TikTok directly or just text.
// Better: I will use standard standard Lucide icons that are likely there.
// FontAwesome is not installed.
// I will check `Footer.tsx` imports again.
// It had `Facebook`, `Instagram`, `Twitter`.
// I will keep `Facebook`, `Instagram`.
// I will use a reliable icon for TikTok (maybe simple text or generic).
// Wait, I can try to use an SVG for TikTok inline.

import Link from "next/link";
import Image from "next/image";
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Mail, Phone, MapPin, Code2 } from "lucide-react";
import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const contactT = translations[language].contact;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.mainGrid}>
                    <div>
                        <div className={styles.logo}>
                            {/* User said "corrige donde va el logo". I will assume they want the image logo if it exists, or a better placement. 
                                I see `logofinal2.png` in public directory in previous steps. I will use that. */}
                            <Image src="/logofinal2.png" alt="Adriel's Systems" width={400} height={133} className={styles.footerLogo} />
                        </div>
                        <p className={styles.brandDesc}>
                            {t.desc}
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/profile.php?id=100068244722275" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FacebookIcon size={20} /></a>
                            <a href="https://www.instagram.com/adrielsystems/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><InstagramIcon size={20} /></a>
                            <a href="https://www.tiktok.com/@adrielsystems?lang=es-419" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                                {/* Custom TikTok SVG Icon since Lucide might not have it or I don't want to risk build error */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>{t.links}</h4>
                        <a href="#inicio">{translations[language].navbar.items[0].name}</a>
                        <a href="#servicios">{translations[language].navbar.items[2].name}</a>
                        <a href="#planes">{translations[language].navbar.items[3].name}</a>
                        <a href="#contacto">{translations[language].navbar.items[4].name}</a>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>{t.legal}</h4>
                        <Link href="/legal/terms">{t.terms}</Link>
                        <Link href="/legal/privacy">{t.privacy}</Link>
                        <Link href="/legal/cookies">{t.cookies}</Link>
                        <Link href="/legal/security">{t.security}</Link>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.footerTitle}>{t.contact}</h4>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <span>cotizaciones@adrielssystems.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <span>+58 422-2476127</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} />
                            <span>{contactT.locationText}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Adriel's Systems. {t.rights}</p>
                    <p className={styles.signature}>
                        Developed by <strong>Adriel's Systems</strong> | The Engine of Your Global Software Solutions
                    </p>
                </div>
            </div>
        </footer>
    );
}
