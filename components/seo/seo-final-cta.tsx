import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SeoFinalCta() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-3">Ready to rank higher?</h2>
              <p className="text-muted-foreground">
                Start with an SEO plan and get a clear roadmap for improving visibility and lead quality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  View SEO Plans
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/schedule-demo" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

