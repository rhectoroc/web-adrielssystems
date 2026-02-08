"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Chatbot.module.css";

interface Message {
    text: string;
    sender: "bot" | "user";
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [sessionId, setSessionId] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const webhookUrl = "/api/chat";

    useEffect(() => {
        // Initialize Session ID
        let id = typeof window !== 'undefined' ? localStorage.getItem("chatbotSessionId") : null;
        if (!id) {
            id = "session_" + Math.random().toString(36).substr(2, 9);
            if (typeof window !== 'undefined') localStorage.setItem("chatbotSessionId", id);
        }
        setSessionId(id);

        // Show notification after 10 seconds if not opened
        const timeout = setTimeout(() => {
            if (!isOpen) {
                setShowNotification(true);
            }
        }, 10000);

        return () => clearTimeout(timeout);
    }, [isOpen]);

    useEffect(() => {
        const handleExternalMessage = (event: any) => {
            const message = event.detail?.message;
            if (message) {
                setIsOpen(true);
                setShowNotification(false);
                handleSendMessage(undefined, message);
            }
        };

        window.addEventListener("chatbot:send", handleExternalMessage);
        return () => window.removeEventListener("chatbot:send", handleExternalMessage);
    }, [sessionId, messages]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowNotification(false);
    };

    const formatMessageText = (text: string) => {
        if (!text) return "";
        let formatted = text;

        // Simplified formatting logic based on the user request
        formatted = formatted.replace(/\n\n/g, "<br/><br/>");
        formatted = formatted.replace(/\n/g, "<br/>");
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");

        return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
    };

    const handleSendMessage = async (e?: React.FormEvent, externalMessage?: string) => {
        if (e) e.preventDefault();
        const text = externalMessage || inputValue.trim();
        if (!text) return;

        if (!externalMessage) setInputValue("");

        const newMessages: Message[] = [...messages, { text, sender: "user" }];
        setMessages(newMessages);
        setIsTyping(true);

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sessionId: sessionId,
                    action: "sendMessage",
                    chatInput: text
                })
            });

            if (response.ok) {
                const data = await response.json();

                // Debug: Log the response structure
                console.log("N8N Response:", data);

                // Try multiple possible response structures
                const botReply =
                    data.output ||           // Structure 1
                    data.response ||         // Structure 2
                    data.message ||          // Structure 3
                    data.text ||             // Structure 4
                    data.data?.output ||     // Nested structure 1
                    data.data?.response ||   // Nested structure 2
                    data.data?.message ||    // Nested structure 3
                    (typeof data === 'string' ? data : null) || // Direct string
                    "Gracias por tu mensaje. ¿En qué más puedo ayudarte?";

                console.log("Bot Reply:", botReply);
                setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
            } else {
                console.error("HTTP Error:", response.status, response.statusText);
                throw new Error("Server error");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [...prev, { text: "⚠️ Error de conexión. Por favor, intenta nuevamente.", sender: "bot" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className={styles.chatbotWrapper}>
            {/* Animated Ring and Launcher */}
            <div className={styles.iconContainer}>
                {!isOpen && <div className={styles.outerRing}></div>}
                <button
                    className={`${styles.launcher} ${isOpen ? styles.launcherActive : ""}`}
                    onClick={toggleChat}
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                    {showNotification && !isOpen && <div className={styles.notificationBadge}>1</div>}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.container}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    >
                        <div className={styles.header}>
                            <div className={styles.headerInfo}>
                                <div className={styles.avatar}>
                                    <img src="https://cdn1.site-media.eu/images/0/20626320/EvaAvatar-vc9iPwYNg-FnV0MrtYA4Rw.png" alt="Eva" />
                                </div>
                                <div className={styles.headerText}>
                                    <h3>Eva</h3>
                                    <p>Asistente de Adriel's Systems</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.messagesArea}>
                            {/* Initial Message */}
                            <div className={`${styles.message} ${styles.bot}`}>
                                <div className={styles.messageAvatar}>
                                    <img src="https://cdn1.site-media.eu/images/0/20626320/EvaAvatar-vc9iPwYNg-FnV0MrtYA4Rw.png" alt="Eva" />
                                </div>
                                <div className={styles.messageContent}>
                                    <strong>¡Hola! Soy Eva</strong>, la asistente virtual de Adriel's Systems. ¿En qué puedo ayudarte hoy?
                                </div>
                            </div>

                            {messages.map((msg, idx) => (
                                <div key={idx} className={`${styles.message} ${msg.sender === "bot" ? styles.bot : styles.user}`}>
                                    {msg.sender === "bot" && (
                                        <div className={styles.messageAvatar}>
                                            <img src="https://cdn1.site-media.eu/images/0/20626320/EvaAvatar-vc9iPwYNg-FnV0MrtYA4Rw.png" alt="Eva" />
                                        </div>
                                    )}
                                    <div className={styles.messageContent}>
                                        {formatMessageText(msg.text)}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className={styles.typingIndicatorWrapper}>
                                    <div className={styles.typingIndicator}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className={styles.inputForm} onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                autoComplete="off"
                            />
                            <button type="submit" disabled={!inputValue.trim() || isTyping}>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
