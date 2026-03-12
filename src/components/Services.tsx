import Link from 'next/link';
import { Building2, Ruler, HardHat } from 'lucide-react';
import { MotionDiv } from './MotionDiv';
import { services } from '@/lib/services-data';

const icons = [Building2, HardHat, Ruler];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#060b11] border-t-[1px] border-gray-800 overflow-hidden">
      {/* Heavy grid texture */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.2] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      {/* Gradient glow to add depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-500"></div>
              <span className="text-gray-400 font-medium uppercase tracking-[0.2em] text-xs">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              What We <br className="hidden md:block"/><span className="font-semibold">Build</span>
            </h2>
          </div>
          <div className="max-w-md border-l border-gray-800 pl-8 pb-2 flex flex-col gap-6">
            <p className="text-gray-400 text-base leading-relaxed font-light">
              From building construction to road infrastructure and renovation, our expertise spans the full spectrum of construction challenges across Addis Ababa and throughout Ethiopia.
            </p>
            <Link href="/services" className="text-gray-300 border-b border-gray-500 pb-1 text-xs font-semibold uppercase tracking-widest hover:text-white hover:border-white transition-all flex items-center gap-3 group w-max">
              View All Services
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
            <MotionDiv
              variants={itemVariants}
              key={service.slug}
              className="group relative"
            >
              <div className="text-gray-800/20 text-[100px] leading-none font-light absolute -top-16 -left-6 z-0 group-hover:text-gray-700/30 transition-colors duration-700 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 border-t border-gray-800 pt-8 group-hover:border-gray-500 transition-colors duration-700 h-full flex flex-col">
                <div className="mb-10 w-16 h-16 flex items-center justify-center rounded-full border border-gray-800/60 text-gray-500 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-700 bg-gray-900/30">
                  <Icon className="w-7 h-7" strokeWidth={1} />
                </div>

                <h3 className="text-xl font-medium text-white mb-4 tracking-wide leading-tight">
                  {service.shortTitle}
                </h3>

                <p className="text-gray-500 leading-relaxed flex-grow text-sm mb-8 font-light">
                  {service.summary}
                </p>

                <Link href={`/services/${service.slug}`} className="mt-auto inline-flex items-center text-gray-400 font-medium uppercase text-xs tracking-widest group/btn w-max hover:text-white transition-colors duration-500">
                  <span className="mr-4">Explore Scope</span>
                  <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover/btn:border-gray-500 group-hover/btn:text-white transition-all duration-500">
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
