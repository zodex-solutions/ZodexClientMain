"use client";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import type { StatItem } from "@/lib/zodex";

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative group text-center px-6 py-10"
    >
      <div className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] font-extrabold text-white leading-none">
        {isInView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
        <span className="text-orange-500">{stat.suffix}</span>
      </div>
      <h4 className="mt-3 text-white text-lg font-medium">{stat.label}</h4>
      <p className="text-zinc-400 text-xs font-[family-name:var(--font-mono)] mt-1 uppercase tracking-wider">
        {stat.sub_label}
      </p>
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function StatsSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="relative pb-30 px-6 md:px-16">
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border border-white/[0.11] rounded-2xl bg-black/[0.2] backdrop-blur-lg overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${i < stats.length - 1 ? "md:border-r border-white/[0.11]" : ""} ${i < 2 ? "border-b md:border-b-0 border-white/[0.06]" : ""}`}
          >
            <StatCard stat={stat} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
