import { Check, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "$149/mo",
    bullets: ["2 SEO blog posts each month", "Keyword-informed outlines & drafts", "Meta title and description options"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$249/mo",
    bullets: ["4 SEO blog posts each month", "Editorial-calendar-friendly batches", "Internal linking recommendations"],
    highlighted: true,
  },
  {
    name: "Plus",
    price: "$349/mo",
    bullets: ["6 SEO blog posts each month", "Scaled topical coverage", "Priority briefing cadence"],
    highlighted: false,
  },
]

export default function SeoPricing() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">SEO Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 bg-card ${
                t.highlighted ? "border-primary/60 shadow-sm" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.highlighted ? (
                  <Star className="w-5 h-5 text-primary" />
                ) : (
                  <span className="w-5 h-5" />
                )}
              </div>

              <div className="text-3xl font-bold mb-4">{t.price}</div>
              <ul className="space-y-2 mb-6">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link href="/pricing">
                <Button className="w-full" variant={t.highlighted ? "default" : "secondary"}>
                  View Plans
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Need backlinks or full managed SEO instead? Backlinks start at 3/mo ($299) through 9/mo ($699), and managed SEO runs $549/mo on the main Pricing page.
        </p>
      </div>
    </section>
  )
}
