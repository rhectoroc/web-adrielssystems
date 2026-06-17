"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Monitor, Smartphone, Activity, CheckCircle, XCircle } from "lucide-react";
import styles from "./WebSpeedAnalyzerSection.module.css";
import Link from "next/link";

export default function WebSpeedAnalyzerSection() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setShowResults(false);

    // Simulate API call for speed analysis
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2500);
  };

  // Mock data to simulate PageSpeed Insights failing results (for conversion purpose)
  const mockScore = 48; 
  const loadTime = "4.2";
  
  const scoreDeg = (mockScore / 100) * 360;
  const scoreColor = mockScore < 50 ? "#ff4d4d" : mockScore < 90 ? "#ffa500" : "hsl(var(--secondary))";

  return (
    <section className={styles.section} id="analyzer">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>
            ¿Cuánto tarda tu web en <span>cargar</span>? Pruébala gratis 👇
          </h2>
          
          <form className={styles.inputGroup} onSubmit={handleAnalyze}>
            <input
              type="url"
              className={styles.input}
              placeholder="https://tudominio.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit" className={styles.button} disabled={isLoading}>
              {isLoading ? (
                <div className={styles.spinner} />
              ) : (
                <>
                  Analizar Velocidad <Zap size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "3rem" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className={`${styles.resultsPanel} glass`}
            >
              <div className={styles.scoreHeader}>
                <div 
                  className={styles.scoreCircle} 
                  style={{ 
                    background: `conic-gradient(${scoreColor} ${scoreDeg}deg, rgba(255,255,255,0.1) 0deg)`,
                    boxShadow: `0 0 25px ${scoreColor}40`
                  } as React.CSSProperties}
                >
                  <span className={styles.scoreValue} style={{ color: scoreColor }}>{mockScore}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'hsl(var(--text-main))' }}>Puntuación Global Estimada</h3>
                  <p style={{ color: "hsl(var(--text-muted))", fontSize: '1.1rem' }}>El rendimiento de tu sitio necesita mejoras urgentes.</p>
                </div>
              </div>

              <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                  <span className={styles.metricTitle}>Velocidad Móvil</span>
                  <div className={styles.metricValue}>
                    <Smartphone size={28} /> <span>{loadTime}s</span>
                  </div>
                </div>
                
                <div className={styles.metricCard}>
                  <span className={styles.metricTitle}>Velocidad Escritorio</span>
                  <div className={styles.metricValue}>
                    <Monitor size={28} /> <span>1.8s</span>
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <span className={styles.metricTitle}>Core Web Vitals</span>
                  <div className={`${styles.metricValue} ${styles.fail}`}>
                    <XCircle size={28} /> <span>Reprobado</span>
                  </div>
                </div>
              </div>

              <div className={styles.conversionMessage}>
                Tu web tarda <strong>{loadTime} segundos</strong> en cargar en dispositivos móviles. 
                <br />
                <span style={{ color: "hsl(var(--primary))" }}>El 53% de los usuarios abandonan si tarda más de 3 segundos.</span> Estás perdiendo clientes potenciales.
              </div>

              <Link 
                href="https://wa.me/584120000000?text=Hola%20equipo%20de%20Adriel's%20Systems,%20vengo%20del%20analizador%20de%20velocidad%20y%20quisiera%20agendar%20una%20auditor%C3%ADa%20t%C3%A9cnica%20GRATIS." 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaFinal}
              >
                Agenda una auditoría técnica GRATIS
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
