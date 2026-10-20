"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import styles from "./ClientsSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ClientsSection() {
    const { language } = useLanguage();
    const t = translations[language].clients;

    const clients = [
        {
            name: "Ocean Construction",
            logo: "/logos/LogoOcean.webp",
            desc: t.items[0].description,
            category: t.items[0].category,
            url: "https://oceanconstruction.us",
        },
        {
            name: "Autana Group RD",
            logo: "/logos/LogoAutanagrouprd.webp",
            desc: t.items[1].description,
            category: t.items[1].category,
            url: "https://autanagrouprd.com",
        },
        {
            name: "Gente Pro 80",
            logo: "/logos/Logogentepro80.webp",
            desc: t.items[2].description,
            category: t.items[2].category,
            url: "https://gentepro80.com",
        },
        {
            name: "Sushi Higuerote",
            logo: "/logos/LogoSushihiguerote.webp",
            desc: t.items[3].description,
            category: t.items[3].category,
            url: "https://sushihiguerote.com",
        },
        {
            name: "Calmiranda",
            logo: "/logos/LogoCalmiranda.webp",
            desc: t.items[4].description,
            category: t.items[4].category,
            url: "https://calmiranda.com",
        },
        {
            name: "Motor X",
            logo: "/logos/LogoMotorx.webp",
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
                    <div className={styles.dragHint}>
                        <Sparkles size={16} />
                        <span>{language === "es" ? "Arrastra las cartas para explorar" : "Drag the cards to explore"}</span>
                    </div>
                </motion.div>

                <div className={styles.deckContainer}>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        loop={true}
                        modules={[EffectCards, Autoplay, Pagination]}
                        autoplay={{
                            delay: 2600,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        cardsEffect={{
                            slideShadows: true,
                            perSlideOffset: 8,
                            perSlideRotate: 2,
                        }}
                        className={styles.cardsSwiperDeck}
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.categoryBadge}>
                                            {client.category}
                                        </span>
                                    </div>
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={240}
                                            height={120}
                                            className={styles.logoImage}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div>
                                            <h3 className={styles.cardTitle}>{client.name}</h3>
                                            <p className={styles.cardDesc}>{client.desc}</p>
                                        </div>

                                        {client.url ? (
                                            <a
                                                href={client.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.visitButton}
                                            >
                                                {t.visit} <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <span className={styles.comingSoon}>{t.comingSoon}</span>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
