import React from 'react';
import styles from '../LegalPage.module.css';

export default function CookiesPage() {
    return (
        <main className={styles.container}>
            <div className="container">
                <h1 className={styles.title}>Política de Cookies</h1>
                <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. ¿Qué son las Cookies?</h2>
                        <p className={styles.text}>
                            Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para mejorar su experiencia de navegación. Permiten recordar sus preferencias y analizan cómo interactúa con nuestro sitio.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Tipos de Cookies que Utilizamos</h2>
                        <p className={styles.text}>
                            Utilizamos diferentes tipos de cookies para garantizar el funcionamiento del sitio:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
                            <li className={styles.listItem}><strong>Cookies de Rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio, recopilando información anónima.</li>
                            <li className={styles.listItem}><strong>Cookies Funcionales:</strong> Permiten recordar sus preferencias de idioma o región.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Gestión de Cookies</h2>
                        <p className={styles.text}>
                            Puede controlar y administrar el uso de cookies en su navegador. La mayoría de los navegadores le permiten rechazar o aceptar cookies, así como eliminarlas. Tenga en cuenta que deshabilitar cookies esenciales puede afectar la funcionalidad del sitio.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
