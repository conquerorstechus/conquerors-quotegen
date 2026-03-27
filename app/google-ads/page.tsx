import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GoogleAdsHero } from '@/components/google-ads/google-ads-hero'
import { GoogleAdsServices } from '@/components/google-ads/google-ads-services'
import { GoogleAdsResults } from '@/components/google-ads/google-ads-results'
import { GoogleAdsPricing } from '@/components/google-ads/google-ads-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { GoogleAdsTestimonials } from '@/components/google-ads/google-ads-testimonials'
import { GoogleAdsCta } from '@/components/google-ads/google-ads-cta'

export const metadata = {
  title: 'Google Ads Management from $499/mo | Conquerors',
  description: 'Professional Google Ads management to boost leads and sales. Expert optimization, transparent reporting, and proven ROI. Certified Google Partners.',
}

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <GoogleAdsHero />
      <GoogleAdsServices />
      <GoogleAdsResults />
      <GoogleAdsPricing />
      <AllServicesSection />
      <GoogleAdsTestimonials />
      <GoogleAdsCta />
      <Footer />
    </main>
  )
}
