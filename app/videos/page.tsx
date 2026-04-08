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
      <main className="w-full bg-white pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
