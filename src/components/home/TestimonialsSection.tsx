"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import type { SectionContent, TestimonialItem } from "@/lib/zodex";

export default function TestimonialsSection({
  section,
  testimonials,
}: {
  section?: SectionContent;
  testimonials: TestimonialItem[];
}) {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-zinc-950 via-zinc-900 /90 to-zinc-950/50 rounded-t-[2rem] -mt-8 z-20 relative pt-27  pb-5 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-16 mb-15 relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono)] mb-4"
        >
          {section?.kicker ?? "// Testimonials"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold text-white tracking-tight"
        >
          {section?.title ?? "What Clients"}{" "}
          <span className="italic font-light text-[rgb(255,255,255,0.52)]">
            {section?.highlight ?? "Say."}
          </span>
        </motion.h2>
      </div>

      {/* Marquee Slider */}
      <div className="flex overflow-hidden relative">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="w-[380px] md:w-[440px] flex-shrink-0 group"
            >
              <div className="relative h-full rounded-2xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl p-7 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-500">
                {/* Quote icon */}
                <FaQuoteLeft className="text-orange-500/20 text-2xl mb-4" />

                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        size={12}
                        className="text-orange-500/70"
                      />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-[15px] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/[0.05] pt-5 mt-8">
                  {/* Avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/30 to-violet-500/30 flex items-center justify-center text-white font-[family-name:var(--font-heading)] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold text-white text-base block">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-orange-400/80 font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
