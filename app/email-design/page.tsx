import { DedicatedServicePage } from "@/components/service-pages/dedicated-service-page"
import { emailDesignPageContent } from "@/components/service-pages/dedicated-service-config"

export const metadata = {
  title: emailDesignPageContent.metaTitle,
  description: emailDesignPageContent.metaDescription,
}

export default function EmailDesignPage() {
  return <DedicatedServicePage content={emailDesignPageContent} />
}
