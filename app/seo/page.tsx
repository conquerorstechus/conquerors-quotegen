import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import SeoHero from '@/components/seo/seo-hero'
import SeoServices from '@/components/seo/seo-services'
import SeoWhyUs from '@/components/seo/seo-why-us'
import SeoResults from '@/components/seo/seo-results'
import SeoPricing from '@/components/seo/seo-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import SeoTestimonials from '@/components/seo/seo-testimonials'
import SeoFinalCta from '@/components/seo/seo-final-cta'



export default function SeoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SeoHero />
      <SeoServices />
      <SeoWhyUs />
      <SeoResults />
      <SeoPricing />
      <AllServicesSection />
      <SeoTestimonials />
      <SeoFinalCta />
      <Footer />
    </main>
  )
}
