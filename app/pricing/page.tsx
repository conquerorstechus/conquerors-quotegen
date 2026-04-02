import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { DynamicPricingSection } from "@/components/pricing/dynamic-pricing-section"
import { ServiceCardsGrid } from "@/components/pricing/service-cards-grid"
import { DYNAMIC_PRICING_TAB_ORDER, type DynamicPricingTabId } from "@/components/pricing/dynamic-pricing-data"

// In Next.js 15+, searchParams is a Promise in Server Components
export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const tabParamRaw = params?.tab
  const tabParam = Array.isArray(tabParamRaw) ? tabParamRaw[0] : tabParamRaw
  const normalizedTab = typeof tabParam === "string" ? tabParam.trim().toLowerCase() : ""
  const defaultTabId = (DYNAMIC_PRICING_TAB_ORDER as readonly string[]).includes(normalizedTab)
    ? (normalizedTab as DynamicPricingTabId)
    : "posts"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <PricingHero />
        <DynamicPricingSection defaultTabId={defaultTabId} />
        <ServiceCardsGrid mode="all" />
      </div>
      <Footer />
    </main>
  )
}
