/**
 * Configurable data for the Feedbird-style dynamic pricing UI.
 * Keys match `ServiceTabs` service ids for consistency.
 */
export type DynamicPricingTabId =
  | "posts"
  | "videos"
  | "static-ads"
  | "video-ads"
  | "emails"
  | "blogs"
  | "backlinks"
  | "meta-ads"
  | "google-ads"
  | "instagram-growth"

export type DynamicPricingFeatureIcon =
  | "check"
  | "palette"
  | "pen"
  | "hash"
  | "send"
  | "calendar"
  | "users"
  | "shield"
  | "trending"
  | "target"
  | "barChart"
  | "zap"
  | "video"
  | "search"
  | "link"

export type DynamicPricingTier = {
  quantity: number
  price: number
  /** Label shown under the slider thumb track */
  tickLabel: string
  /** Short line for the title row (e.g. "5 posts") */
  selectionLabel: string
}

export type DynamicPricingServiceContent = {
  title: string
  description: string
  sliderLabel: string
  tiers: DynamicPricingTier[]
  features: { icon: DynamicPricingFeatureIcon; text: string }[]
  timelineUrl: string
  examplesUrl: string
  howItWorksHref: string
}

export const DYNAMIC_PRICING_TAB_ORDER: DynamicPricingTabId[] = [
  "posts",
  "videos",
  // "static-ads", // hidden from /pricing tab on request
  // "video-ads", // hidden from /pricing tab on request
  "emails",
  "blogs",
  "backlinks",
  "meta-ads",
  "google-ads",
  "instagram-growth",
]

export const dynamicPricingContent: Record<DynamicPricingTabId, DynamicPricingServiceContent> = {
  posts: {
    title: "Social Media Posts",
    description:
      "Static social posts custom-made with your branding—4, 8, or 12 posts per month for 2 social channels (Facebook & Instagram).",
    sliderLabel: "Select monthly number of posts",
    tiers: [
      { quantity: 4, price: 99, tickLabel: "4", selectionLabel: "4 posts" },
      { quantity: 8, price: 149, tickLabel: "8", selectionLabel: "8 posts" },
      { quantity: 12, price: 199, tickLabel: "12", selectionLabel: "12 posts" },
    ],
    features: [
      { icon: "users", text: "2 social channels (FB/Insta)" },
      { icon: "check", text: "Posts in your branding" },
      { icon: "hash", text: "Captions & hashtags" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/services/posts",
    howItWorksHref: "/help",
  },
  videos: {
    title: "Short-Form Videos",
    description:
      "4 short-form videos (15–60 sec) per month for Instagram Reels, TikTok, and YouTube Shorts.",
    sliderLabel: "Select monthly number of videos",
    tiers: [
      { quantity: 4, price: 149, tickLabel: "4", selectionLabel: "4 videos" },
    ],
    features: [
      { icon: "video", text: "Videos in your branding" },
      { icon: "zap", text: "Hook-first concepts & pacing" },
      { icon: "pen", text: "Captions & on-screen text" },
      { icon: "palette", text: "Platform-native aspect ratios" },
      { icon: "calendar", text: "Monthly delivery cadence" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/videos",
    howItWorksHref: "/help",
  },
  "static-ads": {
    title: "Static Ads",
    description:
      "5 static ad creatives per month—performance-focused design and copy for your paid social campaigns.",
    sliderLabel: "Select monthly number of static ads",
    tiers: [{ quantity: 5, price: 149, tickLabel: "5", selectionLabel: "5 static ad creatives" }],
    features: [
      { icon: "palette", text: "Static ads in your branding" },
      { icon: "zap", text: "Fast, research-backed concepts" },
      { icon: "pen", text: "Design & conversion copy" },
      { icon: "calendar", text: "Monthly creative delivery" },
      { icon: "check", text: "Ready-to-launch export formats" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/static-ads",
    howItWorksHref: "/help",
  },
  "video-ads": {
    title: "Video Ads",
    description:
      "2 video ads per month—scripting, editing, and messaging tailored for paid social campaigns.",
    sliderLabel: "Select monthly number of video ads",
    tiers: [{ quantity: 2, price: 149, tickLabel: "2", selectionLabel: "2 video ads" }],
    features: [
      { icon: "video", text: "Video ads optimized for paid social" },
      { icon: "target", text: "Strategic hooks & offer messaging" },
      { icon: "pen", text: "Scripting, captions & CTA copy" },
      { icon: "palette", text: "Multi-ratio exports for every placement" },
      { icon: "check", text: "Iterative testing-friendly deliverables" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/video-ads",
    howItWorksHref: "/help",
  },
  emails: {
    title: "Email Design",
    description:
      "2 custom designed emails per month—on-brand layouts and copy for your campaigns.",
    sliderLabel: "Select monthly number of emails",
    tiers: [{ quantity: 2, price: 199, tickLabel: "2", selectionLabel: "2 custom designed emails" }],
    features: [
      { icon: "palette", text: "Emails in your branding" },
      { icon: "pen", text: "Design & persuasive copy" },
      { icon: "send", text: "Implementation guidance for your ESP" },
      { icon: "check", text: "Responsive, dark-mode friendly layouts" },
      { icon: "users", text: "Dedicated QA before handoff" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/email-design",
    howItWorksHref: "/help",
  },
  blogs: {
    title: "SEO Blog Posts",
    description:
      "2 SEO-optimized blog posts per month—research-backed content structured to rank and read well.",
    sliderLabel: "Select monthly number of articles",
    tiers: [{ quantity: 2, price: 149, tickLabel: "2", selectionLabel: "2 SEO-optimized blog posts" }],
    features: [
      { icon: "search", text: "Keyword-informed outlines" },
      { icon: "pen", text: "Long-form SEO content & structure" },
      { icon: "link", text: "Internal linking recommendations" },
      { icon: "check", text: "Meta title & description options" },
      { icon: "calendar", text: "Editorial-calendar friendly batches" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/blog",
    howItWorksHref: "/help",
  },
  backlinks: {
    title: "SEO Backlinks",
    description:
      "3 backlinks per month from real sites (DA20–65) to strengthen authority and support organic growth.",
    sliderLabel: "Select monthly backlink volume",
    tiers: [{ quantity: 3, price: 299, tickLabel: "3", selectionLabel: "3 backlinks (DA20–65)" }],
    features: [
      { icon: "shield", text: "Real outreach—not spam directories" },
      { icon: "link", text: "DA20–65 publisher quality" },
      { icon: "calendar", text: "Predictable monthly delivery" },
      { icon: "barChart", text: "Transparent reporting" },
      { icon: "check", text: "White-glove campaign management" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/seo",
    howItWorksHref: "/help",
  },
  "meta-ads": {
    title: "Meta Ads Management",
    description:
      "Facebook & Instagram ads management—strategy, setup, testing, and ongoing optimization. Ad spend is billed separately by Meta.",
    sliderLabel: "Select management tier",
    tiers: [
      {
        quantity: 1,
        price: 549,
        tickLabel: "1",
        selectionLabel: "Facebook & Instagram ads management",
      },
    ],
    features: [
      { icon: "target", text: "Facebook & Instagram campaign management" },
      { icon: "trending", text: "Ongoing optimization & testing" },
      { icon: "barChart", text: "Performance reporting" },
      { icon: "check", text: "Strategic account structure & creative guidance" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/meta-ads",
    howItWorksHref: "/help",
  },
  "google-ads": {
    title: "Google Ads Management",
    description:
      "Google Ads campaign management—search and performance campaigns tuned for qualified leads and efficient spend.",
    sliderLabel: "Select management tier",
    tiers: [
      {
        quantity: 1,
        price: 549,
        tickLabel: "1",
        selectionLabel: "Google Ads campaign management",
      },
    ],
    features: [
      { icon: "search", text: "Google Ads campaign management" },
      { icon: "barChart", text: "Search & performance coverage" },
      { icon: "trending", text: "Bid, keyword & ad iteration" },
      { icon: "target", text: "Conversion-focused structure" },
      { icon: "check", text: "Reporting & optimization" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/google-ads",
    howItWorksHref: "/help",
  },
  "instagram-growth": {
    title: "Instagram Growth",
    description:
      "Targeted follower growth through strategic, compliant engagement—no bots or risky automation.",
    sliderLabel: "Select growth package",
    tiers: [{ quantity: 1, price: 179, tickLabel: "1", selectionLabel: "Targeted follower growth" }],
    features: [
      { icon: "users", text: "Targeted follower growth" },
      { icon: "target", text: "Audience alignment with your niche" },
      { icon: "trending", text: "Engagement-led growth strategy" },
      { icon: "shield", text: "Platform-rules-friendly approach" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/instagram-growth",
    howItWorksHref: "/help",
  },
}
