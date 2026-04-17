"use client";
import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, RefreshCcw } from "lucide-react";
import type { ReasonItem, SectionContent } from "@/lib/zodex";

const iconMap = {
  zap: Zap,
  shield: Shield,
  "heart-handshake": HeartHandshake,
  "refresh-ccw": RefreshCcw,
} as const;

export default function WhyZodex({
  section,
  reasons,
}: {
  section?: SectionContent;
  reasons: ReasonItem[];
}) {
  return (
    <section className="pb-30 px-6 md:px-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/[0.025] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono)] mb-4"
          >
            {section?.kicker ?? "// Why Zodex"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold text-white tracking-tight"
          >
            {section?.title ?? "Built Different,"}{" "}
            <span className="italic font-light text-[rgb(255,255,255,0.52)]">
              {section?.highlight ?? "By Design."}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 text-zinc-400 text-base leading-relaxed"
          >
            {section?.description ??
              "We're not another dev agency. We're a precision-engineered digital studio that treats every project like a product launch."}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = iconMap[r.icon_name as keyof typeof iconMap] ?? Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-2xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl hover:border-orange-500/20 hover:bg-white/[0.025] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-zinc-300 group-hover:text-orange-500 transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-white mb-2">
                      {r.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
