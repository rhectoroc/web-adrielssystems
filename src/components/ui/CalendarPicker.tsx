"use client";

import React, { useState, useEffect } from "react";
import styles from "./CalendarPicker.module.css";

interface Slot {
    isoStart: string;
    isoEnd: string;
    date: string;
    timeLabel: string;
    dayLabel: string;
}

interface GroupedDay {
    date: string;
    dayLabel: string;
    slots: Slot[];
}

interface CalendarPickerProps {
    onBooked: (message: string) => void;
}

type Step = "days" | "times" | "form" | "success";

export default function CalendarPicker({ onBooked }: CalendarPickerProps) {
    const [groupedDays, setGroupedDays] = useState<GroupedDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [step, setStep] = useState<Step>("days");
    const [selectedDay, setSelectedDay] = useState<GroupedDay | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
    const [form, setForm] = useState({ name: "", email: "", notes: "" });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetch("/api/availability")
            .then((r) => r.json())
            .then((data) => {
                if (data.slots) {
                    // Group by date
                    const map: Record<string, GroupedDay> = {};
                    for (const slot of data.slots as Slot[]) {
                        if (!map[slot.date]) {
                            map[slot.date] = {
                                date: slot.date,
                                dayLabel: slot.dayLabel,
                                slots: [],
                            };
                        }
                        map[slot.date].slots.push(slot);
                    }
                    setGroupedDays(Object.values(map));
                } else {
                    setError("No hay horarios disponibles por ahora.");
                }
            })
            .catch(() => setError("No se pudo cargar la disponibilidad."))
            .finally(() => setLoading(false));
    }, []);

    const handleSelectDay = (day: GroupedDay) => {
        setSelectedDay(day);
        setStep("times");
    };

    const handleSelectSlot = (slot: Slot) => {
        setSelectedSlot(slot);
        setStep("form");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlot || !form.name || !form.email) return;
        setSubmitting(true);
        try {
            const res = await fetch("/api/schedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    notes: form.notes,
                    isoStart: selectedSlot.isoStart,
                    isoEnd: selectedSlot.isoEnd,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStep("success");
                setTimeout(() => {
                    onBooked(
                        `¡Listo! Ya agendé la cita para ${form.name} el ${selectedDay?.dayLabel} a las ${selectedSlot?.timeLabel}. ¿Quieres que te enviemos la confirmación a ${form.email}?`
                    );
                }, 1500);
            } else {
                setError(data.error || "Error al agendar. Intenta nuevamente.");
                setStep("form");
            }
        } catch {
            setError("Error de conexión. Intenta nuevamente.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className={styles.picker}>
                <div className={styles.loadingDots}>
                    <span /><span /><span />
                </div>
            </div>
        );
    }

    if (error && step !== "form") {
        return <div className={styles.picker}><p className={styles.errorText}>{error}</p></div>;
    }

    return (
        <div className={styles.picker}>
            {/* STEP: SELECT DAY */}
            {step === "days" && (
                <>
                    <p className={styles.label}>📅 Elige un día disponible:</p>
                    <div className={styles.dayGrid}>
                        {groupedDays.map((day) => (
                            <button
                                key={day.date}
                                className={styles.dayBtn}
                                onClick={() => handleSelectDay(day)}
                            >
                                <span className={styles.dayName}>{day.dayLabel.split(",")[0]}</span>
                                <span className={styles.dayDate}>{day.dayLabel.split(",").slice(1).join(",").trim()}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* STEP: SELECT TIME */}
            {step === "times" && selectedDay && (
                <>
                    <button className={styles.backBtn} onClick={() => setStep("days")}>← Volver</button>
                    <p className={styles.label}>🕐 Horarios para {selectedDay.dayLabel}:</p>
                    <div className={styles.timeGrid}>
                        {selectedDay.slots.map((slot) => (
                            <button
                                key={slot.isoStart}
                                className={styles.timeBtn}
                                onClick={() => handleSelectSlot(slot)}
                            >
                                {slot.timeLabel}
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* STEP: FORM */}
            {step === "form" && selectedSlot && (
                <>
                    <button className={styles.backBtn} onClick={() => setStep("times")}>← Volver</button>
                    <p className={styles.label}>✍️ Confirma tu cita:</p>
                    <p className={styles.selectedInfo}>{selectedDay?.dayLabel} · {selectedSlot.timeLabel}</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="¿Sobre qué es tu consulta? (opcional)"
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            className={styles.input}
                        />
                        {error && <p className={styles.errorText}>{error}</p>}
                        <button type="submit" className={styles.submitBtn} disabled={submitting}>
                            {submitting ? "Agendando..." : "Confirmar cita ✓"}
                        </button>
                    </form>
                </>
            )}

            {/* STEP: SUCCESS */}
            {step === "success" && (
                <div className={styles.successBox}>
                    <div className={styles.successIcon}>✓</div>
                    <p>¡Cita confirmada! Revisa tu correo.</p>
                </div>
            )}
        </div>
    );
}
