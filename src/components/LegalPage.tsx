import Breadcrumbs from '@/components/Breadcrumbs'

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  effectiveDate: string
  intro: string
  sections: LegalSection[]
}

export default function LegalPage({ eyebrow, title, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: title }]} />
          <div className="max-w-4xl mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">{title}</h1>
            <p className="text-sm text-gray-500 mb-6">Effective date: {effectiveDate}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                {index + 1}. {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
