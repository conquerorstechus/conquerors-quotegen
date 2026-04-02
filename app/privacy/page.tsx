import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: March 9, 2026</p>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              At Conquerors Digital ({"\"Conquerors,\" \"we,\" \"us,\""} or {"\"our\""}) we respect your privacy and are committed to protecting it through compliance with this policy. This policy describes the types of information we collect from you and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We collect information you provide directly to us, such as:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Name, email address, and phone number</li>
              <li>Billing and payment information</li>
              <li>Business information and company details</li>
              <li>Communications you send to us</li>
              <li>Information provided through contact forms and surveys</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700">
              We may share your information with third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700">
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this policy from time to time. We will notify you of material changes by updating the {"\"Last updated\""} date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy or our privacy practices, please contact us at 
              contact@conquerorstech.us or visit our Contact page.
            </p>
          </section>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
            <Link href="/#footer">← Back</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
