import { ShieldCheck, Trophy, Target } from 'lucide-react';
import { MotionDiv } from './MotionDiv';
import Image from 'next/image';
import Link from 'next/link';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CompanyValues() {
  return (
    <section id="about" className="py-32 relative bg-white overflow-hidden">
      {/* Heavy textured background line */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8F9FA] border-l border-gray-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <MotionDiv variants={fadeUpVariant}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-[1px] bg-gray-400"></div>
                <span className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">Our Legacy</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.1] mb-8">
                Built on<br/>
                <span className="font-semibold text-primary">Ethiopian Ground</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Che Construction has been shaping the skylines of Addis Ababa and Ethiopian cities for over two decades. We build structures that serve communities and stand as lasting marks of quality, backed by an uncompromising commitment to structural integrity, delivery discipline, and long-term performance.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors">
                  View Company Profile
                </Link>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeUpVariant} className="grid grid-cols-2 gap-10 border-t border-gray-100 pt-10">
              <div>
                <p className="text-5xl font-light text-gray-900 mb-2 tracking-tight">25<span className="text-primary font-medium">+</span></p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-[0.15em]">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl font-light text-gray-900 mb-2 tracking-tight">3B<span className="text-primary font-medium">+</span></p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-[0.15em]">Project Value (USD)</p>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeUpVariant} className="bg-surface p-10 border-l border-primary shadow-sm">
              <p className="text-lg font-light leading-relaxed text-gray-700 italic">
                {'"Our promise is etched in every foundation we lay—delivering unmatched quality without compromise. We build for Ethiopia\'s future."'}
              </p>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:pl-10 mt-16 lg:mt-0"
          >
             {/* Brutalist image layout */}
             <div className="relative h-[600px] lg:h-[750px] w-full bg-gray-100 shadow-xl rounded-sm">
               <Image
                 src="/images/company-values.jpg"
                 alt="Construction workers on a building site in Ethiopia — Che Construction PLC"
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover grayscale-[20%] opacity-90 rounded-sm"
               />
               <div className="absolute inset-0 border border-white/20 pointer-events-none rounded-sm"></div>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="absolute -bottom-10 lg:-bottom-16 -left-6 lg:-left-16 bg-white/95 backdrop-blur-md p-8 lg:p-12 shadow-2xl border border-gray-100 w-[90%] md:w-[80%] rounded-sm"
               >
                 <h3 className="text-2xl font-light text-gray-900 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Core Standards</h3>
                 <ul className="space-y-6">
                   <li className="flex items-center gap-6 group">
                     <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                       <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium text-gray-800 tracking-wide text-sm lg:text-base">Absolute Safety</span>
                   </li>
                   <li className="flex items-center gap-6 group">
                     <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                       <Trophy className="w-5 h-5" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium text-gray-800 tracking-wide text-sm lg:text-base">Flawless Execution</span>
                   </li>
                   <li className="flex items-center gap-6 group">
                     <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                       <Target className="w-5 h-5" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium text-gray-800 tracking-wide text-sm lg:text-base">On-Time Delivery</span>
                   </li>
                 </ul>
               </MotionDiv>
             </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
}
