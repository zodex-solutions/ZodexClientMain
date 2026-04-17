"use client";
import React, { useEffect, useState } from "react";
import { HiX, HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import UpperBar from "./ZUpperBar";

type Props = {
  showHeader: boolean;
};

const CtaButton = ({ glass }: { glass: boolean }) => (
  <a
    href="https://wa.me/919509961818"
    target="_blank"
    rel="noopener noreferrer"
    className={`
      ${glass ? "bg-zinc-900 text-zinc-200" : "bg-zinc-100 text-zinc-800"}
      flex border-zinc-500 border-[.1px] cursor-pointer gap-2 items-center font-medium px-5 py-2.5 rounded-full text-[13px] transition-all duration-300 hover:scale-105
    `}
  >
    <FaWhatsapp className="text-green-400" size={18} />
    Let&apos;s Talk!
  </a>
);

export default function ZHeader() {
  const [showGlass, setShowGlass] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");

  const phoneNumber = "919509961818";

  const menuData = {
    menu: ["Home", "About Us", "Services", "Products", "Contact"],
    services: ["Web Development", "Mobile Apps", "AI & Machine Learning", "UI/UX Design", "Cloud Solutions"],
    products: ["Enterprise ERP", "Inventory Sync", "HRMS Portal", "Customer CRM"],
    industries: ["FinTech", "E-commerce", "Healthcare", "EdTech", "Real Estate"],
    quickLinks: ["Case Studies", "Our Process", "Career", "Book a Demo"]
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setShowGlass(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <UpperBar />
      
      {/* --- STATIC/STICKY NAV BAR --- */}
      <header className={`fixed top-0 left-0 w-full z-[60]`}>
        <div className={`max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${showGlass ? 'bg-zinc-100 py-2.5' : 'bg-transparent py-10' }`}>
           
          <div className="flex items-center gap-8 z-10">
            <a href="#innovation"  className={`${showGlass ? 'text-zinc-900 font-medium' : 'text-zinc-100 font-normal'} cursor-pointer text-[13px] uppercase tracking-tight hover:text-orange-500 transition-colors`}>Innovation</a>
            <a href="#portfolio"  className={`${showGlass ? 'text-zinc-900 font-medium' : 'text-zinc-100 font-normal'} cursor-pointer text-[13px] uppercase tracking-tight hover:text-orange-500 transition-colors`}>Portfolio</a>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/logo.png" className={`h-7 md:h-9 ${showGlass ? 'grayscale brightness-0' : ''}`} alt="LOGO" />
          </div>

          <div className="flex items-center gap-4  z-10">
              <CtaButton glass={showGlass} />
              <button onClick={() => setIsMenuOpen(true)} className={`w-10 h-10 flex flex-col items-center justify-center gap-1 ${!showGlass ? 'bg-zinc-100 hover:bg-zinc-200' : 'bg-zinc-900 '} cursor-pointer rounded-full  transition-all`}>
                <span className={`w-5 h-[1.5px] ${!showGlass ? 'bg-zinc-900' : 'bg-zinc-300'}`}></span>
                <span className={`w-5 h-[1.5px] ${!showGlass ? 'bg-zinc-900' : 'bg-zinc-300'}`}></span>
              </button>
          </div>
        </div>

        {/* --- INVERTED CURVES --- */}
        <div className={`transition-all duration-300 ease-in-out absolute left-0 top-full w-8 h-8 pointer-events-none ${!showGlass ? "-translate-y-50 opacity-0" : "translate-y-0 opacity-100"}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-100"><path d="M 100 0 L 0 0 L 0 100 A 100 100 0 0 1 100 0 Z" /></svg>
        </div>
        <div className={`transition-all duration-300 ease-in-out absolute -right-[.5px] top-full w-8 h-8 pointer-events-none ${!showGlass ? "-translate-y-50 opacity-0" : "translate-y-0 opacity-100"}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-100"><path d="M 0 0 L 100 0 L 100 100 A 100 100 0 0 0 0 0 Z" /></svg>
        </div>
      </header>

      {/* --- MEGA MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-60 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        
        
        {/* Main Menu Box */}
        <div className="relative bg-zinc-100  rounded-b-[2rem] shadow-2xl z-10 border-b border-zinc-200 overflow-hidden">
            {/* Menu Internal Header */}
          <div className="bg-zinc-100 px5 md:px-12 py-3 !z-30 flex justify-between items-center border-b border-zinc-100">
              <img src="/logo.png" className={`h-7 md:h-9 grayscale brightness-0`} alt="LOGO" />

            

            <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 bg-zinc-800 cursor-pointer rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <HiX size={20} />
            </button>
          </div>

        <div className="bg-zinc-200 mx-4 mb-4 rounded-[2rem]">  {/* Grid Content */}
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-5 md:px-8 py-8">
            
            {/* Column 1: Menu */}
            <div className="md:col-span-3 space-y-3 ">
              <h4 className="text-[10px] font-semibold underline decoration-1 underline-offset-[5px] uppercase tracking-[0.2em] text-zinc-900">Menu</h4>
              {menuData.menu.map(item => (
                <div key={item} className="group flex items-center gap-2 cursor-pointer transition-all hover:translate-x-1">
                  <div className="h-[1.5px] w-0 bg-orange-500 transition-all group-hover:w-3"></div>
                  <h3 className="text-sm font-light text-zinc-700 group-hover:text-orange-500">{item}</h3>
                </div>
              ))}
            </div>
            {/* Column 1: Services */}
            <div className="md:col-span-3 space-y-3 ">
              <h4 className="text-[10px] font-semibold underline decoration-1 underline-offset-[5px] uppercase tracking-[0.2em] text-zinc-900">Our Expertise</h4>
              {menuData.services.map(item => (
                <div key={item} className="group flex items-center gap-2 cursor-pointer transition-all hover:translate-x-1">
                  <div className="h-[1.5px] w-0 bg-orange-500 transition-all group-hover:w-3"></div>
                  <h3 className="text-sm font-light text-zinc-700 group-hover:text-orange-500">{item}</h3>
                </div>
              ))}
            </div>

            {/* Column 2: Products */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-semibold underline decoration-1 underline-offset-[5px] uppercase tracking-[0.2em] text-zinc-900">Built by Us</h4>
              <div className="flex flex-wrap gap-2">
                {menuData.products.map(item => (
                  <span key={item} className="px-4 py-2 rounded-full bg-zinc-300 text-zinc-700 text-[12px] font-light border border-zinc-200 hover:border-orange-500 hover:shadow-sm transition-all cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3: Industries */}
            {/* <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-semibold underline decoration-1 underline-offset-[5px] uppercase tracking-[0.2em] text-zinc-900">Sectors</h4>
              <ul className="space-y-3">
                {menuData.industries.map(item => (
                  <li key={item} className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div> */}

            {/* Column 4: WhatsApp Widget */}
            <div className="md:col-span-4 bg-zinc-900 rounded-[2rem] p-5 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Project Inquiry</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Instant Connect</p>
                </div>
              </div>
              
              <textarea 
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                placeholder="What project do you have in mind?"
                className="w-full bg-zinc-800 border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-orange-500 min-h-[90px] mb-2 outline-none placeholder:text-zinc-600 resize-none"
              />
              
              <button 
                onClick={handleWhatsAppSend}
                className="w-full bg-white text-zinc-900 py-3.5 rounded-2xl font-light text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all group"
              >
                Send Message <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              
            </div>
          </div>

    
        </div>
        {/* Backdrop */}
        </div>
        <div 
          className="absolute inset-0 bg-blac/40 backdrop-blur-[12px] !z-0" 
          onClick={() => setIsMenuOpen(false)} 
        />

      </div>
    </>
  );
}