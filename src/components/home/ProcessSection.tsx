"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { ProcessStepItem, SectionContent } from "@/lib/zodex";

const iconMap = {
  search: Search,
  "pen-tool": PenTool,
  code: Code2,
  rocket: Rocket,
} as const;

export default function ProcessSection({
  section,
  steps,
}: {
  section?: SectionContent;
  steps: ProcessStepItem[];
}) {
  return (
    <section className="pb-30  bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-800/50  px-6 md:px-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono] mb-4"
          >
            {section?.kicker ?? "Concept to Reality"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold  text-white tracking-tight"
          >
            {section?.title ?? "Strategic"}{" "}
            
            <span className="italic font-light text-[rgb(255,255,255,0.52)]">
              {section?.highlight ?? "Roadmap."}
              
            </span>
          </motion.h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon_name as keyof typeof iconMap] ?? Search;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative  "
              >
                {/* Connector line (hidden on mobile / last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-white/[0.15]   z-0" />
                )}

                <div className="relative p-6 rounded-2xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl hover:border-orange-500/20 hover:bg-white/[0.03] transition-all duration-500 h-full">
                  {/* Phase label */}
                  <span className="text-[10px] text-zinc-300 uppercase tracking-[0.2em]">
                    {step.phase}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-zinc-300 group-hover:text-orange-500 transition-colors duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-2xl  font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-zinc-400 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detail tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.details.map((d) => (
                      <span
                        key={d}
                        className="text-[9.5px]  text-zinc-300 uppercase tracking-wider px-2 py-1 rounded bg-white/[0.05] border border-white/[0.04]"
                      >
                        {d}
                      </span>
                    ))}
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
