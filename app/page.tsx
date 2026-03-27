import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialChannels } from "@/components/social-channels"
import { TrustSection } from "@/components/trust-section"
import { ExamplesSection } from "@/components/examples-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ClientReviewsSection } from "@/components/client-reviews"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialChannels />
      <TrustSection />
      <ExamplesSection />
      <WhyChooseUsSection />
      <ClientReviewsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
