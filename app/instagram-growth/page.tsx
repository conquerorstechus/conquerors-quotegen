import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InstagramGrowthHero } from '@/components/instagram-growth/instagram-growth-hero'
import { InstagramGrowthServices } from '@/components/instagram-growth/instagram-growth-services'
import { InstagramGrowthStats } from '@/components/instagram-growth/instagram-growth-stats'
import { InstagramGrowthPricing } from '@/components/instagram-growth/instagram-growth-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { InstagramGrowthTestimonials } from '@/components/instagram-growth/instagram-growth-testimonials'
import { InstagramGrowthCta } from '@/components/instagram-growth/instagram-growth-cta'

export const metadata = {
  title: 'Instagram Growth Service - Grow Real Followers | Conquerors',
  description: 'Get 100-400+ real, targeted Instagram followers per month with our authentic growth strategies. No bots, 100% compliant with Instagram terms.',
}

export default function InstagramGrowthPage() {
  return (
    <>
      <Header />
      <main>
        <InstagramGrowthHero />
        <InstagramGrowthServices />
        <InstagramGrowthStats />
        <InstagramGrowthPricing />
        <AllServicesSection />
        <InstagramGrowthTestimonials />
        <InstagramGrowthCta />
      </main>
      <Footer />
    </>
  )
}
