import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#060b11] py-28 text-white">
      <div className="absolute inset-0 bg-grid-slate-900/[0.2] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-primary-light/10 blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          This construction route does not exist.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          The page may have moved, the link may be outdated, or the address may be incorrect. Use one of the
          routes below to continue exploring Che Construction PLC.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 font-semibold text-[#04080D] transition-colors hover:bg-white"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Contact the Team
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link
            href="/services"
            className="rounded-sm border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/50 hover:bg-white/10"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.15em] text-accent">Services</p>
            <h2 className="text-xl font-semibold text-white">Construction Services</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Explore building construction, road infrastructure, and renovation services.
            </p>
          </Link>

          <Link
            href="/projects"
            className="rounded-sm border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/50 hover:bg-white/10"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.15em] text-accent">Projects</p>
            <h2 className="text-xl font-semibold text-white">Featured Works</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Review commercial, residential, infrastructure, and renovation project examples.
            </p>
          </Link>

          <Link
            href="/locations"
            className="rounded-sm border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/50 hover:bg-white/10"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.15em] text-accent">Locations</p>
            <h2 className="text-xl font-semibold text-white">Areas Served</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Find city pages for Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
