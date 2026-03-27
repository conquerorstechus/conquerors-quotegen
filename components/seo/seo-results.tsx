import { TrendingUp, Clock, Users } from "lucide-react"

const results = [
  { icon: TrendingUp, value: "Rank Growth", text: "Keyword improvements that stick." },
  { icon: Clock, value: "Faster Pages", text: "Performance fixes that help SEO." },
  { icon: Users, value: "More Leads", text: "Traffic aligned to conversion intent." },
]

export default function SeoResults() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What You Can Expect</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.value} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-lg font-semibold">{r.value}</div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

