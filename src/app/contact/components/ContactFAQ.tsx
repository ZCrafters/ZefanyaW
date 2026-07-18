"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";

const FAQ_ITEMS = [
  { q: "What services do you offer?", a: "I offer digital business consulting, content creation, social media management, and brand strategy development tailored to your specific needs." },
  { q: "How can we collaborate?", a: "We can collaborate through project-based work, ongoing consulting, or partnership opportunities. Reach out to discuss how we can work together." },
  { q: "What is your availability?", a: "I'm currently available for new projects and collaborations. My schedule is flexible and I can adapt to different time zones." },
  { q: "Do you work remotely?", a: "Yes, I primarily work remotely but I'm open to on-site collaborations depending on the project requirements and location." },
];

const SOCIALS = [
  { icon: "fab fa-instagram", label: "Instagram", handle: "@zefanya.williams", href: "https://instagram.com/zefanya.williams" },
  { icon: "fab fa-tiktok", label: "TikTok", handle: "@zefanya.williams", href: "https://tiktok.com/@zefanya.williams" },
  { icon: "fab fa-linkedin", label: "LinkedIn", handle: "Zefanya Williams", href: "https://www.linkedin.com/in/zefanya-williams-272415261/" },
];

const socialList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
};

const socialItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 150, damping: 20 } },
};

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-hub-section">
      <div className="contact-hub-grid" aria-hidden="true" />
      <div className="container-main contact-hub-container">
        <motion.header
          className="contact-hub-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Contact hub / FAQ</span>
          <h2>Answers first.<br /><em>Conversation next.</em></h2>
          <p>Find the quick details, then choose the channel that feels most natural.</p>
        </motion.header>

        <motion.div
          className="contact-hub-workspace"
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <aside className="contact-social-panel">
            <div className="contact-social-topline">
              <MessageCircle className="h-4 w-4" /> Connect with me
            </div>
            <div className="contact-social-intro">
              <h3>Pick a channel.</h3>
              <p>For collaborations, ideas, or a simple hello.</p>
            </div>

            <motion.div
              className="contact-social-list"
              variants={socialList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  variants={socialItem}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="contact-social-icon"><i className={social.icon} /></span>
                  <span className="contact-social-copy">
                    <strong>{social.label}</strong>
                    <small>{social.handle}</small>
                  </span>
                  <ArrowUpRight className="contact-social-arrow" />
                </motion.a>
              ))}
            </motion.div>

            <div className="contact-social-status">
              <span /> Available for selected projects
            </div>
          </aside>

          <div className="contact-faq-panel">
            <div className="contact-faq-head">
              <div>
                <span>FAQ</span>
                <h3>Common questions</h3>
              </div>
              <span className="contact-faq-count">0{FAQ_ITEMS.length}</span>
            </div>

            <div className="contact-faq-list">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.article
                    layout
                    key={faq.q}
                    className={`contact-faq-item ${isOpen ? "is-open" : ""}`}
                    transition={{ layout: { type: "spring", stiffness: 320, damping: 32 } }}
                  >
                    {isOpen && (
                      <motion.span
                        className="contact-faq-active"
                        layoutId="contact-faq-active"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                      <span className="contact-faq-number">0{index + 1}</span>
                      <span className="contact-faq-question">{faq.q}</span>
                      <motion.span className="contact-faq-toggle" animate={{ rotate: isOpen ? 45 : 0 }}>
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="contact-faq-answer"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.22 }}
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
