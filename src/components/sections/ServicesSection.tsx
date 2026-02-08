"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Globe, Server, Cpu, ShieldCheck, Database, Bot, Layout, ArrowRight } from "lucide-react";
import styles from "./ServicesSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Link from "next/link";

export default function ServicesSection() {
    const { language } = useLanguage();
    const t = translations[language].services;
    const [activeTab, setActiveTab] = useState("web");

    const services = [
        {
            id: "web",
            ...t.items.web,
            icon: <Layout size={32} />
        },
        {
            id: "hosting",
            ...t.items.hosting,
            icon: <Server size={32} />
        },
        {
            id: "vps",
            ...t.items.vps,
            icon: <Cpu size={32} />
        },
        {
            id: "automation",
            ...t.items.automation,
            icon: <Bot size={32} />
        }
    ];

    return (
        <section id="servicios" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.tabsMenu}>
                        {services.map((s) => (
                            <button
                                key={s.id}
                                className={`${styles.tabItem} ${activeTab === s.id ? styles.active : ""}`}
                                onClick={() => setActiveTab(s.id)}
                            >
                                <span className={styles.iconWrapper}>{s.icon}</span>
                                <span className={styles.tabTitle}>{s.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.displayArea}>
                        <AnimatePresence mode="wait">
                            {services.map((s) => s.id === activeTab && (
                                <motion.div
                                    key={s.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.serviceCard}
                                >
                                    <h3 className={styles.cardTitle}>{s.title}</h3>
                                    <p className={styles.cardDesc}>{s.desc}</p>
                                    <div className={styles.featuresList}>
                                        {s.features.map((f, i) => (
                                            <div key={i} className={styles.featureItem}>
                                                <ShieldCheck size={20} className={styles.checkIcon} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className={styles.saberMasBtn}
                                        onClick={() => {
                                            const message = `${t.ctaMessage} ${s.title}`;
                                            window.dispatchEvent(new CustomEvent('chatbot:send', { detail: { message } }));
                                        }}
                                    >
                                        {t.cta}
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
