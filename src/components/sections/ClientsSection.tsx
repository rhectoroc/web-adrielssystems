"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import styles from "./ClientsSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ClientsSection() {
    const { language } = useLanguage();
    const t = translations[language].clients;

    const clients = [
        {
            name: "Ocean Construction",
            logo: "/logos/LogoOcean.png",
            desc: t.items[0].description,
            category: t.items[0].category,
            url: "https://oceanconstruction.us",
        },
        {
            name: "Autana Group RD",
            logo: "/logos/LogoAutanagrouprd.png",
            desc: t.items[1].description,
            category: t.items[1].category,
            url: "https://autanagrouprd.com",
        },
        {
            name: "Gente Pro 80",
            logo: "/logos/Logogentepro80.jpg",
            desc: t.items[2].description,
            category: t.items[2].category,
            url: "https://gentepro80.com",
        },
        {
            name: "Sushi Higuerote",
            logo: "/logos/LogoSushihiguerote.png",
            desc: t.items[3].description,
            category: t.items[3].category,
            url: "https://sushihiguerote.com",
        },
        {
            name: "Calmiranda",
            logo: "/logos/LogoCalmiranda.png",
            desc: t.items[4].description,
            category: t.items[4].category,
            url: "https://calmiranda.com",
        },
        {
            name: "Motor X",
            logo: "/logos/LogoMotorx.jpeg",
            desc: t.items[5].description,
            category: t.items[5].category,
            url: "https://motorxcars.com",
        }
    ];

    return (
        <section id="clientes" className={styles.clients}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.badge}>{t.badge}</span>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront}>
                                    <div className={styles.categoryBadge}>
                                        {client.category}
                                    </div>
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={200}
                                            height={100}
                                            className={styles.logoImage}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{client.name}</h3>
                                        <p className={styles.cardDesc}>{client.desc}</p>

                                        {client.url ? (
                                            <a href={client.url} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
                                                {t.visit} <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <span className={styles.comingSoon}>{t.comingSoon}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
