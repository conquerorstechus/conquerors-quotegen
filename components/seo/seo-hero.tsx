import { Search, Sparkles } from "lucide-react"

export default function SeoHero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">SEO That Brings Qualified Traffic</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Grow Your Rankings. Get More Leads.
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
          We optimize your site structure, pages, and content to help you rank higher and convert better.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <span>Keyword + intent targeting</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>On-page + technical improvements</span>
          </div>
        </div>
      </div>
    </section>
  )
}

