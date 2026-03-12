import Image from 'next/image'
import { Building2, HardHat, Ruler } from 'lucide-react'
import { MotionDiv } from './MotionDiv'
const services = [
  {
    icon: Building2,
    title: 'Building Construction',
    description:
      'Che Construction PLC delivers world-class commercial buildings, office towers, and residential complexes across Addis Ababa and the wider Ethiopian market. Our teams bring precision engineering to every project — from high-rise office developments in the capital to institutional and industrial facilities across the country. We manage every phase of the build cycle, coordinating structural, MEP, and finishing works to meet strict timelines and budget targets. Each project is executed to Ethiopian building codes and international quality benchmarks, ensuring structures that serve communities for generations.',
    number: '01',
    image: '/images/project-1.jpg',
    imageAlt: 'Commercial building construction in Addis Ababa, Ethiopia',
    cities: 'Addis Ababa',
  },
  {
    icon: HardHat,
    title: 'Road & Infrastructure',
    description:
      'We build the connective tissue of modern Ethiopia — road networks, bridges, culverts, and critical civil infrastructure that links cities and unlocks economic potential. Che Construction has delivered road and infrastructure projects in Hawassa, Bahir Dar, and across regional corridors, working alongside government agencies and private developers. Our civil engineering teams handle earthworks, drainage, pavement, and structural elements with rigorous quality controls. From urban arterials to rural access roads, our infrastructure projects improve mobility and support long-term national development goals.',
    number: '02',
    image: '/images/project-2.jpg',
    imageAlt: 'Road and infrastructure construction connecting Hawassa and Bahir Dar, Ethiopia',
    cities: 'Hawassa, Bahir Dar',
  },
  {
    icon: Ruler,
    title: 'Renovation & Remodeling',
    description:
      'Che Construction transforms aging and underperforming structures into modern, functional spaces throughout Addis Ababa and Dire Dawa. Our renovation teams assess existing buildings, identify structural and aesthetic improvements, and execute comprehensive remodeling works — interior fit-outs, facade upgrades, structural reinforcement, and MEP modernization. We work within occupied buildings and tight urban sites without compromising quality or safety. Whether revitalizing a heritage building in the Piazza district or upgrading commercial premises in Dire Dawa, we deliver renovations that meet current Ethiopian standards and client expectations.',
    number: '03',
    image: '/images/company-values.jpg',
    imageAlt: 'Building renovation and remodeling in Addis Ababa and Dire Dawa, Ethiopia',
    cities: 'Addis Ababa, Dire Dawa',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 bg-[#060b11] border-b border-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-900/[0.2] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-500"></div>
              <span className="text-gray-400 font-medium uppercase tracking-[0.2em] text-xs">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8 max-w-3xl">
              Construction Services{' '}
              <span className="font-semibold">in Ethiopia</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed font-light max-w-2xl">
              Che Construction PLC delivers building construction, road infrastructure, and renovation services
              across Ethiopia. Based in Addis Ababa, our experienced teams execute projects to the highest
              standards — on time, on budget, and built to last.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionDiv
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.15 }}
                className="group flex flex-col"
              >
                {/* Card Image */}
                <div className="relative w-full h-[250px] lg:h-[300px] overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Service Number Overlay */}
                  <div className="absolute top-4 right-4 text-white/30 text-6xl font-light leading-none select-none">
                    {service.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow pt-8 border-t border-gray-200 group-hover:border-gray-400 transition-colors duration-500">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 group-hover:text-gray-900 group-hover:border-gray-400 transition-all duration-500">
                    <service.icon className="w-6 h-6" strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {service.title}
                  </h2>

                  {/* Cities tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-[1px] bg-gray-300"></div>
                    <span className="text-gray-400 text-xs uppercase tracking-[0.15em] font-medium">
                      {service.cities}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm font-light flex-grow">
                    {service.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
