"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="nosotros" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionBadge}>{t.badge}</span>
                        <h2 className={styles.title}>
                            {t.title}
                        </h2>
                        <p className={styles.description}>
                            {t.description}
                        </p>

                        <div className={styles.valuesGrid}>
                            {t.values.map((value, index) => (
                                <div key={index} className={styles.valueItem}>
                                    <div className={styles.valueIcon}>
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className={styles.valueTitle}>
                                            {value.title}
                                        </h4>
                                        <p className={styles.valueText}>
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageContent}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageOverlay}></div>
                            <video
                                src="/server.mp4"
                                className={styles.mainImage}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                        <div className={styles.floatingCard}>
                            <span className={styles.cardNumber}>{t.years}</span>
                            <span className={styles.cardLabel}>{t.yearsLabel}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
