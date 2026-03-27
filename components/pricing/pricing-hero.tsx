import { Megaphone } from "lucide-react"

export function PricingHero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
          <Megaphone className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Trusted By Growing Brands & Businesses
</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Affordable Marketing Services
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Top 1% Creative Talent | 80% Cheaper than Agencies | Real People, Not AI
        </p>
      </div>
    </section>
  )
}
