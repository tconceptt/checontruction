"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-surface pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-gray-200">
      {/* Background Textures */}
      <div className="absolute inset-0 bg-concrete opacity-50"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]"></div>
      
      {/* Decorative Blueprint Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 clip-path-slant z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative"
          >
            {/* Accent mark */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1.5 bg-accent mb-8"
            ></motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              CONSTRUCTION EXCELLENCE <br className="hidden sm:block" />
              <span className="text-primary relative inline-block">ACROSS ETHIOPIA
                <svg className="absolute -bottom-2 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
              Che Construction PLC is positioned as a leading construction company in Ethiopia, delivering building construction, road infrastructure, and renovation work across Addis Ababa, Hawassa, Bahir Dar, Dire Dawa, and other Ethiopian markets.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              <Link 
                href="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded font-semibold hover:bg-primary-dark transition-all text-lg shadow-[0_4px_14px_0_rgba(30,58,95,0.39)] hover:shadow-[0_6px_20px_rgba(30,58,95,0.23)] hover:-translate-y-0.5"
              >
                Request Quote
              </Link>
              <Link href="/projects" className="bg-white text-primary border border-primary/20 px-8 py-3.5 rounded font-semibold hover:bg-gray-50 transition-all text-lg shadow-sm hover:shadow">
                Our Projects
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200/60"
            >
              <div>
                <p className="text-3xl font-bold text-gray-900">150+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">25<span className="text-primary">+</span></p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Experts</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-lg overflow-hidden shadow-2xl group"
          >
            {/* Architectural overlay frame */}
            <div className="absolute inset-0 border-[12px] border-white/10 z-20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent z-20 pointer-events-none"></div>
            
            <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
            <Image
              src="/images/hero-construction-addis-ababa.jpg"
              alt="Construction site in Addis Ababa, Ethiopia — Che Construction PLC"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover z-10 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for richness */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
