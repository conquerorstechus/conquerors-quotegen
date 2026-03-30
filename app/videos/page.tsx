import { DedicatedServicePage } from "@/components/service-pages/dedicated-service-page"
import { shortFormVideosPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: shortFormVideosPageContent.metaTitle,
  description: shortFormVideosPageContent.metaDescription,
}

export default function ShortFormVideosPage() {
  return <DedicatedServicePage content={shortFormVideosPageContent} />
}
