import Image from 'next/image'
import { MotionDiv } from './MotionDiv'
import { projects } from '@/lib/projects-data'

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
      <section className="pt-40 pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gray-400"></div>
              <span className="text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.1] mb-8">
              Construction Projects{' '}
              <span className="font-semibold">Across Ethiopia</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              This portfolio highlights the range of work Che Construction PLC undertakes across Ethiopia,
              from commercial and residential buildings to infrastructure and renovation projects in key
              regional markets.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {projects.map((project, index) => {
              const largeCard = index % 2 === 0
              const cardClassName = largeCard
                ? 'md:col-span-8 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100'
                : 'md:col-span-4 relative h-[500px] lg:h-[600px] group overflow-hidden bg-gray-100'
              const titleClassName = largeCard
                ? 'text-white text-3xl lg:text-4xl font-semibold tracking-wide mb-2'
                : 'text-white text-2xl font-semibold tracking-wide leading-tight mb-1'
              const copyClassName = largeCard
                ? 'text-gray-300 text-sm leading-relaxed max-w-lg'
                : 'text-gray-300 text-xs leading-relaxed'
              const categoryClassName = largeCard
                ? 'text-gray-300 font-medium tracking-[0.2em] uppercase text-xs mb-3 block'
                : 'text-gray-300 font-medium tracking-[0.2em] uppercase text-[10px] mb-3 block'
              const cityClassName = largeCard
                ? 'text-gray-400 text-xs uppercase tracking-[0.15em] mb-3'
                : 'text-gray-400 text-[10px] uppercase tracking-[0.15em] mb-2'

              return (
                <MotionDiv key={project.slug} variants={itemVariants} className={cardClassName}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className={largeCard ? 'absolute bottom-12 left-10 right-10' : 'absolute bottom-10 left-8 right-8'}>
                    <span className={categoryClassName}>{project.category}</span>
                    <h2 className={titleClassName}>{project.title}</h2>
                    <p className={cityClassName}>{project.city}</p>
                    <p className={copyClassName}>{project.description}</p>
                  </div>
                </MotionDiv>
              )
            })}
          </MotionDiv>
        </div>
      </section>
    </>
  )
}
