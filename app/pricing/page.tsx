import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { DynamicPricingSection } from "@/components/pricing/dynamic-pricing-section"
import { ServiceCardsGrid } from "@/components/pricing/service-cards-grid"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <PricingHero />
        <DynamicPricingSection />
        <ServiceCardsGrid mode="all" />
      </div>
      <Footer />
    </main>
  )
}
