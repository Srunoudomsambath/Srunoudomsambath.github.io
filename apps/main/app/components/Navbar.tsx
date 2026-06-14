"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Link href="/" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-text)", textDecoration: "none" }}>
        Srun<span style={{ color: "var(--color-accent)" }}>.</span>
      </Link>
      <div style={{ display: "flex", gap: "2rem" }}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              color: "var(--color-muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
