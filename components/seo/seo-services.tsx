import { CheckCircle2, Code, Search } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find terms with real search intent and align pages to rank-worthy opportunities.",
  },
  {
    icon: Code,
    title: "On-Page Optimization",
    description: "Improve titles, headings, internal links, schema, and page structure for better relevance.",
  },
  {
    icon: CheckCircle2,
    title: "Technical SEO",
    description: "Fix crawlability, indexation issues, and performance problems that hurt rankings.",
  },
]

export default function SeoServices() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">SEO Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="border border-border rounded-2xl p-6 bg-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

