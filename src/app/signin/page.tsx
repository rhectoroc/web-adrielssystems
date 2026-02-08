"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./SignIn.module.css";

export default function SignInPage() {
    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            src="/logofinal2.png"
                            alt="Adriel's Systems"
                            width={400}
                            height={100}
                            className={styles.logo}
                            priority
                        />
                    </Link>
                </div>

                <h1 className={styles.title}>Panel de Clientes</h1>
                <p className={styles.subtitle}>Ingresa tus credenciales para acceder</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input type="email" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Contraseña</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className={styles.submitBtn}>Entrar</button>
                    <div className={styles.forgotPassword}>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                </form>

                <div className={styles.footer}>
                    <span>¿No tienes cuenta? <a href="#">Ponte en contacto</a></span>
                </div>
            </motion.div>
        </div>
    );
}
