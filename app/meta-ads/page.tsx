import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MetaAdsHero } from '@/components/meta-ads/meta-ads-hero'
import { MetaAdsServices } from '@/components/meta-ads/meta-ads-services'
import { MetaAdsResults } from '@/components/meta-ads/meta-ads-results'
import { MetaAdsPricing } from '@/components/meta-ads/meta-ads-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { MetaAdsTestimonials } from '@/components/meta-ads/meta-ads-testimonials'
import { MetaAdsCta } from '@/components/meta-ads/meta-ads-cta'

export const metadata = {
  title: 'Meta Ads Management Services from $499/mo | Conquerors',
  description: 'Expert Facebook & Instagram ads management. Expert strategy, A/B testing, and continuous optimization to maximize your ROI.',
}

export default function MetaAdsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MetaAdsHero />
        <MetaAdsServices />
        <MetaAdsResults />
        <MetaAdsPricing />
        <AllServicesSection />
        <MetaAdsTestimonials />
        <MetaAdsCta />
      </main>
      <Footer />
    </div>
  )
}
