"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS, SOCIAL_LINKS } from "@/config/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Track scroll for button style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Floating toggle button (always visible, z-[102] so it's above sidebar) ── */}
      <button
        id="sidebar-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        style={{
          position: "fixed",
          top: 24,
          left: 24,
          zIndex: 102,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: isOpen
            ? "1px solid rgba(128,0,0,0.6)"
            : scrolled
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(255,255,255,0.2)",
          background: isOpen
            ? "var(--red)"
            : scrolled
            ? "rgba(10,10,10,0.85)"
            : "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, border 0.3s, transform 0.2s",
          boxShadow: isOpen ? "0 0 24px rgba(128,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <i
          className={`fas ${isOpen ? "fa-xmark" : "fa-bars"}`}
          style={{ fontSize: 16, transition: "transform 0.3s", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.4s ease, visibility 0.4s ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* ── Sidebar panel ── */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100dvh",
          width: 300,
          zIndex: 101,
          background: "rgba(8,8,8,0.97)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          boxShadow: isOpen ? "4px 0 40px rgba(0,0,0,0.8)" : "none",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Red accent top line */}
        <div style={{ height: 2, background: "var(--red)", flexShrink: 0 }} />

        {/* Header row (logo + inside-panel close area) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 28px 0",
            flexShrink: 0,
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>
              ZW<span style={{ color: "var(--red)" }}>.</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
              Portfolio
            </div>
          </Link>
          {/* Empty spacer so logo never collides with the floating button */}
          <div style={{ width: 44 }} />
        </div>

        {/* Divider */}
        <div style={{ margin: "24px 28px 8px", height: 1, background: "rgba(255,255,255,0.07)", flexShrink: 0 }} />

        {/* Nav label */}
        <div style={{ padding: "0 28px 12px", fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
          Navigation
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "0 16px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "13px 16px",
                      borderRadius: 10,
                      textDecoration: "none",
                      background: active ? "rgba(128,0,0,0.18)" : "transparent",
                      border: active ? "1px solid rgba(128,0,0,0.35)" : "1px solid transparent",
                      color: active ? "#fff" : "rgba(255,255,255,0.55)",
                      fontWeight: active ? 700 : 500,
                      fontSize: 14,
                      transition: "all 0.25s ease",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        background: active ? "var(--red)" : "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.25s",
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ fontSize: 13, color: active ? "#fff" : "rgba(255,255,255,0.45)" }} />
                    </span>
                    <span>{item.label}</span>
                    {active && (
                      <span
                        style={{
                          marginLeft: "auto",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--red)",
                          boxShadow: "0 0 8px var(--red)",
                          animation: "pulse-k 2s ease-in-out infinite",
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div style={{ padding: "16px 28px 32px", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>
            Connect
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "background 0.25s, color 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--red)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--red)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <i className={s.icon} style={{ fontSize: 14 }} />
              </a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", margin: 0 }}>
            © 2026 Zefanya Williams
          </p>
        </div>
      </aside>
    </>
  );
}
