// "use client";
// import { motion } from "framer-motion";
// import { HiArrowUpRight } from "react-icons/hi2";
// import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";

// export default function ZCases({
//   section,
//   cases,
// }: {
//   section?: SectionContent;
//   cases: PortfolioCaseItem[];
// }) {
//   return (
//     <section className="py-24 px-6 md:px-16  relative overflow-hidden">
//       {/* Background Decorative Light */}
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
//       >
//         <div className="max-w-2xl">
//           <span className="inline-block text-xs uppercase tracking-[0.4em] text-orange-500 font-mono mb-4">
//             {section?.kicker ?? "// Portfolio"}
//           </span>
//           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
//             {section?.title ?? "Selected"}{" "}
//             <span className="text-zinc-500 italic font-light">
//               {section?.highlight ?? "Works."}
//             </span>
//           </h2>
//         </div>
//         <p className="text-zinc-400 text-lg md:max-w-xs leading-relaxed border-l border-zinc-800 pl-6">
//           {section?.description ??
//             "A curated collection of digital products we've crafted to solve complex problems."}
//         </p>
//       </motion.div>

//       {/* Modern Masonry-Style Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
//         {cases.map((work, index) => (
//           <motion.div
//             key={work.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ 
//               duration: 0.8, 
//               delay: index % 2 === 0 ? 0 : 0.2, // Staggered effect for pairs
//               ease: [0.215, 0.61, 0.355, 1] 
//             }}
//             className={`group relative flex flex-col ${
//               index % 2 !== 0 ? "md:mt-24" : "" // Alternating vertical offset
//             }`}
//           >
//             {/* Image Wrapper */}
//             <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl">
//               <motion.img
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.8, ease: "circOut" }}
//                 src={work.image_path}
//                 alt={work.title}
//                 className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 grayscale-[50%] group-hover:grayscale-0"
//               />

//               {/* Top Meta Info */}
//               <div className="absolute top-6 left-6 flex items-center gap-3">
//                 <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-mono text-white tracking-[0.2em] uppercase">
//                   {work.code}
//                 </span>
//                 <div className="h-px w-8 bg-orange-500/50" />
//               </div>

//               {/* Hover Overlay Arrow */}
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                 <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl shadow-orange-500/20">
//                   <HiArrowUpRight size={28} />
//                 </div>
//               </div>
//             </div>

//             {/* Content Info (Below Image) */}
//             <div className="mt-8 flex justify-between items-start px-2">
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <span className="h-1 w-1 bg-orange-500 rounded-full animate-pulse" />
//                   <p className="text-orange-500 font-mono text-[11px] uppercase tracking-widest">
//                     {work.category}
//                   </p>
//                 </div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors duration-300">
//                   {work.title}
//                 </h3>
//               </div>
              
//               <div className="pt-2">
//                  <span className="text-zinc-600 font-mono text-sm group-hover:translate-x-1 transition-transform inline-block">
//                     {String(index + 1).padStart(2, '0')} —
//                  </span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="mt-32 flex justify-center">
//         <button className="px-10 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs">
//           View All Projects
//         </button>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { HiArrowUpRight } from "react-icons/hi2";
// import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";

// export default function ZCases({
//   section,
//   cases,
// }: {
//   section?: SectionContent;
//   cases: PortfolioCaseItem[];
// }) {
//   return (
//     <section id="work" className="py-24 px-6 md:px-16  relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Sticky Header Section */}
//         <div className="flex flex-col md:flex-row gap-12 mb-24 items-start">
//           <div className="md:sticky md:top-32 w-full md:w-[40%]">
//             <span className="inline-block text-xs uppercase tracking-[0.4em] text-orange-500 font-mono mb-6">
//               {section?.kicker ?? "// Portfolio"}
//             </span>
//             <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
//               {section?.title ?? "SELECTED"}<br />
//               <span className="text-zinc-600 italic font-light tracking-normal">
//                 {section?.highlight ?? "WORKS."}
//               </span>
//             </h2>
//             <p className="text-zinc-500 mt-10 max-w-sm text-lg leading-relaxed border-l-2 border-orange-500/40 pl-6">
//               {section?.description ??
//                 "Engineering digital excellence through strategic design and robust development."}
//             </p>
            
//             {/* Call to action inside sticky part */}
//             <motion.button 
//               whileHover={{ x: 10 }}
//               className="mt-12 flex items-center gap-4 group"
//             >
//               <span className="text-white uppercase tracking-widest text-xs font-bold">Explore All Projects</span>
//               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
//                 <HiArrowUpRight className="text-white" size={20} />
//               </div>
//             </motion.button>
//           </div>

//           {/* Stacking Project Cards */}
//           <div className="w-full md:w-[60%] flex flex-col gap-20">
//             {cases.map((work, index) => (
//               <motion.div
//                 key={work.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 // Sticky effect logic
//                 className="sticky top-32 group"
//                 style={{ 
//                     marginTop: index === 0 ? 0 : `${index * 10}px`,
//                     zIndex: index + 1 
//                 }}
//               >
//                 <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-orange-500/30">
                  
//                   {/* Image Container */}
//                   <div className="relative aspect-[16/10] overflow-hidden">
//                     <motion.img
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.8 }}
//                       src={work.image_path}
//                       alt={work.title}
//                       className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale-[40%] group-hover:grayscale-0"
//                     />
                    
//                     {/* Badge */}
//                     <div className="absolute top-8 left-8">
//                       <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-mono text-white tracking-widest uppercase">
//                         {work.code} / {work.category}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Project Details Footer */}
//                   <div className="p-8 md:p-12 flex justify-between items-end bg-gradient-to-t from-black to-transparent">
//                     <div>
//                       <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-2">
//                         {work.title}
//                       </h3>
//                       <p className="text-zinc-500 font-mono text-sm tracking-wider uppercase">
//                         {work.category} — {new Date().getFullYear()}
//                       </p>
//                     </div>
                    
//                     <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-500">
//                       <HiArrowUpRight size={28} />
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { HiArrowUpRight } from "react-icons/hi2";
// import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";
   
// export default function ZCases({
//   section,
//   cases,
// }: {
//   section?: SectionContent;
//   cases: PortfolioCaseItem[];
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section id="work" className="py-32  px-4 md:px-10 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* Section Header: Minimal & Clean */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
//           <div className="max-w-2xl">
//             <motion.span 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="text-orange-500 font-mono text-sm tracking-[0.4em] uppercase block mb-4"
//             >
//               {section?.kicker ?? "// Selected Cases"}
//             </motion.span>
//             <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none">
//               {section?.title ?? "Featured"}<br />
//               <span className="!text-[rgba(255,255,255,0.1)] zinc-300 outline-text italic">Projects</span>
//             </h2>
//           </div>
//           <div className="md:text-right">
//              <p className="text-zinc-500 max-w-xs text-lg mb-6">
//                {section?.description ?? "Focusing on quality over quantity, we build digital products that set new industry standards."}
//              </p>
//           </div>
//         </div>

//         {/* Big Projects List */}
//         <div className="flex flex-col space-y-32">
//           {cases.map((work, index) => (
//             <ProjectItem key={work.id} work={work} index={index} />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .outline-text {
//           -webkit-text-stroke: 1px #333;
//           color: transparent;
//         }
//       `}</style>
//     </section>
//   );
// }


// const ProjectItem = ({ work, index }: { work: PortfolioCaseItem, index: number }) => {
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className={`relative group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
//     >
//       {/* Background Index (Big & Ghosty) */}
//       <span className={`absolute -top-20 ${isEven ? '-left-10' : '-right-10'} text-[15rem] font-bold text-white/[0.03] select-none pointer-events-none hidden lg:block`}>
//         0{index + 1}
//       </span>

//       {/* Image Side */}
//       <div className="w-full md:w-3/5 overflow-hidden rounded-2xl bg-zinc-900 group">
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
//           className="relative aspect-[16/9] md:aspect-[4/3] cursor-pointer"
//         >
//           {/* Overlay for depth */}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
          
//           <img
//             src={work.image_path}
//             alt={work.title}
//             className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
//           />

//           {/* Floating Category Tag */}
//           <div className="absolute top-6 left-6 z-20">
//             <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-mono text-white tracking-widest uppercase border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                {work.category}
//             </span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Info Side */}
//       <div className={`w-full md:w-2/5 flex flex-col ${isEven ? 'items-start' : 'items-start md:items-end md:text-right'}`}>
//         <div className="space-y-6">
//           <div className="flex items-center gap-4 text-orange-500 font-mono text-sm">
//              <span className="h-px w-8 bg-orange-500" />
//              {work.code || "PROJECT"}
//           </div>
          
//           <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight group-hover:text-orange-500 transition-colors duration-500">
//             {work.title}
//           </h3>
          
//           <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
//             Strategically crafted digital experience focusing on {work.category.toLowerCase()} and user-centric flows.
//           </p>

//           <motion.div 
//             className="pt-6 inline-block"
//             whileHover={{ x: 10 }}
//           >
//             <button className="flex items-center gap-3 text-white font-semibold group/btn">
//               <span className="text-sm uppercase tracking-[0.2em]">View Case Study</span>
//               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
//                 <HiArrowUpRight />
//               </div>
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// "use client";
// import { motion } from "framer-motion";
// import { HiArrowUpRight } from "react-icons/hi2";
// import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";

// export default function ZCases({
//   section,
//   cases,
// }: {
//   section?: SectionContent;
//   cases: PortfolioCaseItem[];
// }) {
//   return (
//     <section id="work" className="py-32 -mt-10   rounded-t-[2rem] z-20 pt-20 bg-gray-100 bg -gradient-to-b  from-transparent via-black to-transparent black px-6 md:px-16 relative">
// {/* <span
//   className="italic !text-7xl"
 
// >
//   Projects
// </span> */}
//       <div className="max-w-7xl mx-auto">

//         {/* Header: Centered & Minimal */}
//                 <div className="text-center max-w-2xl mx-auto mb-20">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-[family-name:var(--font-mono)] mb-4"
//           >
//             {section?.kicker ?? "// Selected Work"}
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl  md:text-6xl font-[family-name:var(--font-heading)] font-bold text-black tracking-tight"
//           >
//             {section?.title ?? "ARCHIVE,"}{" "}
//             <span className="italic font-light text-[rgb(0,0,0,0.5)]">
//               {section?.highlight ?? "2024—26."}
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="mt-5 text-zinc-500 text-base leading-relaxed"
//           >
//             {section?.description ??
//               "We're not another dev agency. We're a precision-engineered digital studio that treats every project like a product launch."}
//           </motion.p>
//         </div>
       

//         {/* Project Grid: Modern Masonry Style */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-17">
//           {cases.map((work, index) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
//               className={`relative group ${index % 2 !== 0 ? 'md:mt-17' : ''}`}
//             >
//               {/* Project Card */}
//               <div className="relative overflow-hidden rounded-3xl  group">
                
//                 {/* Image Wrap */}
//                 <div className="relative aspect-[3.5/2] overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.1, rotate: 2 }}
//                     transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
//                     src={work.image_path}
//                     alt={work.title}
//                     className="w-full h-full object-cover grayscal group-hover:grayscale-0 transition-all duration-700"
//                   />
                  
//                   {/* Dark Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black /80 via-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

//                   {/* Top Badge */}
//                   <div className="absolute top-6 right-6">
//                     <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500">
//                       <HiArrowUpRight size={20} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Overlay - Revealed on Hover */}
//                 <div className="absolute bottom-0 left-0 w-full p-5 md:px-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                   <div className="overflow-hidden">
//                     <motion.span 
//                        className="block text-orange-500 font-mono text-xs uppercase tracking-widest mb-2 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
//                     >
//                       {work.category}
//                     </motion.span>
//                   </div>

//                   <h3  
//                   // style={{ WebkitTextStroke: "1px black", color: "" }} 
//                   className="text-3xl outline-text md:text-4xl font-bold text-white mb-4">
//                     {work.title}
//                   </h3>

                  
//                   <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
//                     <button className="text-white text-sm font-bold uppercase tracking-tighter border-b border-orange-500 pb-1">
//                       View Project
//                     </button>
//                     <span className="text-zinc-500 font-mono text-xs italic">
//                       {work.code || "SEC_04"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Meta-info (Outside Card) */}
//               <div className="mt-8 flex justify-between items-start px-2">
//                  <div className="text-zinc-600 font-mono text-xs">
//                     DESIGNED BY ZODEX — {new Date().getFullYear()}
//                  </div>
//                  <div className="h-px flex-1 mx-8 bg-zinc-800 self-center opacity-0 group-hover:opacity-100 transition-opacity" />
//                  <div className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
//                     Available Now
//                  </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { HiArrowUpRight } from "react-icons/hi2";
// import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";

// export default function ZCases({
//   section,
//   cases,
// }: {
//   section?: SectionContent;
//   cases: PortfolioCaseItem[];
// }) {
//   return (
//     <section id="work" className="py-32 -mt-10 rounded-t-[2rem] z-20 pt-20 bg-gray-100 px-6 md:px-16 relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-mono mb-4"
//           >
//             {section?.kicker ?? "// Selected Work"}
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold text-black tracking-tight"
//           >
//             {section?.title ?? "ARCHIVE,"}{" "}
//             <span className="italic font-light text-black/50">
//               {section?.highlight ?? "2024—26."}
//             </span>
//           </motion.h2>
//         </div>

//         {/* Updated Grid: 3 Columns on Desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
//           {cases.map((work, index) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
//               /* Masonry logic: Second item halke offset pe, third item zyada offset pe */
//               className={`relative group ${
//                 index % 3 === 1 ? 'lg:mt-12' : index % 3 === 2 ? 'lg:mt-0' : ''
//               }`}
//             >
//               {/* Project Card */}
//               <div className="relative overflow-hidden rounded-3xl group bg-white shadow-sm">
//                 <div className="relative aspect-[3/2] overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.6 }}
//                     src={work.image_path}
//                     alt={work.title}
//                     className="w-full h-full object-cover grayscal group-hover:grayscale-0 transition-all duration-700"
//                   />
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

//                   {/* Icon */}
//                   <div className="absolute top-5 right-5">
//                     <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors duration-300">
//                       <HiArrowUpRight size={18} />
//                     </div>
//                   </div>

//                   {/* Content on Image */}
//                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className="block text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-1">
//                       {work.category}
//                     </span>
//                     <h3 className="text-2xl font-bold text-white leading-tight">
//                       {work.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Meta Info Below Card */}
//               <div className="mt-5 flex justify-between items-center px-1">
//                 <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">
//                   {work.code || "PRJ_01"}
//                 </span>
//                 <div className="h-px flex-1 mx-4 bg-zinc-200" />
//                 <span className="text-[10px] font-bold text-zinc-800 uppercase">
//                   {new Date().getFullYear()}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import type { PortfolioCaseItem, SectionContent } from "@/lib/zodex";
import { ArrowUpRight } from "lucide-react";

export default function ZCases({
  section,
  cases,
}: {
  section?: SectionContent;
  cases: PortfolioCaseItem[];
}) {
  return (
    <section id="portfolio" className="py-32 -mt-10 rounded-t-[2rem] z-20 pt-20 bg-gray-100 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header: Centered & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4"
          >
            {section?.kicker ?? "Portfolio"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-black "
          >
            {section?.title ?? "Digital"}{" "}
            <span className="italic font-light text-black/50">
              {section?.highlight ?? "Craft."}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 text-zinc-500 font-light leading-relaxed"
          >
            {section?.description ?? "We're a precision-engineered digital studio that treats every project like a product launch."}
          </motion.p>
        </div>

        <div className="text-black text-center flex items-center justify-center ">
          <motion.button className="flex cursor-pointer items-center gap-4 text-white  group transition-all">
                      <span className="backdrop-blur2xl  border bg-transparent border-gray-400 hover:border-orange-500 flex items-center gap-2 text-[13px] text-zinc-800  pl-6 pr-2 py-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        View All Projects
                        <div className="bg-orange-500 group-hover:bg-white group-hover:text-orange-500 p-2 rounded-full text-white group-hover:rotate-45 transition-all duration-500">
                          <ArrowUpRight size={18} />
                        </div>
                      </span>
           </motion.button>
        </div>

        {/* Project Grid: 3-Column Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-12">
          {cases.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              /* Masonry logic for 3 columns: Offset for 2nd and 3rd items */
              className={`relative group ${
                index % 3 === 1 ? 'lg:mt-16' : index % 3 === 2 ? 'lg:mt-0' : ''
              }`}
            >
              {/* Project Card (Aapki Original Design) */}
              <div className="relative overflow-hidden rounded-3xl group">
                
                {/* Image Wrap */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
                    src={work.image_path}
                    alt={work.title}
                    className="w-full h-full object-cover grayscal group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950  via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 -950/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <HiArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:px- transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden">
                    <motion.span 
                       className="block text-white -500 font-semibold text-[11px] uppercase tracking-widest mb-2 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    >
                      {work.category}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl md:text-xl font-medium text-zinc-100 mb-2">
                    {work.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <button className="text-zinc-300 text-[9px] font-normal leading-4  tracking-widest uppercase  border-b border-orange-500 pb-[.5px]">
                      View Project
                    </button>
                    <span className="text-zinc-300 font-mono text-[10px] ">
                      {work.code || "SEC_04"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Meta-info */}
              <div className="mt-3 flex justify-between items-start px-2">
                 <div className="text-zinc-600 font- text-[9px] leading-4 tracking-widest">
                    DESIGNED BY ZODEX — {new Date().getFullYear()}
                 </div>
                 <div className="h-px flex-1 mx-4 bg-zinc-300 self-center opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="text-zinc-400 font-medium uppercase text-[9px] tracking-widest">
                    Available Now
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}