import { DedicatedServicePage } from "@/components/service-pages/dedicated-service-page"
import { googleAdsPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: googleAdsPageContent.metaTitle,
  description: googleAdsPageContent.metaDescription,
}

export default function GoogleAdsPage() {
  return <DedicatedServicePage content={googleAdsPageContent} />
}
