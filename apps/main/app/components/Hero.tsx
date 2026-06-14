"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p style={{ color: "var(--color-accent)", fontWeight: 500, marginBottom: "1rem", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
        Hi, I&apos;m
      </p>
      <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
        Srun Oudomsambath
      </h1>
      <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "var(--color-muted)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "2.5rem" }}>
        Full-stack developer building educational platforms. Specializing in Spring Boot, Next.js, and distributed systems.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="/projects"
          style={{
            padding: "0.75rem 1.75rem",
            background: "var(--color-accent)",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.75rem 1.75rem",
            border: "1.5px solid var(--color-border)",
            color: "var(--color-text)",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-text)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border)")}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
