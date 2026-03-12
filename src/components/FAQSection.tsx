type FaqItem = {
  question: string
  answer: string
}

export default function FAQSection({
  title,
  intro,
  items,
}: {
  title: string
  intro: string
  items: readonly FaqItem[]
}) {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{intro}</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-sm border border-gray-200 bg-surface px-6 py-5 open:border-primary/30"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-gray-900">
                {item.question}
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
