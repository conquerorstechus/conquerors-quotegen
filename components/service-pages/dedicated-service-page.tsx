import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronRight } from "lucide-react"
import {
  type DedicatedServicePageContent,
  EXPLORE_SERVICE_LINKS,
} from "@/components/service-pages/dedicated-service-config"

type DedicatedServicePageProps = {
  content: DedicatedServicePageContent
}

export function DedicatedServicePage({ content }: DedicatedServicePageProps) {
  const checkoutHref = `/checkout?plan=${encodeURIComponent(content.pricing.planNameForCheckout)}&price=${content.pricing.checkoutPrice}`
  const exploreLinks = EXPLORE_SERVICE_LINKS.filter((l) => l.href !== content.path)
  const exploreByCategory = exploreLinks.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof exploreLinks>,
  )

  const exploreCategoryOrder = ["Ads", "SEO", "Videos", "Social Media Management"]
  const sortedExploreCategories = exploreCategoryOrder.filter((c) => exploreByCategory[c]?.length)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* 1. Hero */}
        <section className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
          <div className="max-w-4xl mx-auto text-center">
            {content.hero.badge ? (
              <p className="inline-block text-sm font-semibold text-[#1E5AA8] bg-blue-50 px-4 py-1.5 rounded-full mb-6">
                {content.hero.badge}
              </p>
            ) : null}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B2A4A] text-balance mb-6">
              {content.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto mb-10">
              {content.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[#1E5AA8] hover:bg-[#154080] text-white px-8 py-6 text-base rounded-lg" asChild>
                <Link href={checkoutHref}>
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-[#1E5AA8] text-[#1E5AA8] hover:bg-blue-50 px-8 py-6 text-base rounded-lg" asChild>
                <Link href="/pricing">View full pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. What is this service? */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-6">
              {content.whatIs.heading ?? "What is this service?"}
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">{content.whatIs.body}</p>
          </div>
        </section>

        {/* 3. How it works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4 text-center">
              {content.howItWorks.heading ?? "How it works"}
            </h2>
            <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12">
              A simple flow from kickoff to delivery—no jargon required.
            </p>
            <ol className="space-y-6">
              {content.howItWorks.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-blue-100 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E5AA8] text-white font-bold text-lg">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B2A4A] mb-2">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. What's included */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4 text-center">
              {content.included.heading ?? "What's included"}
            </h2>
            <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12">
              Deliverables based on our standard packages—adjust tiers anytime on the Pricing page.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {content.included.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#0B2A4A]">
                  <Check className="h-5 w-5 text-[#1E5AA8] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Examples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4 text-center">
              {content.examples.heading ?? "Examples & use cases"}
            </h2>
            <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12">
              Real-world ways teams use this service—not generic fluff.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {content.examples.cases.map((c) => (
                <div
                  key={c.title}
                  className="p-6 rounded-2xl bg-white border border-blue-100 hover:border-[#1E5AA8]/40 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#0B2A4A] mb-3">{c.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why we're different */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2A4A] mb-4 text-center">
              {content.whyDifferent.heading ?? "Why we're different"}
            </h2>
            <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12">
              Human-led work, fair pricing, and outcomes you can measure—not AI-only templates.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {content.whyDifferent.points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-3">{p.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Pricing preview / CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B2A4A] to-[#152d52] text-white">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Pricing preview</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{content.pricing.priceDisplay}</p>
            <p className="text-blue-100/90 leading-relaxed mb-8 max-w-xl mx-auto">{content.pricing.teaser}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-[#0B2A4A] hover:bg-blue-50 px-8 py-6 text-base" asChild>
                <Link href={checkoutHref}>
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base"
                asChild
              >
                <Link href="/pricing">Compare all plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. Explore other services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] mb-2 text-center">Explore other services</h2>
            <p className="text-center text-[#6B7280] mb-10 max-w-2xl mx-auto">
              Jump to another offering from the same menu you used to get here—mix and match at checkout.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sortedExploreCategories.map((category) => {
                const links = exploreByCategory[category]!
                return (
                  <div key={category}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1E5AA8] mb-3">{category}</p>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-blue-100 transition-all"
                          >
                            <span className="text-sm font-medium text-[#0B2A4A] group-hover:text-[#1E5AA8]">
                              {link.label}
                            </span>
                            <ChevronRight className="h-4 w-4 text-[#6B7280] group-hover:text-[#1E5AA8] shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
