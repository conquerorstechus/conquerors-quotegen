import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { VideoAdsHero } from '@/components/video-ads/video-ads-hero'
import { VideoAdsServices } from '@/components/video-ads/video-ads-services'
import { VideoAdsResults } from '@/components/video-ads/video-ads-results'
import { VideoAdsPricing } from '@/components/video-ads/video-ads-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { VideoAdsTestimonials } from '@/components/video-ads/video-ads-testimonials'
import { VideoAdsCta } from '@/components/video-ads/video-ads-cta'

export const metadata = {
  title: 'Video Ads Production Services | Built to Sell and Scale',
  description: 'Professional video ad creation and production. Script writing, filming, editing, and optimization for YouTube, TikTok, Instagram, and more.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <VideoAdsHero />
        <VideoAdsServices />
        <VideoAdsResults />
        <VideoAdsPricing />
        <AllServicesSection />
        <VideoAdsTestimonials />
        <VideoAdsCta />
      </main>
      <Footer />
    </>
  )
}
