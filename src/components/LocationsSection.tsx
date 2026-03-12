import Link from "next/link"
import { siteConfig } from "@/lib/site-data"

export default function LocationsSection() {
  return (
    <section className="py-24 bg-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Areas Served</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
            Construction Coverage Across Ethiopia
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Che Construction PLC is based in Addis Ababa and highlights project delivery across several major
            Ethiopian markets. These city pages give clients a clearer sense of where the company works and
            how its services align with local project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {siteConfig.serviceAreas.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-sm border border-gray-200 bg-white p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <p className="text-xl font-semibold text-gray-900 mb-3">{location.name}</p>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">{location.summary}</p>
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">
                View city page
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
