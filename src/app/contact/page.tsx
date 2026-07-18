"use client";

import { useState } from "react";
import "./contact.css";
import ContactHero from "./components/ContactHero";
import ContactFAQ from "./components/ContactFAQ";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Section 1: Contact Hero + Form */}
      <ContactHero
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      {/* Section 2: Social links + FAQ */}
      <ContactFAQ />
    </>
  );
}
