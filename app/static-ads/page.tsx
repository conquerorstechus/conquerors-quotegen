import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StaticAdsHero } from '@/components/static-ads/static-ads-hero'
import { ServiceTabs } from '@/components/pricing/service-tabs'
import { StaticAdsConfigurator } from '@/components/static-ads/static-ads-configurator'
import { StaticAdsFeatures } from '@/components/static-ads/static-ads-features'
import { StaticAdsPortfolio } from '@/components/static-ads/static-ads-portfolio'
import { StaticAdsStats } from '@/components/static-ads/static-ads-stats'
import { StaticAdsPricing } from '@/components/static-ads/static-ads-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { StaticAdsTestimonials } from '@/components/static-ads/static-ads-testimonials'
import { StaticAdsCta } from '@/components/static-ads/static-ads-cta'

export const metadata = {
  title: 'High-Performance Static Ads from $99/mo | Conquerors',
  description: 'Professional static ad creation with research, copywriting, and design included. High-converting ads for all platforms.',
}

export default function StaticAdsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <StaticAdsHero />
      <ServiceTabs />
      <StaticAdsConfigurator />
      <StaticAdsFeatures />
      <StaticAdsPortfolio />
      <StaticAdsStats />
      <StaticAdsPricing />
      <AllServicesSection />
      <StaticAdsTestimonials />
      <StaticAdsCta />
      <Footer />
    </main>
  )
}
