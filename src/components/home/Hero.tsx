"use client";

import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import RotatingText from "@/components/RotatingText";
import { motion } from "framer-motion";
import type { HeroContent } from "@/lib/zodex";

type HeroProps = {
  hero: HeroContent;
};

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const titleWords = hero.title_prefix.trim().split(/\s+/);
  const primaryLine = titleWords.slice(0, -1).join(" ") || hero.title_prefix;
  const bridgeWord = titleWords.slice(-1)[0] ?? "";

  return (
    <section
      id="home"
      className="relative pb-20  pt-33  bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/50 min-h-screen w-full overflow-hidden -mt-30 text-white"
    >
      {/* Dot grid overlay */}
   

      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        {/* Main Content */}
        <div className="flex-1 px-6 md:px-16 flex flex-col justify-center ">
          {/* Animated Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-white -400 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white -500 animate-pulse" />
              {hero.availability_badge}
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-8xl lg:text-8xl font-semibold leading- [0.95] trackingtight"
          >
            {primaryLine}
            <br />
            <span className="flex gap-3 md:gap-5 items-center">
              {bridgeWord ? bridgeWord : null}
              <RotatingText
                texts={hero.rotating_words}
                mainClassName=""
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden text-orange-500 pb-0.5 sm:pb-1 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 max-w-lg text-zinc-400  font-light md:text-md leading-relaxed"
          >
            {hero.subheading}
          </motion.p>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {hero.tech_tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3  py-1 rounded-full border backdrop-blur-2xl !cursor-pointer border-white/10 text-[11px] font-light tracking-[0.1em] text-zinc-400 uppercase hover:border-orange-500/40 hover:text-orange-400 transition-colors duration-300"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 md:px-16 pb-12 flex flex-col md:flex-row justify-between items-end w-full pointer-events-auto gap-8">
          <div className="max-w-[460px]">
            <p className="text-zinc-400 text-[15px] leading-relaxed font-light  tracking-relaxed">
              {hero.bottom_text}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Scroll indicator */}
            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:flex flex-col items-center gap-2 text-zinc-400"
            >
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]">
                Scroll
              </span>
              <ChevronDown size={16} />
            </motion.div> */}

            {/* CTA */}
            <button className="flex cursor-pointer items-center gap-4 text-white font-semibold group transition-all">
              <span className="backdrop-blur-2xl  bg-white /10 flex font-normal items-center gap-2 text-[13px] text-zinc-900  pl-6 pr-2 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {hero.primary_cta_text}
                <div className="bg-orange-500 group-hover:bg-white group-hover:text-orange-500 p-2 rounded-full text-white group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
