// "use client";
// import { motion } from "framer-motion";
// import { Mail, ArrowUpRight } from "lucide-react";
// import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

// const socials = [
//   { Icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
//   { Icon: FaGithub, link: "https://github.com/zodex-solutions", label: "GitHub" },
//   { Icon: FaWhatsapp, link: "https://wa.me/919509961818", label: "WhatsApp" },
// ];

// const quickLinks = ["Services", "Products", "Portfolio", "Case Studies"];
// const resources = ["Our Process", "Documentation", "Brand Assets", "Privacy"];

// export default function Footer() {
//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative pt-24 pb-8 ">
//       {/* Glow */}
//       <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

//       <div className="relative px-6 md:px-16">
//         {/* Main Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-black/[0.015] backdrop-blur-2xl p-8 md:p-12"
//         >
//           {/* CTA Row */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-white/[0.06]">
//             <div className="max-w-xl">
//               <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
//                 Ready to Build Your{" "}
//                 <span className="text-orange-500 italic">Digital Future?</span>
//               </h2>
//               <p className="text-zinc-300 mt-4 text-sm leading-relaxed">
//                 From concept to deployment — let&apos;s turn your vision into a
//                 scalable, production-grade digital product.
//               </p>
//             </div>
//             <img
//               src="/zodexFooter.png"
//               className="h-20 md:h-28 opacity-70"
//               alt="Zodex"
//             />
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//             {/* Brand */}
//             <div>
//               <img src="/logo.png" className="h-12 mb-5" alt="Zodex" />
//               <p className="text-zinc-400 text-sm leading-relaxed">
//                 Crafting modern digital experiences through AI, scalable SaaS &
//                 cutting-edge design.
//               </p>
//               <div className="flex gap-3 mt-6">
//                 {socials.map(({ Icon, link, label }) => (
//                   <motion.a
//                     key={label}
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                     className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300"
//                     aria-label={label}
//                   >
//                     <Icon size={16} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
//                 Navigation
//               </h4>
//               <ul className="space-y-3">
//                 {quickLinks.map((item) => (
//                   <li
//                     key={item}
//                     className="text-zinc-400 text-sm hover:text-white cursor-pointer transition-colors flex items-center group gap-0"
//                   >
//                     <span className="w-0 group-hover:w-3 h-px bg-orange-500 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
//                 Resources
//               </h4>
//               <ul className="space-y-3">
//                 {resources.map((item) => (
//                   <li
//                     key={item}
//                     className="text-zinc-400 text-sm hover:text-white cursor-pointer transition-colors"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact */}
//             <div>
//               <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
//                 Get in Touch
//               </h4>
//               <a
//                 href="mailto:info.zodex@gmail.com"
//                 className="text-zinc-300 text-sm flex gap-2 items-center hover:text-orange-500 transition-colors"
//               >
//                 <Mail size={14} />
//                 info.zodex@gmail.com
//               </a>
//               <p className="text-zinc-300 text-sm mt-3">
//                 Jaipur, India 🇮🇳
//               </p>
//               <div className="mt-5">
//                 <div className="inline-block p-px rounded-full bg-gradient-to-r from-orange-500 to-violet-500">
//                   <div className="px-4 py-1 rounded-full bg-[#050505] text-[10px] text-white font-[family-name:var(--font-mono)] uppercase tracking-wider">
//                     We Are Hiring
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom */}
//         <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-[family-name:var(--font-mono)]">
//             © {new Date().getFullYear()} Zodex Digital Solutions. All rights
//             reserved.
//           </p>
//           <div className="flex items-center gap-6">
//             <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-400 cursor-pointer transition-colors">
//               Terms
//             </span>
//             <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-400 cursor-pointer transition-colors">
//               Privacy
//             </span>
//             {/* Back to top */}
//             <button
//               onClick={scrollTop}
//               className="w-8 h-8 rounded-full border border-white/[0.15] flex items-center justify-center text-zinc-300 hover:text-orange-500 hover:border-orange-500/30 transition-all cursor-pointer"
//             >
//               <ArrowUpRight size={14} className="-rotate-45" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
// import ZodexViewer from "./ZodexViewer";

const socials = [
  { Icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { Icon: FaGithub, link: "https://github.com/zodex-solutions", label: "GitHub" },
  { Icon: FaWhatsapp, link: "https://wa.me/919509961818", label: "WhatsApp" },
];

const quickLinks = ["Services", "Products", "Portfolio", "Case Studies"];
const resources = ["Our Process", "Documentation", "Brand Assets", "Privacy"];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-8 -mt-8  bg-gray-200 z-20 rounded-t-[2rem]">
          {/* <ZodexViewer /> */}

      <div className="relative px-6 md:px-16">
        {/* Main Card */}  

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* CTA Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8  pb-13 border-b border-white/[0.06]">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl  font-semibold text-zinc-800 leading-tight">
                Ready to Build Your{" "}
                <span className="text-orange-500 italic">Digital Future?</span>
              </h2>
              <p className="text-zinc-600 mt-4 text-sm font-light leading-relaxed">
                From concept to deployment — let&apos;s turn your vision into a
                scalable, production-grade digital product.
              </p>
            </div>
            <img
              src="/logo1.png"
              className=" text-center  md:mr-20"
              alt="Zodex"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <img src="/logo.png" className="h-12 mb-5 grayscale brightness-0" alt="Zodex" />
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                Crafting modern digital experiences through AI, scalable SaaS &
                cutting-edge design.
              </p>
              <div className="flex gap-3 mt-6">
                {socials.map(({ Icon, link, label }) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-xl border border-zinc-700 bg-white/[0.04] flex items-center justify-center text-zinc-800 hover:text-orange-500 hover:border-orange-500/70 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-zinc-800 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li
                    key={item}
                    className="text-zinc-600 text-sm font-light hover:text-orange-500 cursor-pointer transition-colors flex items-center group gap-0"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-zinc-800 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li
                    key={item}
                    className="text-zinc-600 font-light text-sm hover:text-orange-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-zinc-800 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Get in Touch
              </h4>
              <a
                href="mailto:info.zodex@gmail.com"
                className="text-zinc-600 font-light text-sm flex gap-2 items-center hover:text-orange-500 transition-colors"
              >
                <Mail size={14} />
                info.zodex@gmail.com
              </a>
              <p className="text-zinc-600 font-light text-sm mt-3">
                Jaipur, India 🇮🇳
              </p>
              <div className="mt-5">
                <div className="inline-block p-px rounded-full bg-gradient-to-r from-orange-500 to-violet-500">
                  <div className="px-4 py-1 rounded-full bg-[#050505] text-[10px] text-white  uppercase tracking-wider">
                    We Are Hiring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col border-t border-zinc-300 pt-6 md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-[family-name:var(--font-mono)">
            © {new Date().getFullYear()} Zodex Digital Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 hover:text-orange-500 cursor-pointer transition-colors">
              Terms
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 hover:text-orange-500 cursor-pointer transition-colors">
              Privacy
            </span>
            {/* Back to top */}
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-full border border-zinc-700 /[0.15] flex items-center justify-center text-zinc-700 hover:text-orange-500 hover:border-orange-500 /30 transition-all cursor-pointer"
            >
              <ArrowUpRight size={14} className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
