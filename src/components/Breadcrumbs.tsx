import Link from "next/link"

type BreadcrumbItem = {
  href?: string
  label: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-3">
            {index > 0 ? <span className="text-gray-300">/</span> : null}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-900 font-medium" : undefined}>{item.label}</span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
