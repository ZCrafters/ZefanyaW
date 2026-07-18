'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var fancy_typewriter_1 = require("@/components/ui/fancy-typewriter");
var letter_3d_swap_1 = require("@/components/fancy/text/letter-3d-swap");
var text_highlighter_1 = require("@/components/fancy/text/text-highlighter");
var image_trail_1 = require("@/components/fancy/image/image-trail");
var simple_marquee_1 = require("@/components/fancy/blocks/simple-marquee");
var image_1 = require("next/image");
/* ═══════════════════════════════════════════════════════════════════
    MARQUEE DATA
═══════════════════════════════════════════════════════════════════ */
var MARQUEE = [
    'Video Editing', 'Fotografi', 'Content Creation', 'Digital Marketing',
    'Data Analysis', 'Python', 'Branding', 'Social Media', 'Web Tools',
    'Copywriting', 'UI/UX', 'Event Doc', 'FinTech', 'Creative Strategy', 'Desain Grafis',
];
var HOME_STATS = [
    { label: 'Certifications', value: '6+', description: 'Professional certifications earned' },
    { label: 'Years Experience', value: '4+', description: 'Years of professional experience' },
    { label: 'Skills Mastered', value: '20+', description: 'Technical and soft skills acquired' },
    { label: 'Projects', value: '50+', description: 'Completed projects and campaigns' },
];
var GALLERY_ROW_1 = [
    '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 01_55_53 PM.png',
    '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 01_57_06 PM.png',
    '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_03_35 PM.png',
    '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_11_50 PM.png',
    '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_23_19 PM.png',
];
var GALLERY_ROW_2 = [
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_37_00 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_40_35 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_43_24 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_44_35 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_46_11 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_57_31 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_58_32 AM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 12_00_26 PM.png',
    '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 12_01_54 PM.png',
    '/assets/galery/sub 2/ChatGPT Image May 6, 2026, 02_33_02 PM.png',
    '/assets/galery/sub 2/ChatGPT Image May 6, 2026, 02_34_32 PM.png',
];
var GALLERY_ROW_3 = [
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_23_52 AM.png',
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_30_11 AM.png',
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_37_59 AM.png',
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_38_03 AM.png',
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_39_42 AM.png',
    '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_43_18 AM.png',
    '/assets/galery/sub 3/Desain tanpa judul (10).png',
];
var POSTER_IMAGES = [
    '/assets/poster/ChatGPT Image May 5, 2026, 01_55_53 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 01_57_06 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 02_03_35 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 02_11_50 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 02_23_19 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_37_00 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_40_35 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_43_24 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_44_35 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_46_11 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_57_31 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 11_58_32 AM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 12_00_26 PM.png',
    '/assets/poster/ChatGPT Image May 5, 2026, 12_01_54 PM.png',
    '/assets/poster/ChatGPT Image May 6, 2026, 02_33_02 PM.png',
    '/assets/poster/ChatGPT Image May 6, 2026, 02_34_32 PM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_23_52 AM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_30_11 AM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_37_59 AM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_38_03 AM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_39_42 AM.png',
    '/assets/poster/ChatGPT Image May 7, 2026, 09_43_18 AM.png',
    '/assets/poster/Desain tanpa judul (10).png',
];
/* ═══════════════════════════════════════════════════════════════════
    MARQUEE STRIP
═══════════════════════════════════════════════════════════════════ */
function MarqueeStrip() {
    return (React.createElement("div", { style: { background: 'var(--red)', overflow: 'hidden', padding: '14px 0' } },
        React.createElement("div", { className: "mq-track" }, __spreadArrays(MARQUEE, MARQUEE).map(function (item, i) { return (React.createElement("span", { key: i, style: { fontSize: 11, fontWeight: 800, padding: '0 30px', whiteSpace: 'nowrap', color: '#fff' } },
            item,
            " ",
            React.createElement("span", { style: { marginLeft: 10 } }, "\u2726"))); }))));
}
/* ═══════════════════════════════════════════════════════════════════
    ABOUT SECTION
═══════════════════════════════════════════════════════════════════ */
function AboutSection() {
    return (React.createElement("section", { className: "home-about-section", style: { padding: 'clamp(80px, 10vw, 128px) 0 clamp(88px, 10vw, 132px)' } },
        React.createElement(MarqueeStrip, null),
        React.createElement("div", { className: "home-about-shell", style: { maxWidth: 1280, margin: 'clamp(72px, 8vw, 104px) auto 0', padding: '0 clamp(18px, 4vw, 36px)' } },
            React.createElement("div", { className: "sec-label", style: { marginBottom: 20 } }, "Tentang Saya"),
            React.createElement("div", { className: "home-about-grid", style: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(360px, 0.95fr)', gap: 'clamp(52px, 7vw, 104px)', alignItems: 'flex-start' } },
                React.createElement("div", null,
                    React.createElement("h2", { className: "h2", style: { fontSize: 'clamp(32px,4vw,56px)', marginBottom: 24, lineHeight: 1.05 } },
                        "Berjiwa ",
                        React.createElement("span", { style: { color: 'var(--red)' } }, "Kreatif,"),
                        React.createElement("br", null),
                        "Berpikir Data"),
                    React.createElement("p", { style: { fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 20 } },
                        "Saya adalah mahasiswa Bisnis Digital dengan pengalaman di bidang",
                        " ",
                        React.createElement(text_highlighter_1.TextHighlighter, { className: "rounded-[0.3em] px-px", transition: { type: 'spring', duration: 1, delay: 0.4, bounce: 0 }, highlightColor: "rgba(128,0,0,0.45)", useInViewOptions: { once: true, initial: true, amount: 0.1 } }, "pengeditan video, fotografi, pembuatan konten, dan analisis data"),
                        ".",
                        " ",
                        "Saya telah berkontribusi di",
                        " ",
                        React.createElement(text_highlighter_1.TextHighlighter, { className: "rounded-[0.3em] px-px", transition: { type: 'spring', duration: 1, delay: 0.6, bounce: 0 }, highlightColor: "rgba(128,0,0,0.45)", useInViewOptions: { once: true, initial: true, amount: 0.1 } }, "startup, media kampus, hingga program internasional"),
                        " ",
                        "untuk membangun prototipe solusi digital yang berdampak."),
                    React.createElement("p", { style: { fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 40 } },
                        "Saya percaya bahwa",
                        " ",
                        React.createElement(text_highlighter_1.TextHighlighter, { className: "rounded-[0.3em] px-px", transition: { type: 'spring', duration: 1, delay: 0.4, bounce: 0 }, highlightColor: "rgba(128,0,0,0.45)", useInViewOptions: { once: true, initial: true, amount: 0.1 } }, "kreativitas terbaik lahir dari pemahaman data"),
                        ".",
                        " ",
                        "Setiap visual yang saya ciptakan selalu didasarkan pada",
                        " ",
                        React.createElement(text_highlighter_1.TextHighlighter, { className: "rounded-[0.3em] px-px", transition: { type: 'spring', duration: 1, delay: 0.6, bounce: 0 }, highlightColor: "rgba(128,0,0,0.45)", useInViewOptions: { once: true, initial: true, amount: 0.1 } }, "strategi yang terukur dan tujuan bisnis yang jelas"),
                        "."),
                    React.createElement("div", { className: "home-stat-grid" }, HOME_STATS.map(function (i) { return (React.createElement("div", { key: i.label, className: "home-stat-card" },
                        React.createElement("p", { className: "home-stat-value" }, i.value),
                        React.createElement("p", { className: "home-stat-label" }, i.label),
                        React.createElement("p", { className: "home-stat-desc" }, i.description))); })),
                    React.createElement("div", { style: { display: 'flex', gap: 18, flexWrap: 'wrap' } },
                        React.createElement("a", { href: "mailto:zefanyawilliams@gmail.com", style: { textDecoration: 'none' } },
                            React.createElement("button", { className: "clip-btn red", style: { padding: '13px 32px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', cursor: 'pointer' } },
                                "Hubungi Saya ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 13 }))),
                        React.createElement("a", { href: "https://www.linkedin.com/in/zefanya-williams-272415261/", target: "_blank", rel: "noreferrer", style: { textDecoration: 'none' } },
                            React.createElement("button", { className: "clip-btn white", style: { padding: '13px 32px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', cursor: 'pointer' } },
                                "LinkedIn ",
                                React.createElement(lucide_react_1.Linkedin, { size: 13 }))))),
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 40 } },
                    React.createElement("div", { className: "glass home-skill-panel", style: { borderRadius: 20, padding: 'clamp(34px, 4.5vw, 52px)' } },
                        React.createElement("div", { className: "home-panel-kicker" },
                            React.createElement(lucide_react_1.Sparkles, { size: 14 }),
                            React.createElement("span", null, "Keahlian")),
                        React.createElement("div", { className: "home-skill-visual-grid" }, [
                            { icon: lucide_react_1.Clapperboard, label: 'Video Editing' },
                            { icon: lucide_react_1.Camera, label: 'Fotografi' },
                            { icon: lucide_react_1.BarChart3, label: 'Data Analysis' },
                            { icon: lucide_react_1.Palette, label: 'Desain Grafis' },
                            { icon: lucide_react_1.Globe, label: 'Digital Marketing' },
                            { icon: lucide_react_1.PenTool, label: 'Content Creation' },
                        ].map(function (skill, i) { return (React.createElement(framer_motion_1.motion.div, { key: skill.label, className: "home-skill-visual-card", initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }, whileHover: { y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 } },
                            React.createElement(skill.icon, { size: 20 }),
                            React.createElement("span", null, skill.label))); })),
                        React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: 12 } }, MARQUEE.map(function (skill) { return (React.createElement("span", { key: skill, className: "home-skill-chip", style: { fontSize: 11, fontWeight: 700, padding: '8px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' } }, skill)); }))),
                    React.createElement("div", { className: "glass", style: { borderRadius: 16, padding: 'clamp(32px, 4.5vw, 48px)' } },
                        React.createElement("p", { style: { fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 24 } }, "Pengalaman"),
                        [
                            { period: '2026 – Kini', role: 'Microfinancing Task Force 365', org: 'FIFGROUP' },
                            { period: '2025 – Kini', role: 'Owner & Creative Director', org: 'Gegaiaan & Cakra Labs' },
                            { period: '2023 – Kini', role: 'Campus Ambassador', org: 'Cyber University' },
                        ].map(function (exp, i) { return (React.createElement("div", { key: i, style: { paddingBottom: 20, marginBottom: i < 2 ? 20 : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' } },
                            React.createElement("p", { style: { fontSize: 10, color: 'var(--red)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 7 } }, exp.period),
                            React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 5 } }, exp.role),
                            React.createElement("p", { style: { fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500 } }, exp.org))); })))))));
}
/* ═══════════════════════════════════════════════════════════════════
    HERO
═══════════════════════════════════════════════════════════════════ */
function Hero() {
    return (React.createElement("section", { className: "relative flex items-center justify-center overflow-hidden", style: { minHeight: '100dvh', background: '#000' } },
        React.createElement("div", { className: "hero-video-bg", "aria-hidden": "true" },
            React.createElement("iframe", { className: "hero-video-frame", src: "https://www.youtube-nocookie.com/embed/PTZnjN0pxOE?si=0nOQ-7_Au_W0zMpS&autoplay=1&mute=1&loop=1&playlist=PTZnjN0pxOE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=1", title: "Hero background video", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, referrerPolicy: "strict-origin-when-cross-origin", tabIndex: -1 })),
        React.createElement("div", { className: "hero-video-shade" }),
        React.createElement("div", { className: "relative z-10 text-center px-6" },
            React.createElement("h1", { className: "h1", style: { fontSize: 'clamp(40px, 7vw, 100px)', marginBottom: 12, textTransform: 'none' } },
                React.createElement(letter_3d_swap_1["default"], { mainClassName: "text-2xl sm:text-5xl md:text-7xl lowercase", frontFaceClassName: "bg-transparent text-white", secondFaceClassName: "bg-transparent text-white", rotateDirection: "top", staggerDuration: 0.03, staggerFrom: "first", transition: { type: 'spring', damping: 25, stiffness: 160 } }, "Hi Im Fan")),
            React.createElement("p", { className: "whitespace-pre-wrap", style: { fontFamily: 'var(--font-syne, Syne, sans-serif)', fontSize: 'clamp(15px, 1.4vw, 20px)', color: 'rgba(255,255,255,0.72)', marginBottom: 8, lineHeight: 1.7, letterSpacing: '0.06em', fontWeight: 500, fontStyle: 'italic' } },
                React.createElement("span", null, "Make Feeling Look "),
                React.createElement(fancy_typewriter_1.Typewriter, { text: [
                        "Cinematic",
                        "Aura Farming",
                        "Better",
                        "be alive",
                        "Motion",
                    ], speed: 70, className: "text-yellow-500", waitTime: 1500, deleteSpeed: 40, cursorChar: "_" })),
            React.createElement("div", { className: "mt-6 flex justify-center" },
                React.createElement("a", { href: "/about", style: { textDecoration: 'none' } },
                    React.createElement("button", { className: "relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none" },
                        React.createElement("span", { className: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#800000_50%,#ff0000_100%)]" }),
                        React.createElement("span", { className: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-black/80" },
                            "Explore My Work ",
                            React.createElement(lucide_react_1.ArrowRight, { size: 14, className: "ml-2" })))))),
        React.createElement("div", { className: "absolute bottom-0 left-0 right-0 pointer-events-none", style: { height: '30vh', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 60%, #000 100%)' } })));
}
/* ═══════════════════════════════════════════════════════════════════
    GALLERY SECTION
═══════════════════════════════════════════════════════════════════ */
function GallerySection() {
    var galleryImages = [
        '/assets/assetss/DSC08129.JPG',
        '/assets/assetss/element.png',
        '/assets/assetss/fire element.png',
        '/assets/assetss/background.png',
        '/assets/assetss/element fire.png',
        '/assets/assetss/banner.png',
        '/assets/assetss/overlay.png',
        '/assets/assetss/left corner.png',
    ];
    return (React.createElement("section", { className: "home-gallery-3d-section" },
        React.createElement("div", { className: "home-gallery-orbit home-gallery-orbit-one" }),
        React.createElement("div", { className: "home-gallery-orbit home-gallery-orbit-two" }),
        React.createElement("div", { className: "text-center mb-16 px-6 relative z-10" },
            React.createElement(framer_motion_1.motion.div, { className: "inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/55 text-xs font-bold uppercase tracking-[0.24em] mb-6", initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } },
                React.createElement(lucide_react_1.Sparkles, { size: 14, className: "text-red-500" }),
                "Project Gallery"),
            React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4" },
                "Visual ",
                React.createElement("span", { className: "text-red-500" }, "Gallery")),
            React.createElement("p", { className: "text-white/50 max-w-xl mx-auto" }, "A curated collection of moments, designs, and creative explorations")),
        React.createElement("div", { className: "home-gallery-3d-stage", "aria-label": "Animated visual gallery" }, galleryImages.map(function (src, i) { return (React.createElement(framer_motion_1.motion.figure, { key: src, className: "home-gallery-3d-card home-gallery-card-" + (i + 1), initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } },
            React.createElement("img", { src: src, alt: "", loading: "lazy" }))); })),
        React.createElement("div", { className: "relative z-10 mt-24" },
            React.createElement(image_trail_1["default"], { threshold: 80, keyframes: { opacity: [0, 1, 1, 0], scale: [1, 1, 2] }, keyframesOptions: {
                    opacity: { duration: 2, times: [0, 0.001, 0.9, 1] },
                    scale: { duration: 2, times: [0, 0.8, 1] }
                }, repeatChildren: 1, className: "w-full h-[70vh] cursor-none" }, POSTER_IMAGES.map(function (src, index) { return (React.createElement(image_trail_1.ImageTrailItem, { key: index },
                React.createElement("div", { className: "h-24 w-24 sm:w-32 sm:h-28 relative overflow-hidden rounded-lg border border-white/10" },
                    React.createElement(image_1["default"], { src: src, alt: "poster", fill: true, className: "object-cover", sizes: "128px" })))); })),
            React.createElement("h2", { className: "text-5xl sm:text-9xl absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-100 font-black uppercase text-white/10" }, "ALBUMS")),
        React.createElement("div", { className: "relative z-10 mt-24 overflow-hidden py-16" },
            React.createElement("h2", { className: "text-center text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-12" },
                "Weekly ",
                React.createElement("span", { className: "text-red-500" }, "Finds")),
            React.createElement("div", { className: "flex flex-col gap-2 sm:gap-3" },
                React.createElement(simple_marquee_1["default"], { className: "w-full", baseVelocity: 0.08, repeat: 4, direction: "left", slowdownOnHover: true, slowDownFactor: 0.3 }, GALLERY_ROW_1.map(function (src, i) { return (React.createElement("div", { key: i, className: "mx-1.5 sm:mx-2 shrink-0 hover:scale-[1.02] cursor-pointer duration-500 ease-in-out" },
                    React.createElement("div", { className: "w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-4/3 rounded-lg overflow-hidden" },
                        React.createElement("img", { src: src, alt: "Gallery " + (i + 1), className: "w-full h-full object-cover" })))); })),
                React.createElement(simple_marquee_1["default"], { className: "w-full", baseVelocity: 0.08, repeat: 4, direction: "right", slowdownOnHover: true, slowDownFactor: 0.3 }, GALLERY_ROW_2.map(function (src, i) { return (React.createElement("div", { key: i, className: "mx-1.5 sm:mx-2 shrink-0 hover:scale-[1.02] cursor-pointer duration-500 ease-in-out" },
                    React.createElement("div", { className: "w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-4/3 rounded-lg overflow-hidden" },
                        React.createElement("img", { src: src, alt: "Gallery " + (i + 9), className: "w-full h-full object-cover" })))); })),
                React.createElement(simple_marquee_1["default"], { className: "w-full", baseVelocity: 0.08, repeat: 4, direction: "left", slowdownOnHover: true, slowDownFactor: 0.3 }, GALLERY_ROW_3.map(function (src, i) { return (React.createElement("div", { key: i, className: "mx-1.5 sm:mx-2 shrink-0 hover:scale-[1.02] cursor-pointer duration-500 ease-in-out" },
                    React.createElement("div", { className: "w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-4/3 rounded-lg overflow-hidden" },
                        React.createElement("img", { src: src, alt: "Gallery " + (i + 17), className: "w-full h-full object-cover" })))); }))))));
}
/* ═══════════════════════════════════════════════════════════════════
    PAGE
═══════════════════════════════════════════════════════════════════ */
function HomePage() {
    return (React.createElement("div", { className: "min-h-screen", style: { background: '#000' } },
        React.createElement(Hero, null),
        React.createElement(AboutSection, null),
        React.createElement(GallerySection, null)));
}
exports["default"] = HomePage;
