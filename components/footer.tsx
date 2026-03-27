import Link from "next/link"
import { Instagram, Facebook, X, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  Company: ["Our Work", "About", "Pricing",  "Blog"],
  Services: [
    "Static Ads",
    "Video Ads", 
    "Meta Ads Management",
    "Google Ads Management",
    "SEO",
    "Short-Form Videos",
    "UGC Videos",
    "Instagram Growth",
    "Email Design"
  ],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
}

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
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

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  let href = "#"
                  // Company links
                  if (link === "Our Work") href = "/#examples"
                  if (link === "About") href = "/about"
                  if (link === "Pricing") href = "/pricing"
                  if (link === "Blog") href = "/blog"
                  
                  // Services links
                  if (link === "Static Ads") href = "/static-ads"
                  if (link === "Video Ads") href = "/video-ads"
                  if (link === "Meta Ads Management") href = "/meta-ads"
                  if (link === "Google Ads Management") href = "/google-ads"
                  if (link === "SEO") href = "/seo"
                  if (link === "Short-Form Videos") href = "/videos"
                  if (link === "UGC Videos") href = "#"
                  if (link === "Instagram Growth") href = "/instagram-growth"
                  if (link === "Email Design") href = "/email-design"
                  // Support links
                  if (link === "Help Center") href = "/help"
                  if (link === "Contact Us") href = "/contact"
                  if (link === "Privacy Policy") href = "/privacy"
                  if (link === "Terms of Service") href = "/terms"
                  
                  return (
                    <li key={link}>
                      <Link href={href} className="text-blue-100 hover:text-[#3FA9F5] transition-colors text-sm">
                        {link}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
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
