"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Film,
} from "lucide-react";
import { noir, silver, silverDim, warmHighlight, FilmGrain } from "@/components/ui/NoirTheme";

const INSTAGRAM_PROFILE = process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE;
const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE;
const LINKEDIN_PROFILE = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    if (isSubmitting) setError(null);
  }, [isSubmitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          to: "mushankhan27@gmail.com",
          subject: `Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send email");

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError(err.message || "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col md:mt-10 md:p-8 md:flex-row w-full min-h-[600px] relative overflow-hidden"
      style={{ backgroundColor: noir }}
    >
      <FilmGrain />

      {/* Contact Form */}
      <div
        className={`flex-1 px-4 py-8 md:p-14 relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundColor: "rgba(255,255,255,0.015)",
          borderRight: "1px solid rgba(200,200,200,0.06)",
        }}
      >
        {/* Header */}
        <div className="relative z-10 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Film size={14} style={{ color: silverDim }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: silverDim }}>
            Scene VII — Contact
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight mb-3"
            style={{ color: silver, fontFamily: "'Georgia', serif" }}
          >
            Write the next <span className="italic" style={{ color: warmHighlight }}>scene</span>
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: silverDim }}>
            Every great production starts with a single conversation. Tell me your
            story and let&rsquo;s create something remarkable together.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 relative z-10"
          >
            <CheckCircle size={32} style={{ color: warmHighlight }} />
            <p className="mt-4 text-lg font-light" style={{ color: silver, fontFamily: "'Georgia', serif" }}>
              Message received
            </p>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase" style={{ color: silverDim }}>
              I&rsquo;ll respond within one business day
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300"
              style={{ color: warmHighlight, border: `1px solid ${warmHighlight}`, backgroundColor: "transparent" }}
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {error && (
              <div className="text-sm p-4" style={{ color: silver, backgroundColor: "rgba(200,50,50,0.1)", border: "1px solid rgba(200,50,50,0.2)" }}>
                {error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.25em] mb-2" style={{ color: silverDim }}>
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-500"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.02)",
                      color: silver,
                      borderBottom: `1px solid ${focused === field.name ? warmHighlight : "rgba(200,200,200,0.1)"}`,
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[10px] font-medium uppercase tracking-[0.25em] mb-2" style={{ color: silverDim }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your vision..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                className="w-full px-4 py-3 text-sm outline-none resize-none transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  color: silver,
                  borderBottom: `1px solid ${focused === "message" ? warmHighlight : "rgba(200,200,200,0.1)"}`,
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(200,200,200,0.15)" }}>
                All fields encrypted
              </p>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 disabled:opacity-50"
                style={{
                  backgroundColor: "transparent",
                  color: warmHighlight,
                  border: `1px solid ${warmHighlight}`,
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Send
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div
        className={`flex-1 p-8 md:p-14 flex flex-col justify-center items-center relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundColor: "rgba(255,255,255,0.01)",
          transitionDelay: "200ms",
        }}
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(232,213,181,0.04) 0%, transparent 70%)" }}
        />

        <h2
          className="text-3xl font-light md:mb-12 mb-8 relative"
          style={{ color: silver, fontFamily: "'Georgia', serif" }}
        >
          Connect <span className="italic" style={{ color: warmHighlight }}>With Me</span>
        </h2>

        <div className="md:space-y-4 relative flex md:block justify-evenly items-center gap-4 mb-8">
          {[
            { icon: <Instagram size={20} />, text: "Instagram", href: INSTAGRAM_PROFILE },
            { icon: <Github size={20} />, text: "GitHub", href: GITHUB_PROFILE },
            { icon: <Linkedin size={20} />, text: "LinkedIn", href: LINKEDIN_PROFILE },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="flex items-center w-[50px] aspect-square md:aspect-auto md:w-[220px] gap-6 md:p-4 group transition-all duration-300 hover:translate-x-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(200,200,200,0.06)",
              }}
            >
              <div
                className="flex items-center justify-center w-full h-full md:w-10 md:h-10 transition-all duration-500 group-hover:scale-110"
                style={{ color: silverDim }}
              >
                {social.icon}
              </div>
              <span
                className="text-sm transition-all hidden md:block duration-300 relative"
                style={{ color: silverDim }}
              >
                {social.text}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
                  style={{ backgroundColor: warmHighlight }}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
