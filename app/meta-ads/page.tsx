import { DedicatedServicePage } from "@/components/service-pages/dedicated-service-page"
import { metaAdsPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: metaAdsPageContent.metaTitle,
  description: metaAdsPageContent.metaDescription,
}

export default function MetaAdsPage() {
  return <DedicatedServicePage content={metaAdsPageContent} />
}
