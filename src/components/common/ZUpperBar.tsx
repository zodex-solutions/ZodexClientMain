"use client";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function ZUpperBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="bg-gray-100 ackdrop-blur-2xl border-b border-white/[0.05]">
        <div className="px-6 md:px-16 flex max-w-[1400px] mx-auto w-full justify-between py-1 text-[12px]">
          <span className="font-normal text-[11px]  text-zinc-700 tracking-[0.1em] uppercase">
            IT Services • SaaS • AI Solutions
          </span>
          <a
            href="mailto:info.zodex@gmail.com"
            className="font-normal text-zinc-700 flex gap-2 items-center hover:text-orange-500 transition-colors duration-300"
          >
            <Mail size={14} />
            info.zodex@gmail.com
          </a>
        </div>
      </div>

      <span className="h-20 w-10  bg-white absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full blur-3xl opacity-20"></span>

 {/* --- LEFT INVERTED CURVE --- */}
    <div className={`  transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"} absolute left-0 top-full w-8 h-8 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-100">
        <path d="M 100 0 L 0 0 L 0 100 A 100 100 0 0 1 100 0 Z" />
      </svg>
    </div>

    {/* --- RIGHT INVERTED CURVE --- */}
      <div className={`  transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"} absolute  -right-[.5px] top-full w-8 h-8 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-100">
        <path d="M 0 0 L 100 0 L 100 100 A 100 100 0 0 0 0 0 Z" />
      </svg>
    </div>
  
    </div>
  );
}
