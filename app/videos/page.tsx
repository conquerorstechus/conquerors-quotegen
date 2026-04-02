import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { shortFormVideosPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: shortFormVideosPageContent.metaTitle,
  description: shortFormVideosPageContent.metaDescription,
}

export default function ShortFormVideosPage() {
  const videoSrc = new URL('../../components/service-pages/coming soon.mp4', import.meta.url).toString()

  return (
    <>
      <Header />
      <main className="w-full bg-white">
        <section className="w-full h-[80vh] flex items-center justify-center relative overflow-hidden">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </section>
      </main>
      <Footer />
    </>
  )
}
