"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProductItem, SectionContent } from "@/lib/zodex";

export function ProductsSection({
  section,
  products,
}: {
  section?: SectionContent;
  products: ProductItem[];
}) {
  return (
    <section id="innovation" className="pb-30  -mt-8  z-20 rounded-t-[2rem] bg-zinc-950 pt-27 px-6 md:px-16 relative">
      {/* Glow */}
      {/* <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-orange-600/[0.03] blur-[150px] rounded-full pointer-events-none" /> */}
      
        {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between  gap-6  border-white/[0.1] mb-16"
      >
        <div>
           <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono] mb-4"
          >
            {section?.kicker ?? "Innovation Hub"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold  text-white tracking-tight"
          >
            {section?.title ?? "Performance"}{" "}
            <span className="italic font-light text-[rgb(255,255,255,0.52)]">
              {section?.highlight ?? "Core."}

            </span>
          </motion.h2>
         
        </div>
        <p className="text-zinc-300 text-sm font-light md:max-w-xs leading-relaxed border-l-2 border-orange-500/60 pl-5">
          {section?.description ??
              "Products we've designed, built & shipped — solving real problems with elegant engineering."}
        </p>
      </motion.div>

        {/* Product Cards */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`}
            >
              {/* Visual */}
              <div className="relative w-full md:w-3/5 group">
                {/* <div
                  className={`absolute -inset-6 bg-gradient-to-br ${product.gradient_class} rounded-3xl blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700`}
                /> */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-900/60 aspect-[11/6.5]">
                  {/* Noise overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%2２url(%２3n)%２２ opacity=%２２0.04%２２/%３E%３C/svg%３E')]" />

                  {/* Inner card */}
                  <div className="w-full h-full bg-gradient-to-br from-white/[0.06] to-transparent flex flex-col items-center justify-center p-8 gap-3">
                   
                    <span className="text-white/40 text-6xl md:text-8xl  font-semibold italic tracking-tighter select-none">
                      {product.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 font-[family-name:var(--font-mono)] text-sm">
                    {product.code}
                  </span>
                   {/* Badge */}
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[10px]  uppercase tracking-widest text-zinc-400">
                      {product.badge}
                    </span>
                  {/* <div className="h-px w-10 bg-white/30" /> */}
                </div>

                <h3 className="text-3xl md:text-[43px]  font-semibold text-white leading-tight tracking-tight">
                  {product.subtitle}
                </h3>

                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[10px]  text-zinc-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  
                  <motion.button className="flex cursor-pointer items-center gap-4 text-white  group transition-all">
                      <span className="backdrop-blur-2xl  border bg-white/5 border-white/10 flex items-center gap-2 text-[13px] text-white  pl-6 pr-2 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        View Case Study
                        <div className="bg-orange-500 group-hover:bg-white group-hover:text-orange-500 p-2 rounded-full text-white group-hover:rotate-45 transition-all duration-500">
                          <ArrowUpRight size={18} />
                        </div>
                      </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
