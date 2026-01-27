'use client'

import { Breadcrumbs } from '@/components/breadcrumbs'

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Privacy Policy</h1>
          <p className="text-xl text-slate-300 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-6">
              Baker Air Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website bakerairinc.com or use our HVAC services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Personal Information</h3>
            <p className="text-slate-600 mb-4">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Fill out our contact form</li>
              <li>Request a quote or service appointment</li>
              <li>Call or email us directly</li>
              <li>Sign up for our newsletter or promotional communications</li>
            </ul>
            <p className="text-slate-600 mb-6">
              This information may include your name, email address, phone number, home address,
              and details about your HVAC system or service needs.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-600 mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or search terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Schedule and perform HVAC services</li>
              <li>Send you quotes, invoices, and service-related communications</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website.
              These technologies help us analyze website traffic, remember your preferences, and improve
              our services. We use Google Analytics and Google Tag Manager to collect and analyze
              website usage data.
            </p>
            <p className="text-slate-600 mb-6">
              You can control cookies through your browser settings. However, disabling cookies may
              limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Service providers who assist us in operating our business</li>
              <li>Professional advisors (lawyers, accountants) as needed</li>
              <li>Law enforcement or government agencies when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-slate-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">California Privacy Rights</h2>
            <p className="text-slate-600 mb-6">
              If you are a California resident, you have additional rights under the California Consumer
              Privacy Act (CCPA), including the right to know what personal information we collect,
              the right to delete your information, and the right to opt out of the sale of your
              personal information. As noted above, we do not sell personal information.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Children&apos;s Privacy</h2>
            <p className="text-slate-600 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-700 font-semibold">Baker Air Inc.</p>
              <p className="text-slate-600">Temecula Valley, CA</p>
              <p className="text-slate-600">Phone: (951) 348-0686</p>
              <p className="text-slate-600">
                Email:{' '}
                <a href="mailto:bakerairinc@yahoo.com" className="text-[#f47b52] hover:underline">
                  bakerairinc@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
