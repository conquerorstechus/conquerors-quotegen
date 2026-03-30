import { DedicatedServicePage } from "@/components/service-pages/dedicated-service-page"
import { staticAdsPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: staticAdsPageContent.metaTitle,
  description: staticAdsPageContent.metaDescription,
}

export default function StaticAdsPage() {
  return <DedicatedServicePage content={staticAdsPageContent} />
}
