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
  "static-ads",
  "video-ads",
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
      "Static, single-image social posts custom-made with your branding, posted monthly across the channels that matter for your business.",
    sliderLabel: "Select monthly number of posts",
    tiers: [
      { quantity: 5, price: 99, tickLabel: "5", selectionLabel: "5 posts" },
      { quantity: 10, price: 149, tickLabel: "10", selectionLabel: "10 posts" },
      { quantity: 15, price: 199, tickLabel: "15", selectionLabel: "15 posts" },
      { quantity: 30, price: 329, tickLabel: "30", selectionLabel: "30 posts" },
    ],
    features: [
      { icon: "check", text: "Posts in your branding" },
      { icon: "hash", text: "Captions & hashtags" },
      { icon: "send", text: "Posted for you (optional)" },
      { icon: "calendar", text: "Onboarding call (optional)" },
      { icon: "users", text: "All major social channels included" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/services/posts",
    howItWorksHref: "/help",
  },
  videos: {
    title: "Short-Form Videos",
    description:
      "Engaging 20–60 second short-form videos for TikTok, Instagram Reels, and YouTube Shorts—built to stop the scroll and drive engagement.",
    sliderLabel: "Select monthly number of videos",
    tiers: [
      { quantity: 5, price: 199, tickLabel: "5", selectionLabel: "5 videos" },
      { quantity: 10, price: 349, tickLabel: "10", selectionLabel: "10 videos" },
      { quantity: 15, price: 499, tickLabel: "15", selectionLabel: "15 videos" },
      { quantity: 20, price: 649, tickLabel: "20", selectionLabel: "20 videos" },
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
      "Performance-focused static ad creatives built with research, strong concepts, scroll-stopping design, and copy tuned for conversions.",
    sliderLabel: "Select monthly number of static ads",
    tiers: [
      { quantity: 5, price: 99, tickLabel: "5", selectionLabel: "5 static ads" },
      { quantity: 10, price: 179, tickLabel: "10", selectionLabel: "10 static ads" },
      { quantity: 20, price: 329, tickLabel: "20", selectionLabel: "20 static ads" },
      { quantity: 30, price: 469, tickLabel: "30", selectionLabel: "30 static ads" },
    ],
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
      "High-performing paid social video ads—scripting, editing, and messaging tailored for Meta, TikTok, and YouTube campaigns.",
    sliderLabel: "Select monthly number of video ads",
    tiers: [
      { quantity: 2, price: 99, tickLabel: "2", selectionLabel: "2 video ads" },
      { quantity: 4, price: 179, tickLabel: "4", selectionLabel: "4 video ads" },
      { quantity: 6, price: 249, tickLabel: "6", selectionLabel: "6 video ads" },
      { quantity: 8, price: 319, tickLabel: "8", selectionLabel: "8 video ads" },
    ],
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
      "Take your email marketing further with stunning, on-brand emails—copy and design from specialists who understand conversion.",
    sliderLabel: "Select monthly number of emails",
    tiers: [
      { quantity: 2, price: 149, tickLabel: "2", selectionLabel: "2 emails" },
      { quantity: 4, price: 279, tickLabel: "4", selectionLabel: "4 emails" },
      { quantity: 6, price: 399, tickLabel: "6", selectionLabel: "6 emails" },
      { quantity: 8, price: 519, tickLabel: "8", selectionLabel: "8 emails" },
    ],
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
    title: "Blog Posts",
    description:
      "Fully SEO-optimized blog articles for your site—research-backed outlines, structured headings, and copy that ranks and reads well.",
    sliderLabel: "Select monthly number of articles",
    tiers: [
      { quantity: 2, price: 99, tickLabel: "2", selectionLabel: "2 articles" },
      { quantity: 4, price: 179, tickLabel: "4", selectionLabel: "4 articles" },
      { quantity: 6, price: 249, tickLabel: "6", selectionLabel: "6 articles" },
      { quantity: 8, price: 319, tickLabel: "8", selectionLabel: "8 articles" },
    ],
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
      "High-quality backlinks from real sites (DA30–65) to strengthen authority, improve rankings, and support sustainable organic growth.",
    sliderLabel: "Select monthly backlink volume",
    tiers: [
      { quantity: 3, price: 249, tickLabel: "3", selectionLabel: "3 SEO backlinks" },
      { quantity: 6, price: 449, tickLabel: "6", selectionLabel: "6 SEO backlinks" },
      { quantity: 9, price: 629, tickLabel: "9", selectionLabel: "9 SEO backlinks" },
      { quantity: 12, price: 799, tickLabel: "12", selectionLabel: "12 SEO backlinks" },
    ],
    features: [
      { icon: "shield", text: "Real outreach—not spam directories" },
      { icon: "link", text: "DA30–65 publisher quality" },
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
      "Facebook & Instagram advertising managed end-to-end—strategy, creatives, testing, and optimization. Ad spend is billed separately by Meta.",
    sliderLabel: "Select management tier",
    tiers: [
      { quantity: 1, price: 499, tickLabel: "1", selectionLabel: "Tier 1 management" },
      { quantity: 2, price: 899, tickLabel: "2", selectionLabel: "Tier 2 management" },
      { quantity: 3, price: 1249, tickLabel: "3", selectionLabel: "Tier 3 management" },
    ],
    features: [
      { icon: "target", text: "Expert media buyer + creative strategy" },
      { icon: "palette", text: "5 static + 2 video assets monthly" },
      { icon: "trending", text: "Weekly performance optimization" },
      { icon: "zap", text: "Structured testing roadmap" },
      { icon: "users", text: "Audience research & targeting" },
      { icon: "check", text: "Pixel & tracking setup (optional add-on)" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/meta-ads",
    howItWorksHref: "/help",
  },
  "google-ads": {
    title: "Google Ads Management",
    description:
      "Search and performance campaigns managed by specialists who focus on qualified leads, efficient spend, and conversion clarity—not vanity metrics.",
    sliderLabel: "Select management tier",
    tiers: [
      { quantity: 1, price: 499, tickLabel: "1", selectionLabel: "Tier 1 management" },
      { quantity: 2, price: 899, tickLabel: "2", selectionLabel: "Tier 2 management" },
      { quantity: 3, price: 1249, tickLabel: "3", selectionLabel: "Tier 3 management" },
    ],
    features: [
      { icon: "search", text: "Certified account strategy & buildout" },
      { icon: "barChart", text: "Search, Display & Performance Max coverage" },
      { icon: "trending", text: "Weekly bid & creative iteration" },
      { icon: "target", text: "Conversion-led audience design" },
      { icon: "shield", text: "Tracking & attribution hygiene" },
      { icon: "check", text: "Executive-ready reporting" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/google-ads",
    howItWorksHref: "/help",
  },
  "instagram-growth": {
    title: "Instagram Growth",
    description:
      "Real, targeted follower growth through manual engagement in your niche—no bots, no risky automation, and strategies aligned with platform rules.",
    sliderLabel: "Select growth package",
    tiers: [
      { quantity: 1, price: 149, tickLabel: "1", selectionLabel: "Starter growth" },
      { quantity: 2, price: 279, tickLabel: "2", selectionLabel: "Accelerated growth" },
      { quantity: 3, price: 399, tickLabel: "3", selectionLabel: "Maximum growth" },
    ],
    features: [
      { icon: "users", text: "Human-led outreach in your target niche" },
      { icon: "trending", text: "100–400+ monthly follower velocity (tiered)" },
      { icon: "target", text: "Audience & competitor insights" },
      { icon: "calendar", text: "Content cadence recommendations" },
      { icon: "shield", text: "Compliance-first playbook" },
    ],
    timelineUrl: "/help",
    examplesUrl: "/instagram-growth",
    howItWorksHref: "/help",
  },
}
