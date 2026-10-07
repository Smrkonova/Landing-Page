"use client";

import React, { useState, useEffect } from "react";
import { trackFormSubmission } from "@/lib/analytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/marketing@smrkonova.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead: ${formData.name.trim()} (Story Experience Modal)`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.name.trim(),
          'Email': formData.email.trim(),
          'Project Brief': formData.message.trim(),
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok || result.success === 'true' || result.success === true) {
        trackFormSubmission("contact_modal", "success");
      } else {
        trackFormSubmission("contact_modal", "error");
      }
    } catch {
      // Gracefully continue even if local dev mock
      trackFormSubmission("contact_modal", "error");
    }

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 400);
  };

  return (
    <div
      className="contact-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="contact-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="contact-success-state">
            <div className="contact-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="contact-success-title">TRANSMISSION RECEIVED</h3>
            <p className="contact-success-desc">
              Thank you for reaching out. Our team will review your project and get in touch within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="contact-modal-header">
              <span className="contact-pill">DIRECT TRANSMISSION</span>
              <h3 id="contact-modal-title" className="contact-modal-title">
                BUILD SOMETHING EXTRAORDINARY
              </h3>
              <p className="contact-modal-subtitle">
                Have an ambitious idea? Share your vision with our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">WORK EMAIL</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">PROJECT BRIEF</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about what you want to engineer..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="contact-submit-btn" disabled={loading}>
                <span>{loading ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <div className="contact-direct-links">
              <span>Or reach out directly: </span>
              <a href="mailto:hello@smrkonova.com" className="contact-email-link">
                hello@smrkonova.com
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
