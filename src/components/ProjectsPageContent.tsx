import Image from 'next/image'
import { MotionDiv } from './MotionDiv'
import FooterCTA from './FooterCTA'

const projects = [
  {
    image: '/images/project-1.jpg',
    title: 'Bole District Office Tower',
    category: 'Commercial High-Rise',
    city: 'Addis Ababa',
    description:
      'A 14-storey commercial office tower in the Bole business district delivering Grade A office space.',
    alt: 'Bole District Office Tower construction project in Addis Ababa by Che Construction',
  },
  {
    image: '/images/project-2.jpg',
    title: 'Hawassa Industrial Park',
    category: 'Industrial Complex',
    city: 'Hawassa',
    description:
      "Large-scale industrial park development supporting Ethiopia's manufacturing growth in the SNNPR region.",
    alt: 'Hawassa Industrial Park construction in Ethiopia by Che Construction PLC',
  },
  {
    image: '/images/project-3.jpg',
    title: 'Meskel Square Commercial Complex',
    category: 'Commercial',
    city: 'Addis Ababa',
    description:
      'Mixed-use commercial complex near Meskel Square combining retail, office, and hospitality spaces.',
    alt: 'Meskel Square Commercial Complex under construction in Addis Ababa by Che Construction',
  },
  {
    image: '/images/project-4.jpg',
    title: 'CMC Residential Development',
    category: 'Residential',
    city: 'Addis Ababa',
    description:
      "Premium residential towers in the CMC area offering modern living for Addis Ababa's growing professional class.",
    alt: 'CMC Residential Development project in Addis Ababa, Ethiopia by Che Construction PLC',
  },
  {
    image: '/images/project-5.jpg',
    title: 'Bahir Dar Ring Road',
    category: 'Road & Infrastructure',
    city: 'Bahir Dar',
    description:
      "Major ring road construction connecting Bahir Dar's expanding districts with modern asphalt highway infrastructure.",
    alt: 'Bahir Dar Ring Road infrastructure construction project in Ethiopia by Che Construction',
  },
  {
    image: '/images/project-6.jpg',
    title: 'Dire Dawa Heritage Renovation',
    category: 'Renovation',
    city: 'Dire Dawa',
    description:
      "Comprehensive renovation of a heritage commercial building, preserving Dire Dawa's architectural character while modernizing interiors.",
    alt: 'Dire Dawa Heritage Renovation project in Ethiopia by Che Construction PLC',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function ProjectsPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-400"></div>
              <span className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.1] mb-8">
              Our Work Across{' '}
              <span className="font-semibold">Ethiopia</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              From commercial high-rises in Addis Ababa to road infrastructure in Bahir Dar,
              we deliver construction excellence across Ethiopia&rsquo;s cities and regions.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Row 1: Large (8) + Small (4) */}
            <MotionDiv
              variants={itemVariants}
              className="md:col-span-8 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <svg
                  className="w-5 h-5 transform -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                  {projects[0].category}
                </span>
                <h2 className="text-white text-3xl lg:text-4xl font-semibold tracking-wide mb-2">
                  {projects[0].title}
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.15em] mb-3">
                  {projects[0].city}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                  {projects[0].description}
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={itemVariants}
              className="md:col-span-4 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[1].image}
                alt={projects[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-8 right-8">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block">
                  {projects[1].category}
                </span>
                <h2 className="text-white text-2xl font-semibold tracking-wide leading-tight mb-1">
                  {projects[1].title}
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.15em] mb-2">
                  {projects[1].city}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {projects[1].description}
                </p>
              </div>
            </MotionDiv>

            {/* Row 2: Small (4) + Large (8) */}
            <MotionDiv
              variants={itemVariants}
              className="md:col-span-4 relative h-[450px] lg:h-[500px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[2].image}
                alt={projects[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-8 right-8">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block">
                  {projects[2].category}
                </span>
                <h2 className="text-white text-2xl font-semibold tracking-wide leading-tight mb-1">
                  {projects[2].title}
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.15em] mb-2">
                  {projects[2].city}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {projects[2].description}
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={itemVariants}
              className="md:col-span-8 relative h-[450px] lg:h-[500px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[3].image}
                alt={projects[3].alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <svg
                  className="w-5 h-5 transform -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                  {projects[3].category}
                </span>
                <h2 className="text-white text-3xl lg:text-4xl font-semibold tracking-wide mb-2">
                  {projects[3].title}
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.15em] mb-3">
                  {projects[3].city}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                  {projects[3].description}
                </p>
              </div>
            </MotionDiv>

            {/* Row 3: Large (8) + Small (4) */}
            <MotionDiv
              variants={itemVariants}
              className="md:col-span-8 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[4].image}
                alt={projects[4].alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <svg
                  className="w-5 h-5 transform -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
                  {projects[4].category}
                </span>
                <h2 className="text-white text-3xl lg:text-4xl font-semibold tracking-wide mb-2">
                  {projects[4].title}
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.15em] mb-3">
                  {projects[4].city}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                  {projects[4].description}
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={itemVariants}
              className="md:col-span-4 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100"
            >
              <Image
                src={projects[5].image}
                alt={projects[5].alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-8 right-8">
                <span className="text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block">
                  {projects[5].category}
                </span>
                <h2 className="text-white text-2xl font-semibold tracking-wide leading-tight mb-1">
                  {projects[5].title}
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.15em] mb-2">
                  {projects[5].city}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {projects[5].description}
                </p>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-[#060b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-600"></div>
              <span className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">
                Work With Us
              </span>
              <div className="w-16 h-[1px] bg-gray-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Let&rsquo;s Build Your{' '}
              <span className="font-semibold">Next Project</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Ready to start construction across Ethiopia? Contact our team to discuss your
              project requirements.
            </p>
            <FooterCTA />
          </MotionDiv>
        </div>
      </section>
    </>
  )
}
