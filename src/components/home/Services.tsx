// "use client";
// import { motion } from "framer-motion";
// import { HiArrowUpRight } from "react-icons/hi2";
// import {
//   Brain,
//   Globe,
//   Palette,
//   Cloud,
//   Clapperboard,
//   TrendingUp,
// } from "lucide-react";
// import type { SectionContent, ServiceItem } from "@/lib/zodex";

// const iconMap = {
//   brain: Brain,
//   globe: Globe,
//   palette: Palette,
//   cloud: Cloud,
//   clapperboard: Clapperboard,
//   "trending-up": TrendingUp,
// } as const;

// export const Services = ({
//   section,
//   services,
// }: {
//   section?: SectionContent;
//   services: ServiceItem[];
// }) => {
//   return (
//     <section id="services" className="pb-30 bg-gradient-to-t from-black/0 via-black [#050505]/60 to-black /90 px-6 md:px-16 relative">
//       {/* Subtle glow */}
//       {/* <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, #fff 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       /> */}
//       {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/[0.04] blur-[150px] rounded-full pointer-events-none" /> */}

//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="flex flex-col md:flex-row md:items-end justify-between  gap-6  border-white/[0.1] mb-16"
//       >
//         <div>
//           <span className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono)] mb-4">
//              {section?.kicker ?? "// What We Do"}
//           </span>
//           <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold text-white tracking-tight">
//              {section?.title ?? "Services &"}{" "}
//             <span className="italic font-light text-[rgb(255,255,255,0.52)]">
//                             {section?.highlight ?? "Expertise."}

//             </span>
//           </h2>
//         </div>
//         <p className="text-zinc-300 text-sm md:max-w-xs leading-relaxed border-l-2 border-orange-500/60 pl-5">
//           {section?.description ??
//             "We fuse technical depth with refined design thinking to ship products that scale, delight, and endure."}
//         </p>
//       </motion.div>

//       {/* Services Grid — 2 col list */}
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
//   {services.filter((item) => item.is_active).map((s, i) => {
//     const Icon = iconMap[s.icon_name as keyof typeof iconMap] ?? Brain;
//     return (
//       <motion.div
//         key={i}
//         className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-orange-500/50 transition-all duration-500 
//           ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}`} // Dynamic sizing
//       >
//         {/* Hover Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
//         <div className="relative z-10 h-full flex flex-col justify-between">
//           <div>
//             <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
//               <Icon size={28} />
//             </div>
//             <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
//               {s.title}
//             </h3>
//             <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300">
//               {s.description}
//             </p>
//           </div>

//           <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
//             <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">{s.number}</span>
//             <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
//               <HiArrowUpRight size={18} />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   })}
// </div>
//     </section>
//   );
// };


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { HiArrowUpRight } from "react-icons/hi2";
// import { Brain, Globe, Palette, Cloud, Clapperboard, TrendingUp } from "lucide-react";
// import type { SectionContent, ServiceItem } from "@/lib/zodex";

// const iconMap = {
//   brain: Brain,
//   globe: Globe,
//   palette: Palette,
//   cloud: Cloud,
//   clapperboard: Clapperboard,
//   "trending-up": TrendingUp,
// } as const;

// export const Services = ({
//   section,
//   services,
// }: {
//   section?: SectionContent;
//   services: ServiceItem[];
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   return (
//     <section 
//       id="services" 
//       ref={containerRef}
//       className="py-32 bg-[#050505] px-6 md:px-16 relative overflow-hidden"
//     >
//       {/* Background Decorative Blobs */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-16">
          
//           {/* Left Side: Content (Sticky) */}
//           <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="text-orange-500 font-mono text-sm tracking-[0.5em] uppercase mb-6 block">
//                 {section?.kicker ?? "// Expertise"}
//               </span>
//               <h2 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tighter mb-8">
//                 {section?.title ?? "Making"}
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 italic font-light">
//                     Impact.
//                 </span>
//               </h2>
//               <p className="text-zinc-500 text-xl leading-relaxed max-w-md">
//                 {section?.description ?? "We combine artistic vision with engineering precision to build the next generation of digital products."}
//               </p>
              
//               <div className="mt-12 hidden lg:block">
//                 <div className="h-px w-full bg-zinc-800 relative">
//                   <motion.div 
//                     className="absolute inset-0 bg-orange-500 origin-left"
//                     style={{ scaleX: 0 }} // Isse scroll ke saath connect kar sakte hain
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Interactive Cards */}
//           <div className="lg:w-3/5 flex flex-col gap-24">
//             {services.filter(s => s.is_active).map((service, i) => (
//                <ServiceCard key={i} service={service} index={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ServiceCard = ({ service, index }: { service: ServiceItem, index: number }) => {
//   const Icon = iconMap[service.icon_name as keyof typeof iconMap] ?? Brain;
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.7, delay: index * 0.1 }}
//       className="group relative"
//     >
//       {/* Index Number Background */}
//       <span className="absolute -top-12 -left-4 text-[10rem] font-bold text-white/[0.02] pointer-events-none select-none">
//         {String(index + 1).padStart(2, '0')}
//       </span>

//       <div className="relative z-10 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-orange-500/40 transition-all duration-500">
        
//         {/* Animated Accent Line */}
//         <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

//         <div className="flex flex-col md:flex-row justify-between gap-8">
//           <div className="flex-1">
//             <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
//               <Icon size={30} />
//             </div>
            
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               {service.title}
//             </h3>
            
//             <p className="text-zinc-400 text-lg leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
//               {service.description}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {/* Fake Tags for Visual Polish */}
//               {["Strategy", "Design", "Scale"].map((tag) => (
//                 <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-zinc-500 font-mono uppercase tracking-wider">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col justify-between items-end">
//              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
//                 <HiArrowUpRight size={24} />
//              </div>
             
//              <div className="hidden md:block">
//                 <p className="[writing-mode:vertical-rl] text-zinc-800 font-mono uppercase tracking-[0.5em] text-xs">
//                   Premium Service
//                 </p>
//              </div>
//           </div>
//         </div>

//         {/* Subtle Hover Glow */}
//         <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//       </div>
//     </motion.div>
//   );

// };



// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { HiArrowUpRight } from "react-icons/hi2";
// import { Brain, Globe, Palette, Cloud, Clapperboard, TrendingUp } from "lucide-react";
// import type { SectionContent, ServiceItem } from "@/lib/zodex";

// const iconMap = {
//   brain: Brain,
//   globe: Globe,
//   palette: Palette,
//   cloud: Cloud,
//   clapperboard: Clapperboard,
//   "trending-up": TrendingUp,
// } as const;

// export const Services = ({
//   section,
//   services,
// }: {
//   section?: SectionContent;
//   services: ServiceItem[];
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section id="services" className="pb-20 -mt-10 rounded-t-[2rem] z-20 pt-18 bg-gray-100 px-5 md:px-16 relative overflow-">
//           <div className=" relative z-10">
             
//                  {/* Header: Centered & Minimal */}
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4"
//           >
//             {section?.kicker ?? "Expertise"}
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-semibold tracking-tight text-black "
//           >
//             {section?.title ?? "OUR"}{" "}
//             <span className="italic font-light text-black/50">
//               {section?.highlight ?? "CAPSULE."}
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="mt-5 text-zinc-500 font-light leading-relaxed"
//           >
//             {section?.description ?? "Boutique digital services designed for high-growth brands."}
//           </motion.p>
//         </div>


//             {/* Responsive Grid List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 border-t border-zinc-100">
//               {services.filter(s => s.is_active).map((service, i) => {
//                 const Icon = iconMap[service.icon_name as keyof typeof iconMap] ?? Brain;
//                 const isHovered = hoveredIndex === i;

//                 return (
//                   <div
//                     key={i}
//                     onMouseEnter={() => setHoveredIndex(i)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     // Mobile par border-r nahi chahiye, sirf desktop par alternate items pe
//                     className={`relative group cursor-pointer border-b border-zinc-100 p-5 md:p-8 transition-all duration-500 
//                       ${i % 2 === 0 ? 'md:border-r md:border-zinc-100' : ''}`}
//                   >
//                     <div className="flex flex-col justify-between h-full min-h-[140px] relative z-10">
                      
//                       {/* Top Row: Index & Icon */}
//                       <div className="flex items-center justify-between mb-6">
//                         <span className={`font-mono text-[10px] font-bold transition-colors duration-500 ${isHovered ? 'text-orange-600' : 'text-zinc-500'}`}>
//                           {String(i + 1).padStart(2, '0')}
//                         </span>
//                         <div className={`transition-all duration-500 ${isHovered ? 'text-zinc-900 rotate-12 scale-110' : 'text-zinc-500'}`}>
//                           <Icon size={24} />
//                         </div>
//                       </div>

//                       {/* Middle Row: Title */}
//                       <div className="mb-4">
//                         <h3 className={`text-xl md:text-2xl font-bold transition-all duration-500 tracking-tight ${isHovered ? 'text-zinc-900 translate-x-2' : 'text-zinc-600'}`}>
//                           {service.title}
//                         </h3>
//                       </div>

//                       {/* Bottom Row: Description Animation */}
//                       <div className="relative h-10 overflow-hidden">
//                         <AnimatePresence mode="wait">
//                           {isHovered ? (
//                             <motion.p
//                               key="active"
//                               initial={{ y: 20, opacity: 0 }}
//                               animate={{ y: 0, opacity: 1 }}
//                               exit={{ y: -20, opacity: 0 }}
//                               className="text-zinc-800 text-xs md:text-sm leading-snug line-clamp-2"
//                             >
//                               {service.description}
//                             </motion.p>
//                           ) : (
//                             <motion.div 
//                               key="idle"
//                               initial={{ y: 20, opacity: 0 }}
//                               animate={{ y: 0, opacity: 1 }}
//                               className="flex items-center gap-2 text-zinc-500 text-[9px] font-bold uppercase tracking-widest"
//                             >
//                               <span>Explore Details</span>
//                               <HiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     {/* Hover Background Layer */}
//                     <div className={`absolute inset-0 bg-zinc-50/50 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
                    
//                     {/* Accent Line */}
//                     <motion.div 
//                       className="absolute bottom-0 left-0 h-[2px] bg-orange-600 z-20"
//                       initial={{ width: 0 }}
//                       animate={{ width: isHovered ? "100%" : 0 }}
//                       transition={{ duration: 0.5, ease: "circOut" }}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>


 
//     </section>
//   );
// };

// "use client";
// import { motion, useAnimationControls } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import { Brain, Globe, Palette, Cloud, Clapperboard, TrendingUp, ArrowUpRight } from "lucide-react";
// import type { SectionContent, ServiceItem } from "@/lib/zodex";

// const iconMap = {
//   brain: Brain,
//   globe: Globe,
//   palette: Palette,
//   cloud: Cloud,
//   clapperboard: Clapperboard,
//   "trending-up": TrendingUp,
// } as const;

// export const Services = ({
//   section,
//   services,
// }: {
//   section?: SectionContent;
//   services: ServiceItem[];
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimationControls();
  
//   // Data ko double kar rahe hain for infinite loop effect
//   const duplicatedServices = [...services.filter(s => s.is_active), ...services.filter(s => s.is_active)];

//   useEffect(() => {
//     // Auto-scroll start logic
//     const startScrolling = async () => {
//       await controls.start({
//         x: "-50%",
//         transition: {
//           duration: 30, // Adjust speed here (Higher = Slower)
//           ease: "linear",
//           repeat: Infinity,
//         },
//       });
//     };

//     startScrolling();
//   }, [controls]);

//   return (
//     <section id="services" className="pb-32 bg-zinc-100 pt-24 rounded-t-[2rem] -mt-14 relative z-20 overflow-hidden">
//       <div className=" mx-auto">
        // <div className="text-center max-w-2xl mx-auto mb-14 px-5">
        //   <motion.span
        //     initial={{ opacity: 0 }}
        //     whileInView={{ opacity: 1 }}
        //     viewport={{ once: true }}
        //     className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4"
        //   >
        //     {section?.kicker ?? "Expertise"}
        //   </motion.span>
        //   <motion.h2
        //     initial={{ opacity: 0, y: 20 }}
        //     whileInView={{ opacity: 1, y: 0 }}
        //     viewport={{ once: true }}
        //     className="text-4xl md:text-6xl font-semibold tracking-tight text-black"
        //   >
        //     {section?.title ?? "OUR"}{" "}
        //     <span className="italic font-light text-black/50">
        //       {section?.highlight ?? "CAPSULE."}
        //     </span>
        //   </motion.h2>
        //   <motion.p
        //     initial={{ opacity: 0 }}
        //     whileInView={{ opacity: 1 }}
        //     viewport={{ once: true }}
        //     className="mt-5 text-zinc-500 font-light leading-relaxed"
        //   >
        //     {section?.description ?? "Boutique digital services designed for high-growth brands."}
        //   </motion.p>
        // </div>

//         {/* --- AUTO-SCROLLING SLIDER --- */}
//         <div className="relative overflow-hidden group/container">
//           <motion.div 
//             className="flex gap-5 cursor-grab active:cursor-grabbing pb-10"
//             animate={controls}
//             onMouseEnter={() => controls.stop()} // Pause on hover
//             onMouseLeave={() => {
//               // Restart scroll if not dragging
//               controls.start({
//                 x: "-50%",
//                 transition: { duration: 30, ease: "linear", repeat: Infinity }
//               });
//             }}
//             style={{ width: "fit-content" }}
//           >
//             {duplicatedServices.map((service, i) => {
//               const Icon = iconMap[service.icon_name as keyof typeof iconMap] ?? Brain;
//               const isHovered = hoveredIndex === i;

//               return (
//                 <motion.div
//                   key={`${service.id}-${i}`}
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   className="w-[280px] md:w-[320px] bg-white p-8 rounded-[2rem] flex flex-col justify-between h-[280px] border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 relative overflow-hidden group"
//                 >
//                   {/* Top: Icon & Arrow */}
//                   <div className="flex items-center justify-between relative z-10">
//                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-400 border border-zinc-100'}`}>
//                       <Icon size={22} />
//                     </div>
//                     <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
//                       <ArrowUpRight size={20} className="text-orange-600" />
//                     </div>
//                   </div>

//                   {/* Bottom Content */}
//                   <div className="relative z-10">
//                     <h3 className="text-lg font-bold tracking-tight text-zinc-800 mb-2 group-hover:text-zinc-950 transition-colors">
//                       {service.title}
//                     </h3>
//                     <p className="text-zinc-500 text-[13px] leading-relaxed line-clamp-3">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Subtle Background Pattern (Hover) */}
//                   <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-orange-500/5 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// };



"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brain, Globe, Palette, Cloud, Clapperboard, TrendingUp, ArrowRight } from "lucide-react";

// Types definition (Agar aapki file me types missing hain toh)
interface ServiceItem {
  id: string | number;
  title: string;
  description: string;
  icon_name: string;
  is_active: boolean;
}

interface SectionContent {
  kicker?: string;
  title?: string;
  highlight?: string;
  description?: string;
}

const iconMap = {
  brain: Brain,
  globe: Globe,
  palette: Palette,
  cloud: Cloud,
  clapperboard: Clapperboard,
  "trending-up": TrendingUp,
} as const;

export default function Services({
  section,
  services,
}: {
  section?: SectionContent;
  services: ServiceItem[];
}) {
  // Pehli service ko by default active rakhte hain
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeServices = services?.filter(s => s.is_active) || [];

  return (
    <section id="services" className="pb-32 pt-24 bg-zinc-100 rounded-t-[2rem] -mt-10 relative z-20">
      <div className=" px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* --- LEFT: Sticky Header --- */}
        <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4"
          >
            {section?.kicker ?? "Expertise"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-black"
          >
            {section?.title ?? "OUR"}{" "}
            <span className="italic font-light text-black/50">
              {section?.highlight ?? "CAPSULE."}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 text-zinc-500 font-light leading-relaxed"
          >
            {section?.description ?? "Boutique digital services designed for high-growth brands."}
          </motion.p>
 
        </div>

        {/* --- RIGHT: Interactive Cardless List --- */}
        <div className="lg:w-2/3">
          <div className="">
            {activeServices.map((service, i) => {
              const Icon = iconMap[service.icon_name as keyof typeof iconMap] ?? Brain;
              const isActive = activeIndex === i;

              return (
                <div
                  key={service.id || i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i === activeIndex ? null : i)} // Mobile friendly toggle
                  className="group cursor-pointer border-b border-zinc-200 overflow-hidden transition-colors duration-500 hovebg-zinc-50/50"
                >
                  <div className="py-8 md:py-10 px-4 md:px-6 flex flex-col">
                    
                    {/* Title & Icon Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        {/* <span className={`font-mono  text-sm transition-colors duration-500 ${isActive ? 'text-orange-600 ' : 'text-zinc-400'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span> */}
                             <div className="w-12 h-12 rounded-full   flex items-center justify-center text-orange-600 shrink-0">
                              <Icon size={24} strokeWidth={1.5} />
                            </div>
                        <h3 className={`text-2xl md:text-2xl font-semibold tracking-tight transition-colors duration-500 ${isActive ? 'text-zinc-900' : 'text-zinc-500'}`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      <div className={`transform transition-all duration-500 ${isActive ? 'rotate-0 opacity-100 text-orange-600' : '-rotate-45 opacity-0 text-zinc-400'}`}>
                        <ArrowRight size={25} strokeWidth={1} />
                      </div>
                    </div>

                    {/* Expandable Description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-17 pr-4 flex flex-col md:flex-row items-start gap-3">
                       
                            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl">
                              {service.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}