"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactSection() {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const { contact } = translations[language];

    // Ensure we use the updated contact values from translations unless hardcoded fallback is needed
    // But since I updated translations.tsx, I should use t.email and t.phone if they were simple strings, 
    // but in translations.tsx they are keys "email": "cotizaciones...", "phone": "+58..."
    // So I can just use t.email and t.phone directly.

    return (
        <section id="contacto" className={styles.contact}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {t.subtitle}
                    </p>
                </div>

                <div className={styles.infoCenter}>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href={`mailto:${t.email}`} className={styles.link}>{t.email}</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4>Teléfono</h4>
                                <a href={`tel:${t.phone.replace(/\s/g, '')}`} className={styles.link}>{t.phone}</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4>{t.location}</h4>
                                <p>{t.locationText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
