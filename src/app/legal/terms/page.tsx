import React from 'react';
import styles from '../LegalPage.module.css';

export default function TermsPage() {
    return (
        <main className={styles.container}>
            <div className="container">
                <h1 className={styles.title}>Términos y Condiciones</h1>
                <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
                
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Introducción</h2>
                        <p className={styles.text}>
                            Bienvenido a Adriel's Systems. Al acceder a nuestro sitio web y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Uso del Servicio</h2>
                        <p className={styles.text}>
                            Adriel's Systems proporciona soluciones tecnológicas y servicios de desarrollo de software. Usted se compromete a utilizar nuestros servicios solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del servicio por parte de cualquier otra persona.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>No debe utilizar nuestro servicio para transmitir contenido ilegal o dañino.</li>
                            <li className={styles.listItem}>No debe intentar obtener acceso no autorizado a nuestros sistemas.</li>
                            <li className={styles.listItem}>Se compromete a proporcionar información veraz y precisa al contratar nuestros servicios.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Propiedad Intelectual</h2>
                        <p className={styles.text}>
                            Todo el contenido, diseño, gráficos, código y software de este sitio web son propiedad exclusiva de Adriel's Systems o sus licenciantes y están protegidos por las leyes de derechos de autor y propiedad intelectual internacionales.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Limitación de Responsabilidad</h2>
                        <p className={styles.text}>
                            Adriel's Systems no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios. Nos esforzamos por mantener la máxima calidad, pero no garantizamos que el servicio sea ininterrumpido o libre de errores.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Modificaciones</h2>
                        <p className={styles.text}>
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio constituirá su aceptación de dichos cambios.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Contacto</h2>
                        <p className={styles.text}>
                            Si tiene alguna pregunta sobre estos Términos, por favor contáctenos a través de nuestro correo electrónico: <a href="mailto:cotizaciones@adrielssystems.com" className={styles.link}>cotizaciones@adrielssystems.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
