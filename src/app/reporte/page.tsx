"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Monitor, Smartphone, AlertTriangle, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./Reporte.module.css";
import Link from "next/link";

function ReportContent() {
  const searchParams = useSearchParams();
  const urlParam = searchParams.get("url");

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!urlParam) {
      setError("No se proporcionó una URL para analizar.");
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const encodedUrl = encodeURIComponent(urlParam);
        const res = await fetch(`/api/pagespeed?url=${encodedUrl}`);
        const result = await res.json();

        if (result.error) {
          throw new Error(result.error.message || "Error al analizar la URL.");
        }

        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [urlParam]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <h2>Generando Reporte Profesional...</h2>
        <p style={{ color: "hsl(var(--text-muted))" }}>Analizando {urlParam || "tu sitio web"}</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.loadingContainer}>
        <AlertTriangle size={64} color="#ff4d4d" style={{ marginBottom: "1rem" }} />
        <h2>Ocurrió un error</h2>
        <p style={{ color: "hsl(var(--text-muted))" }}>{error}</p>
        <Link href="/analizador" className={styles.ctaButton} style={{ marginTop: "2rem" }}>
          Volver al Analizador
        </Link>
      </div>
    );
  }

  const lighthouse = data.lighthouseResult;
  const scoreRaw = lighthouse?.categories?.performance?.score || 0;
  const score = Math.round(scoreRaw * 100);
  const scoreColor = score < 50 ? "#ff4d4d" : score < 90 ? "#ffa500" : "hsl(var(--secondary))";
  const scoreDeg = (score / 100) * 360;

  const speedIndex = lighthouse?.audits['speed-index']?.displayValue || "--";
  const firstContentfulPaint = lighthouse?.audits['first-contentful-paint']?.displayValue || "--";
  
  // Extract top 3 opportunities (failed audits)
  const audits = lighthouse?.audits || {};
  const opportunities = Object.values(audits)
    .filter((a: any) => a.details && a.details.type === 'opportunity' && a.score !== null && a.score < 0.9)
    .sort((a: any, b: any) => a.score - b.score)
    .slice(0, 3);

  return (
    <motion.div 
      className={styles.reportWrapper}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1>Reporte de Rendimiento Web</h1>
        <p>Análisis técnico para: <strong>{urlParam}</strong></p>
      </div>

      <div className={styles.grid}>
        {/* Left Column: Score */}
        <div className={`${styles.card} ${styles.scoreContainer}`}>
          <div 
            className={styles.scoreCircle} 
            style={{ 
              background: `conic-gradient(${scoreColor} ${scoreDeg}deg, rgba(255,255,255,0.1) 0deg)`,
              boxShadow: `0 0 30px ${scoreColor}40`
            } as React.CSSProperties}
          >
            <span className={styles.scoreValue} style={{ color: scoreColor }}>{score}</span>
          </div>
          
          <h3 className={styles.scoreLabel} style={{ color: scoreColor }}>
            {score >= 90 ? "Excelente" : score >= 50 ? "Necesita Mejoras" : "Rendimiento Pobre"}
          </h3>
          <p style={{ color: "hsl(var(--text-muted))", fontSize: "0.95rem" }}>Puntuación en Dispositivos Móviles</p>

          <div className={styles.metricsList}>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}><Smartphone size={20} /> Carga Inicial (FCP)</span>
              <span className={styles.metricValue}>{firstContentfulPaint}</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}><Zap size={20} /> Speed Index</span>
              <span className={styles.metricValue}>{speedIndex}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Opportunities */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            <AlertTriangle size={24} /> Lo que debes mejorar
          </h2>
          
          {opportunities.length > 0 ? (
            <div className={styles.auditList}>
              {opportunities.map((opp: any, idx: number) => (
                <div key={idx} className={`${styles.auditItem} ${opp.score < 0.5 ? '' : styles.orange}`}>
                  <div className={styles.auditTitle}>{opp.title}</div>
                  <div className={styles.auditDesc}>{opp.description?.split('.')[0]}.</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "2rem 0", color: "hsl(var(--secondary))" }}>
              <CheckCircle size={48} style={{ margin: "0 auto 1rem" }} />
              <h3>No se detectaron cuellos de botella graves</h3>
              <p>Tu sitio está bastante optimizado.</p>
            </div>
          )}
        </div>
      </div>

      {/* Pitch Section */}
      <div className={`${styles.card} ${styles.pitchSection}`}>
        <ShieldCheck size={64} color="hsl(var(--primary))" style={{ margin: "0 auto 1.5rem" }} />
        <h2 className={styles.pitchTitle}>Soluciona esto con Adriel's Systems</h2>
        <p className={styles.pitchText}>
          El 53% de los usuarios móviles abandonan una página web que tarda más de 3 segundos en cargar. 
          Nuestro equipo de ingenieros aplica técnicas avanzadas de optimización de código, compresión de assets de nueva generación (WebP) y configuraciones de servidor para asegurar que tu sitio cargue en menos de 2 segundos, mejorando tus ventas y tu posicionamiento en Google.
        </p>
        <Link href="https://wa.me/584120000000?text=Hola,%20acabo%20de%20ver%20mi%20reporte%20y%20quiero%20mejorar%20mi%20web" target="_blank" className={styles.ctaButton}>
          Reunirnos para mejorar mi web <Zap size={20} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ReportePage() {
  return (
    <main className={styles.pageContainer}>
      <Navbar />
      <Suspense fallback={<div className={styles.loadingContainer}><div className={styles.spinner} /></div>}>
        <ReportContent />
      </Suspense>
      <Footer />
    </main>
  );
}
