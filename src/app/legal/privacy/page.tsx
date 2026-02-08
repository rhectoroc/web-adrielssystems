import React from 'react';
import styles from '../LegalPage.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.container}>
            <div className="container">
                <h1 className={styles.title}>Política de Privacidad</h1>
                <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Recopilación de Información</h2>
                        <p className={styles.text}>
                            En Adriel's Systems, respetamos su privacidad. Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico y número de teléfono cuando solicita cotizaciones o se pone en contacto con nosotros.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Uso de la Información</h2>
                        <p className={styles.text}>
                            Utilizamos la información recopilada para:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Proveer, mantener y mejorar nuestros servicios.</li>
                            <li className={styles.listItem}>Responder a sus comentarios, preguntas y solicitudes.</li>
                            <li className={styles.listItem}>Enviar comunicaciones técnicas, actualizaciones y alertas de seguridad.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Protección de Datos</h2>
                        <p className={styles.text}>
                            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Compartir Información</h2>
                        <p className={styles.text}>
                            No vendemos ni alquilamos su información personal a terceros. Solo compartimos información con proveedores de servicios que nos ayudan a operar nuestro negocio, bajo estrictos acuerdos de confidencialidad.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Sus Derechos</h2>
                        <p className={styles.text}>
                            Usted tiene derecho a acceder, corregir o eliminar su información personal. Si desea ejercer estos derechos, por favor contáctenos a través de los canales oficiales.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
