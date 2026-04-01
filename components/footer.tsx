import Link from "next/link"
import { Instagram, Facebook, X, Linkedin, Youtube, Target, Search, SearchCheck, Video, TrendingUp, Mail } from "lucide-react"
import Image from "next/image"

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/#examples" },
  { label: "Pricing", href: "/pricing" },
]

const servicesGroups = [
  {
    heading: "Social Media",
    items: [
      { label: "Social Media Posts", href: "/services/posts", icon: Video },
      { label: "Instagram Growth", href: "/instagram-growth", icon: TrendingUp },
    ],
  },
  {
    heading: "Ads Management",
    items: [
      { label: "Meta Ads Management", href: "/meta-ads", icon: Target },
      { label: "Google Ads Management", href: "/google-ads", icon: Search },
    ],
  },
  {
    heading: "Other",
    items: [
      { label: "SEO", href: "/seo", icon: SearchCheck },
      { label: "Videos", href: "/videos", icon: Video },
      { label: "Email Design", href: "/email-design", icon: Mail },
    ],
  },
]

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/conquerors_tech_us?igsh=MWV2cXlhd3FvaTExOA%3D%3D" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583952656144" },
  { icon: X, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0B2A4A] to-[#1E5AA8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-dark.png"
                alt="Conquerors Software Technologies"
                width={200}
                height={60}
                className="h-12 w-auto invert brightness-0"
              />
            </Link>
            <p className="text-blue-100 text-sm mb-6">Expert social media management from only $99/mo</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center hover:bg-[#3FA9F5] transition-colors text-blue-200 hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>

            {/* Desktop grouped services */}
            <div className="hidden md:block space-y-4">
              {servicesGroups.map((group) => (
                <div key={group.heading} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-xs font-semibold text-white/90 mb-2">{group.heading}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                          >
                            <Icon className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile accordion services */}
            <div className="md:hidden space-y-2">
              {servicesGroups.map((group) => (
                <details key={group.heading} className="rounded-lg border border-white/10 bg-white/5">
                  <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-white flex items-center justify-between">
                    <span>{group.heading}</span>
                    <span className="text-white/70">+</span>
                  </summary>
                  <ul className="px-3 pb-3 space-y-2">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.label}>
                          <Link href={item.href} className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                            <Icon className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </details>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-blue-400/20">
          <p className="text-center text-blue-100 text-sm">
            © {new Date().getFullYear()} Conquerors Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
