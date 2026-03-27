import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/about/about-hero'
import { AboutMission } from '@/components/about/about-mission'
import { AboutTeam } from '@/components/about/about-team'
import { AboutValues } from '@/components/about/about-values'
import { AboutCta } from '@/components/about/about-cta'

export const metadata = {
  title: 'About Conquerors Digital | Affordable Social Media Management',
  description: 'Learn about Conquerors Digital, our mission, team, and values. We make professional social media management affordable for all businesses.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTeam />
        <AboutValues />
        <AboutCta />
      </main>
      <Footer />
    </>
  )
}
