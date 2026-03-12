import Image from 'next/image'
import Link from 'next/link'
import { Building2, HardHat, Ruler } from 'lucide-react'
import { MotionDiv } from './MotionDiv'
import { services } from '@/lib/services-data'

const icons = [Building2, HardHat, Ruler]

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8 max-w-4xl">
              Construction Services{' '}
              <span className="font-semibold">Across Ethiopia</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed font-light max-w-3xl">
              Che Construction PLC covers the three service pillars that matter most for broad search
              visibility in this sector: building construction, road and infrastructure construction, and
              renovation and remodeling. Each service now has a dedicated landing page with crawlable
              project and location context.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = icons[index]

              return (
                <MotionDiv
                  key={service.slug}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.15 }}
                  className="group flex flex-col"
                >
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="relative w-full h-[250px] lg:h-[300px] overflow-hidden rounded-sm">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 text-white/30 text-6xl font-light leading-none select-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow pt-8 border-t border-gray-200 group-hover:border-gray-400 transition-colors duration-500">
                    <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 group-hover:text-gray-900 group-hover:border-gray-400 transition-all duration-500">
                      <Icon className="w-6 h-6" strokeWidth={1} />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                      <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                        {service.shortTitle}
                      </Link>
                    </h2>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-[1px] bg-gray-300"></div>
                      <span className="text-gray-400 text-xs uppercase tracking-[0.15em] font-medium">
                        {service.primaryCityLabel}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm font-light flex-grow mb-6">
                      {service.overview}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors"
                    >
                      View service page
                    </Link>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
