import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EmailDesignHero } from '@/components/email-design/email-design-hero'
import { EmailDesignFeatures } from '@/components/email-design/email-design-features'
import { EmailDesignPortfolio } from '@/components/email-design/email-design-portfolio'
import { EmailDesignStats } from '@/components/email-design/email-design-stats'
import { EmailDesignPricing } from '@/components/email-design/email-design-pricing'
import { AllServicesSection } from '@/components/pricing/service-cards-grid'
import { EmailDesignTestimonials } from '@/components/email-design/email-design-testimonials'
import { EmailDesignCta } from '@/components/email-design/email-design-cta'

export const metadata = {
  title: 'Professional Email Design Services from $149/mo | Conquerors',
  description: 'Stunning, conversion-optimized email templates designed by experts. Increase open rates, click-throughs, and sales with professional email design.',
}

export default function EmailDesignPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <EmailDesignHero />
        <EmailDesignFeatures />
        <EmailDesignPortfolio />
        <EmailDesignStats />
        <EmailDesignPricing />
        <AllServicesSection />
        <EmailDesignTestimonials />
        <EmailDesignCta />
      </main>
      <Footer />
    </>
  )
}
