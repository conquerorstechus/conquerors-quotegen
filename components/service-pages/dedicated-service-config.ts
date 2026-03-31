/**
 * Content for dedicated service landing pages (matches Services dropdown routes).
 * Deliverables align with pricing sheet where applicable.
 */

export type DedicatedServiceStep = { title: string; description: string }
export type DedicatedServiceExample = { title: string; description: string }
export type DedicatedServiceWhyPoint = { title: string; description: string }

export type DedicatedServicePageContent = {
  /** Used to exclude current page from “Explore other services” */
  path: string
  metaTitle: string
  metaDescription: string
  hero: {
    badge?: string
    title: string
    tagline: string
  }
  whatIs: {
    heading?: string
    body: string
  }
  howItWorks: {
    heading?: string
    steps: DedicatedServiceStep[]
  }
  included: {
    heading?: string
    items: string[]
  }
  examples: {
    heading?: string
    cases: DedicatedServiceExample[]
  }
  whyDifferent: {
    heading?: string
    points: DedicatedServiceWhyPoint[]
  }
  pricing: {
    teaser: string
    priceDisplay: string
    planNameForCheckout: string
    checkoutPrice: number
  }
}

/** Same groups as `services-dropdown` / mobile header — for cross-links only. */
export const EXPLORE_SERVICE_LINKS: { label: string; href: string; category: string }[] = [
  { label: "Meta Ads Management", href: "/meta-ads", category: "Ads" },
  { label: "Google Ads Management", href: "/google-ads", category: "Ads" },
  { label: "SEO Services", href: "/seo", category: "SEO" },
  { label: "Videos", href: "/videos", category: "Videos" },
  { label: "Instagram Growth", href: "/instagram-growth", category: "Social Media Management" },
  { label: "Email Design", href: "/email-design", category: "Social Media Management" },
]

export const staticAdsPageContent: DedicatedServicePageContent = {
  path: "/static-ads",
  metaTitle: "Static Ads — 5 Creatives/Month from $149 | Conquerors",
  metaDescription:
    "Performance static ad creatives each month: concepts, design, and conversion copy for Meta, TikTok, and display placements.",
  hero: {
    badge: "Ad creative",
    title: "Static Ads",
    tagline: "Scroll-stopping still creatives built to convert—research, design, and copy included every month.",
  },
  whatIs: {
    body: "Static ads are the images and graphics people see in their feeds before they tap or swipe. We design a fresh batch each month so you always have professional creatives to test, scale, or refresh campaigns—without hiring an in-house designer.",
  },
  howItWorks: {
    steps: [
      { title: "Brief & brand kit", description: "Share your offer, audience, and logos/colors—we align with your brand guidelines." },
      { title: "Concepts & copy", description: "We propose angles and headlines tuned for clicks and conversions." },
      { title: "Design & revisions", description: "You review drafts; we refine until you’re ready to launch." },
      { title: "Handoff", description: "You get export-ready files sized for common paid social placements." },
    ],
  },
  included: {
    items: [
      "5 static ad creatives per month",
      "Research-backed concepts and layouts",
      "Conversion-focused headlines and body copy",
      "Monthly delivery cadence",
      "Revisions aligned with your feedback",
    ],
  },
  examples: {
    cases: [
      { title: "E‑commerce promo carousel", description: "Product highlight sets for Meta remarketing and prospecting." },
      { title: "Lead-gen service business", description: "Simple, bold layouts that clarify your offer and CTA." },
      { title: "App install campaign", description: "Creatives that stress benefits and social proof in one glance." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Human-led creative", description: "Real strategists and designers—not generic AI-only output." },
      { title: "Agency quality, simpler pricing", description: "Predictable monthly deliverables without a six-figure retainer." },
      { title: "Built for testing", description: "Enough variations each month to learn what performs." },
    ],
  },
  pricing: {
    teaser: "5 static ad creatives per month, billed monthly. Cancel anytime.",
    priceDisplay: "From $149/mo",
    planNameForCheckout: "Static Ads",
    checkoutPrice: 149,
  },
}

export const videoAdsPageContent: DedicatedServicePageContent = {
  path: "/video-ads",
  metaTitle: "Video Ads — 2 Ads/Month from $149 | Conquerors",
  metaDescription:
    "Paid social video ads with scripting, editing, and CTA copy—ready for Meta, TikTok, and YouTube campaigns.",
  hero: {
    badge: "Ad creative",
    title: "Video Ads",
    tagline: "Short video ads engineered for paid campaigns—hooks, pacing, and clear calls-to-action.",
  },
  whatIs: {
    body: "Video ads are short clips designed to drive action in paid placements. We handle scripting and editing so you get polished spots you can plug into campaigns without juggling freelancers for every cut.",
  },
  howItWorks: {
    steps: [
      { title: "Goal & placement", description: "Clarify offer, funnel stage, and where ads will run." },
      { title: "Script & storyboard", description: "Hook-first structure with on-screen text and CTA." },
      { title: "Edit & sound", description: "Tight cuts, captions, and brand-consistent visuals." },
      { title: "Delivery", description: "Ratios and lengths suited to common paid social specs." },
    ],
  },
  included: {
    items: [
      "2 video ads per month",
      "Scripting, captions, and CTA messaging",
      "Professional editing",
      "Iteration based on your feedback",
    ],
  },
  examples: {
    cases: [
      { title: "SaaS free-trial push", description: "15–30s spots highlighting the aha moment and signup." },
      { title: "Local service offer", description: "Before/after or testimonial-led social proof cuts." },
      { title: "Product launch", description: "Urgency-led creative for a limited-time promo." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Performance mindset", description: "Every frame supports the click—not just ‘pretty’ video." },
      { title: "Flexible sources", description: "Stock, client clips, or UGC-style assets—whatever fits your brand." },
      { title: "Straightforward scope", description: "Fixed monthly deliverables so you can plan spend and tests." },
    ],
  },
  pricing: {
    teaser: "2 video ads per month. Scale or add formats from the Pricing page.",
    priceDisplay: "From $149/mo",
    planNameForCheckout: "Video Ads",
    checkoutPrice: 149,
  },
}

export const metaAdsPageContent: DedicatedServicePageContent = {
  path: "/meta-ads",
  metaTitle: "Meta Ads Management from $549/mo | Conquerors",
  metaDescription:
    "Facebook and Instagram campaign management: structure, testing, optimization, and clear reporting.",
  hero: {
    title: "Meta Ads Management",
    tagline: "Facebook & Instagram campaigns managed end-to-end—testing, learning, and scaling what works.",
  },
  whatIs: {
    body: "Meta ads management means we help you plan, build, and run campaigns in Facebook and Instagram’s ad ecosystem. You stay focused on the business; we handle account hygiene, creative iteration, and ongoing optimization (ad spend is billed by Meta separately).",
  },
  howItWorks: {
    steps: [
      { title: "Audit & goals", description: "Clarify offers, audiences, budgets, and success metrics." },
      { title: "Account setup", description: "Campaign structure, tracking, and initial ad sets." },
      { title: "Launch & test", description: "Structured experiments on creative and targeting." },
      { title: "Optimize & report", description: "Optimize campaign performance and provide detailed monthly reports." },
    ],
  },
  included: {
    items: [
      "1–3 managed campaigns (Starter / Standard / Plus tiers)",
      "Facebook & Instagram ads management",
      "Ongoing optimization and testing roadmap",
      "Performance reporting & strategic guidance",
    ],
  },
  examples: {
    cases: [
      { title: "Lead form campaigns", description: "Driving quote requests for B2B and local services." },
      { title: "E‑commerce catalog sales", description: "Prospecting and retesting creative for product feeds." },
      { title: "Event or launch pushes", description: "Time-bound campaigns with clear frequency and offer messaging." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Humans in the loop", description: "Strategists who interpret data—not a set-and-forget bot." },
      { title: "Transparent rhythm", description: "Regular optimization, not mystery black-box tweaks." },
      { title: "Affordable vs. traditional agencies", description: "Focused scope and pricing you can budget for." },
    ],
  },
  pricing: {
    teaser:
      "Starter (1 campaign) from $549/mo, Standard (2) $749/mo, Plus (3) $999/mo. Management fee only—your ad spend is paid directly to Meta.",
    priceDisplay: "From $549/mo",
    planNameForCheckout: "Meta Ads Management",
    checkoutPrice: 549,
  },
}

export const googleAdsPageContent: DedicatedServicePageContent = {
  path: "/google-ads",
  metaTitle: "Google Ads Management from $549/mo | Conquerors",
  metaDescription:
    "Search and performance campaigns on Google Ads—structure, keywords, bidding, and ongoing improvement.",
  hero: {
    title: "Google Ads Management",
    tagline: "Get found by people actively searching—search and performance campaigns tuned for leads and revenue.",
  },
  whatIs: {
    body: "Google Ads management is ongoing care for your Search, Performance Max, and related campaigns. We focus on queries that matter, tighten ad copy and landing page alignment, and adjust bids so your budget works harder over time.",
  },
  howItWorks: {
    steps: [
      { title: "Discovery", description: "Offers, margins, CRM flow, and what a qualified lead looks like." },
      { title: "Build", description: "Campaigns, ad groups, keywords, and conversion tracking checks." },
      { title: "Learn", description: "Search terms, ads, and bids refined using real performance." },
      { title: "Scale or trim", description: "Double down on segments that convert; cut waste." },
    ],
  },
  included: {
    items: [
      "1–3 managed campaigns (Starter / Standard / Plus tiers)",
      "Google Ads campaign management & search coverage",
      "Bid, keyword, and ad iteration",
      "Conversion-focused structure and reporting",
    ],
  },
  examples: {
    cases: [
      { title: "Emergency & local services", description: "High-intent “near me” search capture." },
      { title: "B2B lead generation", description: "Tight match types and landing page message match." },
      { title: "Retail & e‑commerce", description: "Shopping and PMax alignment with your catalog." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Clarity over vanity", description: "Reporting tied to leads and sales—not just impressions." },
      { title: "No lock-in complexity", description: "Straightforward monthly engagement." },
      { title: "Real operators", description: "Experienced humans reviewing your account regularly." },
    ],
  },
  pricing: {
    teaser:
      "Starter (1 campaign) from $549/mo, Standard (2) $749/mo, Plus (3) $999/mo. Management fee only—your ad spend is paid directly to Google.",
    priceDisplay: "From $549/mo",
    planNameForCheckout: "Google Ads Management",
    checkoutPrice: 549,
  },
}

export const seoServicesPageContent: DedicatedServicePageContent = {
  path: "/seo",
  metaTitle: "SEO Services — Content, Links & SEO | Conquerors",
  metaDescription:
    "SEO blog posts, authoritative backlinks, and full SEO to grow organic visibility.",
  hero: {
    title: "SEO Services",
    tagline: "Rankings and traffic the sustainable way—content, links, and technical focus without gimmicks.",
  },
  whatIs: {
    body: "SEO (search engine optimization) helps your site show up when people search for what you offer. Our services bundle content, backlinks, and ongoing management so you’re not piecing together freelancers for every piece of the puzzle.",
  },
  howItWorks: {
    steps: [
      { title: "Strategy plan", description: "Topics, goals, and realistic timelines based on your niche." },
      { title: "Publish & earn links", description: "Optimized articles plus outreach for quality backlinks." },
      { title: "On-site improvements", description: "Structure, metadata, and technical fixes that support rankings." },
      { title: "Review & next month", description: "Analyze, refine, and optimize for the month ahead." },
    ],
  },
  included: {
    items: [
      "SEO blog posts—2, 4, or 6 articles/mo (Starter / Standard / Plus)",
      "Get SEO Backlinks.",
      "Managed SEO—full ongoing program from $549/mo",
      "Reports that you can actually use.",
    ],
  },
  examples: {
    cases: [
      { title: "Local professional firm", description: "City + service pages plus monthly educational articles." },
      { title: "SaaS content engine", description: "Comparison and how-to posts that capture mid-funnel searches." },
      { title: "E‑commerce category growth", description: "Supporting pages and links to strengthen category visibility." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "White-hat discipline", description: "No spammy directories—real pages and outreach." },
      { title: "Modular or full-service", description: "Start with content or links; upgrade to managed SEO when ready." },
      { title: "People, not just tools", description: "Strategic judgment on what to publish and where to earn links." },
    ],
  },
  pricing: {
    teaser:
      "Blog posts scale from 2 ($149/mo) to 6 ($349/mo); managed SEO full program from $549/mo. Mix modules on the Pricing page.",
    priceDisplay: "From $149/mo · Managed SEO from $549/mo",
    planNameForCheckout: "SEO Services",
    checkoutPrice: 149,
  },
}

export const shortFormVideosPageContent: DedicatedServicePageContent = {
  path: "/videos",
  metaTitle: "Videos — 4–8/mo from $149 | Conquerors",
  metaDescription:
    "15–60 second videos for TikTok, Instagram Reels, and YouTube Shorts—Starter through Plus tiers, on-brand.",
  hero: {
    title: "Videos",
    tagline: "Vertical video for Reels, TikTok, and Shorts—4, 6, or 8 pieces per month, ready to post.",
  },
  whatIs: {
    body: "Short-form video is the fastest way to stay visible in social feeds. We produce platform-native clips each month so you can maintain momentum without editing late nights yourself.",
  },
  howItWorks: {
    steps: [
      { title: "Ideas & hooks", description: "Trend-aware concepts that still sound like your brand." },
      { title: "Edit & graphics", description: "Cuts, captions, and on-screen text for silent viewing." },
      { title: "Brand polish", description: "Colors, fonts, and tone matched to your guidelines." },
      { title: "Delivery", description: "Files ready to upload or hand to your social manager." },
    ],
  },
  included: {
    items: [
      "4, 6, or 8 short-form videos (15–60 sec) per month by tier",
      "Captions and on-screen text",
      "Platform-native aspect ratios",
      "Monthly delivery cadence",
    ],
  },
  examples: {
    cases: [
      { title: "Product tips", description: "Quick demos that educate and entertain in under a minute." },
      { title: "Founder story snippets", description: "Authentic face-to-camera clips for trust-building." },
      { title: "Promo beats", description: "Timed offers or events with strong hooks in the first second." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Built for algorithms", description: "Pacing and structure aimed at retention, not just aesthetics." },
      { title: "Affordable volume", description: "4–8 clips monthly across tiers at a fraction of traditional production." },
      { title: "Real editors", description: "Human cuts and judgment—not one-click auto montages." },
    ],
  },
  pricing: {
    teaser: "Starter 4 videos ($149/mo), Standard 6 ($199/mo), Plus 8 ($249/mo). Add other services at checkout.",
    priceDisplay: "From $149/mo",
    planNameForCheckout: "Videos",
    checkoutPrice: 149,
  },
}

export const instagramGrowthPageContent: DedicatedServicePageContent = {
  path: "/instagram-growth",
  metaTitle: "Instagram Growth from $179/mo | Conquerors",
  metaDescription:
    "Starter, Standard, and Plus growth programs—ethical, engagement-led strategies without bots or risky automation.",
  hero: {
    title: "Instagram Growth",
    tagline: "Grow with the right followers—Starter, Standard, or Plus engagement depth, all platform-safe.",
  },
  whatIs: {
    body: "Instagram growth isn’t about buying empty followers. We focus on people likely to care about your brand, using compliant outreach and content guidance so your account looks healthier and more active over time.",
  },
  howItWorks: {
    steps: [
      { title: "Audience map", description: "Who you serve, competitors, and niche hashtags or communities." },
      { title: "Plan", description: "Cadence and engagement patterns that fit your capacity." },
      { title: "Execute", description: "Hands-on actions that support discovery—no fake followers." },
      { title: "Review", description: "What’s working, what to tweak, and how content ties in." },
    ],
  },
  included: {
    items: [
      "Starter: Basic growth ($179/mo)",
      "Standard: Moderate growth ($249/mo)",
      "Plus: Advanced growth ($349/mo)",
      "Audience alignment & platform-rules-friendly execution",
    ],
  },
  examples: {
    cases: [
      { title: "Creator building sponsor appeal", description: "Steady niche growth brands notice." },
      { title: "Local brand awareness", description: "Geo and interest-relevant community visibility." },
      { title: "Product-led startup", description: "Followers who match your ideal customer profile." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "No bot farms", description: "We don’t sell vanity metrics that hurt your account." },
      { title: "Humans steering the plan", description: "Judgment calls machines can’t make." },
      { title: "Honest expectations", description: "Growth takes consistency—we focus on sustainable signals." },
    ],
  },
  pricing: {
    teaser: "Starter $179/mo, Standard $249/mo, Plus $349/mo. Pair with content services for best results.",
    priceDisplay: "From $179/mo",
    planNameForCheckout: "Instagram Growth",
    checkoutPrice: 179,
  },
}

export const emailDesignPageContent: DedicatedServicePageContent = {
  path: "/email-design",
  metaTitle: "Email Design — 2–6 Custom Emails/mo from $199 | Conquerors",
  metaDescription:
    "On-brand, responsive email design and copy—Starter through Plus tiers, ready for your ESP and campaigns.",
  hero: {
    title: "Email Design",
    tagline: "Emails people actually want to open—2, 4, or 6 custom layouts per month with mobile-first design.",
  },
  whatIs: {
    body: "Email design is how your newsletters, promos, and automations look in the inbox. We deliver custom templates each month that match your brand, read well on phones, and support your CTAs—whether you use Mailchimp, Klaviyo, HubSpot, or another ESP.",
  },
  howItWorks: {
    steps: [
      { title: "Brand & goal", description: "Voice, colors, and what each send should achieve." },
      { title: "Layout & copy", description: "Structure, headlines, and body tuned for skimming." },
      { title: "Responsive pass", description: "Dark mode and small-screen readability considered." },
      { title: "Handoff", description: "Files or module guidance so your team can deploy." },
    ],
  },
  included: {
    items: [
      "2, 4, or 6 custom designed emails per month by tier",
      "Brand-aligned layouts and persuasive copy",
      "Responsive, mobile-friendly structure",
      "Implementation guidance for your ESP",
    ],
  },
  examples: {
    cases: [
      { title: "Monthly newsletter", description: "Editorial layout with featured story and secondary links." },
      { title: "Promotional blast", description: "Offer-forward design with urgency and clear CTA." },
      { title: "Welcome series block", description: "Onboarding email that matches your site experience." },
    ],
  },
  whyDifferent: {
    points: [
      { title: "Design + copy together", description: "No mismatched words and visuals from separate vendors." },
      { title: "Conversion-aware", description: "Layouts built for clicks, not just decoration." },
      { title: "Realistic pricing", description: "Professional email creative without enterprise agency fees." },
    ],
  },
  pricing: {
    teaser: "Starter 2 emails ($199/mo), Standard 4 ($299/mo), Plus 6 ($399/mo). Add more services on the Pricing page.",
    priceDisplay: "From $199/mo",
    planNameForCheckout: "Email Design",
    checkoutPrice: 199,
  },
}
