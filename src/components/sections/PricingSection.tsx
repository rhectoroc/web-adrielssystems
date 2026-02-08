
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Headset } from "lucide-react";
import styles from "./PricingSection.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";


export default function PricingSection() {
    const { language } = useLanguage();
    const t = translations[language].pricing;

    return (
        <section id="planes" className={styles.pricing}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {t.plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`${styles.card} ${index === 1 ? styles.popular : ""} `}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {index === 1 && <span className={styles.popularBadge}>{t.popularBadge}</span>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>{t.period}</span>
                            </div>
                            <p className={styles.planDescription}>{plan.description}</p>
                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featItem}>
                                        <Check size={18} className={styles.check} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    const message = `${t.ctaMessage} ${plan.name}`;
                                    window.dispatchEvent(new CustomEvent('chatbot:send', { detail: { message } }));
                                }}
                                className={styles.selectBtn}
                            >
                                {t.cta}
                            </button>
                        </motion.div >
                    ))}
                </div >

                {/* Support Section */}
                < motion.div
                    className={styles.supportSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.supportCard}>
                        <div className={styles.supportContent}>
                            <div className={styles.supportInfo}>
                                <div className={styles.supportIcon}>
                                    <Headset size={40} />
                                </div>
                                <div>
                                    <h3 className={styles.supportTitle}>{t.support.title}</h3>
                                    <p className={styles.supportText}>
                                        {t.support.text}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.supportPricing}>
                                <span className={styles.supportLabel}>{t.support.label}</span>
                                <span className={styles.supportRange}>{t.support.range}</span>
                                <span className={styles.supportNote}>{t.support.note}</span>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div >
        </section >
    );
}

