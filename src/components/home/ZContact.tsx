"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { getApiBaseUrl, type ContactInfo, type SectionContent, type SocialLinkItem } from "@/lib/zodex";

const socialsIconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  "message-circle": FaWhatsapp,
  instagram: FaInstagram,
} as const;

const budgetOptions = ["₹50K – ₹1L", "₹1L – ₹3L", "₹3L – ₹5L", "₹5L+"];

export const ZContact = ({
  section,
  contact,
  socialLinks,
}: {
  section?: SectionContent;
  contact: ContactInfo;
  socialLinks: SocialLinkItem[];
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_type: "",
    message: "",
    budget_range: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch(`${getApiBaseUrl()}/contact-inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitMessage("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        project_type: "",
        message: "",
        budget_range: "",
      });
    } catch {
      setSubmitError("Message send nahi hua. Backend check karke phir try karo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-zinc-950 via-zinc-950  to-zinc-900/50  pb-30 -mt-8 rounded-t-[2rem] z-20   pt-27    px-6 md:px-16 relative overflow-hidden">   

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — Contact Info */}
             <div className="relative z-10">
              {/* Header */}
        <div className="mb-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 mb-4"
          >
            {section?.kicker ?? "Ready to Scale?"}
           
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tight"
          >
            {section?.title ?? "Let's"}{" "}
            <span className="italic font-light text-[rgb(255,255,255,0.52)]">
              {section?.highlight ?? "Connect."}  
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 text-zinc-500  font-light max-w-lg leading-relaxed"
          >
            {contact.subheading}
          </motion.p>
        </div>
          <div className="w-full  space-y-4">
            {/* Email */}
            <div className="p-5 rounded-xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl group hover:border-orange-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} className="text-orange-500/70" />
                <span className="text-[11px] font-light text-zinc-300 uppercase tracking-[0.2em]">
                  Email Us
                </span>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-white text-md hover:text-orange-500 transition-colors"
              >
                {contact.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl group hover:border-orange-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={16} className="text-orange-500/70" />
                <span className="text-[11px] font-light text-zinc-300 uppercase tracking-[0.2em]">
                  Call Us
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {contact.phone_numbers.map((phone, index) => (
                  <div key={phone} className="flex items-center gap-3">
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-white text-md hover:text-orange-500 transition-colors"
                    >
                      {phone}
                    </a>
                    {index < contact.phone_numbers.length - 1 ? (
                      <span className="text-zinc-300 hidden sm:inline">|</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-5 rounded-xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl group hover:border-orange-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={16} className="text-orange-500/70" />
                <span className="text-[11px] font-light text-zinc-300 uppercase tracking-[0.2em]">
                  Location
                </span>
              </div>
              <p className="text-white text-md">
                {contact.location}
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon_name, label, href, id }) => {
                const Icon =
                  socialsIconMap[icon_name as keyof typeof socialsIconMap] ??
                  FaInstagram;
                return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl flex items-center justify-center text-zinc-300 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
                );
              })}
            </div>
          </div>
              </div>

          {/* Right — Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-10 rounded-2xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl"
            >
              <h3 className="text-2xl  font-semibold mb-10 text-white">
                {contact.form_title.split(" ").slice(0, -1).join(" ") || "Start"}{" "}
                <span className="text-orange-500 italic">
                  {contact.form_title.split(" ").slice(-1)[0] ?? "Let's build Something Great Together!"}
                </span>
              </h3>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/[0.1] py-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/[0.1] py-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300"
                  />
                </div>

                <input
                  type="text"
                  name="project_type"
                  value={formData.project_type}
                  onChange={onChange}
                  placeholder="Project Type (e.g., SaaS, Mobile App, Website)"
                  className="w-full bg-transparent border-b border-white/[0.1] py-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  placeholder="Tell us about your idea..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/[0.1] py-4 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300 resize-none"
                />

                {/* Budget Range */}
                <div>
                  <p className="text-[10px] font-light text-zinc-300 uppercase tracking-[0.2em] mb-3">
                    Estimated Budget
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map(
                      (range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              budget_range: range,
                            }))
                          }
                          className={`px-4 py-2 rounded-full border text-xs transition-all duration-300 cursor-pointer ${
                            formData.budget_range === range
                              ? "border-orange-500/40 text-orange-400"
                              : "border-white/[0.15] text-zinc-300 hover:border-orange-500/40 hover:text-orange-400"
                          }`}
                        >
                          {range}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex cursor-pointer items-center gap-4 text-white font-semibold group transition-all mt-4 disabled:opacity-70"
                >
                  <span className="bg-white flex items-center gap-2 text-[13px] text-black pl-6 pr-2 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <div className="bg-orange-500 group-hover:bg-white group-hover:text-orange-500 p-2 rounded-full text-white rotate-45 group-hover:rotate-12 transition-all duration-300">
                      <Send size={16} />
                    </div>
                  </span>
                </button>
                {submitMessage ? (
                  <p className="text-xs text-emerald-400 pt-2">{submitMessage}</p>
                ) : null}
                {submitError ? (
                  <p className="text-xs text-red-400 pt-2">{submitError}</p>
                ) : null}
              </form>
            </motion.div>
          </div>
    
      </div>
    </section>
  );
};
