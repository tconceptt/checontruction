import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1541881451970-ba00978ce2ea?q=80&w=1968&auto=format&fit=crop",
    title: "Bole District Office Tower",
    category: "Commercial High-Rise",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Hawassa Industrial Park",
    category: "Industrial Complex",
  },
  {
    image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1974&auto=format&fit=crop",
    title: "Meskel Square Commercial Complex",
    category: "Commercial",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    title: "CMC Residential Development",
    category: "Residential",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-400"></div>
              <span className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.1]">
              Featured <br className="hidden md:block" /><span className="font-semibold">Works</span>
            </h2>
          </div>
          <button className="text-gray-900 border-b border-gray-900 pb-1 text-xs font-semibold uppercase tracking-widest hover:text-gray-500 hover:border-gray-500 transition-all flex items-center gap-3 group">
            View Full Portfolio
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Large Card */}
          <MotionDiv variants={itemVariants} className="md:col-span-8 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>

            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
              <svg className="w-5 h-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>

            <div className="absolute bottom-12 left-10 right-10">
              <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">{projects[0].category}</span>
              <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-wide">{projects[0].title}</h3>
            </div>
          </MotionDiv>

          {/* Small Card */}
          <MotionDiv variants={itemVariants} className="md:col-span-4 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100">
             <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
            <div className="absolute bottom-10 left-8 right-8">
              <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block">{projects[1].category}</span>
              <h3 className="text-white text-2xl font-semibold tracking-wide leading-tight">{projects[1].title}</h3>
            </div>
          </MotionDiv>

          {/* Small Card */}
          <MotionDiv variants={itemVariants} className="md:col-span-4 relative h-[450px] lg:h-[500px] group overflow-hidden bg-gray-100">
             <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
            <div className="absolute bottom-10 left-8 right-8">
              <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block">{projects[2].category}</span>
              <h3 className="text-white text-2xl font-semibold tracking-wide leading-tight">{projects[2].title}</h3>
            </div>
          </MotionDiv>

          {/* Large Card */}
          <MotionDiv variants={itemVariants} className="md:col-span-8 relative h-[450px] lg:h-[500px] group overflow-hidden bg-gray-100">
             <Image
              src={projects[3].image}
              alt={projects[3].title}
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>

            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
              <svg className="w-5 h-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>

            <div className="absolute bottom-12 left-10 right-10">
              <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">{projects[3].category}</span>
              <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-wide">{projects[3].title}</h3>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
