import React from 'react';
import styles from '../LegalPage.module.css';

export default function SecurityPage() {
    return (
        <main className={styles.container}>
            <div className="container">
                <h1 className={styles.title}>Seguridad</h1>
                <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Nuestro Compromiso</h2>
                        <p className={styles.text}>
                            En Adriel's Systems, la seguridad de la información es nuestra prioridad. Mantenemos altos estándares de seguridad para proteger nuestros sistemas y los datos de nuestros clientes.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Infraestructura Segura</h2>
                        <p className={styles.text}>
                            Utilizamos tecnologías de encriptación avanzadas (SSL/TLS) para proteger la transmisión de datos. Nuestros servidores están protegidos por firewalls y sistemas de monitoreo continuo para detectar y prevenir amenazas.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Reporte de Vulnerabilidades</h2>
                        <p className={styles.text}>
                            Si cree haber encontrado una vulnerabilidad de seguridad en nuestro sitio o servicios, le agradecemos que nos lo notifique de inmediato.
                        </p>
                        <p className={styles.text}>
                            Por favor contáctenos en <a href="mailto:security@adrielssystems.com" className={styles.link}>security@adrielssystems.com</a> y proporcione detalles para que podamos investigar y solucionar el problema rápidamente.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
