'use client'

import { Breadcrumbs } from '@/components/breadcrumbs'

export default function TermsOfServicePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service', href: '/terms' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Terms of Service</h1>
          <p className="text-xl text-slate-300 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing or using the Baker Air Inc. website (bakerairinc.com) or engaging our HVAC
              services, you agree to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Services</h2>
            <p className="text-slate-600 mb-4">
              Baker Air Inc. provides heating, ventilation, and air conditioning (HVAC) services including:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>HVAC system installation and upgrades</li>
              <li>Repair and maintenance services</li>
              <li>Indoor air quality solutions</li>
              <li>Preventative maintenance programs</li>
              <li>Emergency repair services</li>
            </ul>
            <p className="text-slate-600 mb-6">
              All services are provided in accordance with California contractor licensing requirements.
              Our California Contractor License number is #1098493.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Service Area</h2>
            <p className="text-slate-600 mb-6">
              We provide services to the Temecula Valley area, including Temecula, Menifee, Wildomar,
              Winchester, and Murrieta, California. Service availability outside these areas is
              subject to our discretion and may incur additional fees.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Estimates and Pricing</h2>
            <p className="text-slate-600 mb-4">
              Our pricing terms are as follows:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>We provide free estimates for most services</li>
              <li>All estimates are valid for 30 days unless otherwise stated</li>
              <li>Final pricing may vary based on actual work required</li>
              <li>Additional work beyond the original estimate requires customer approval</li>
              <li>Payment is due upon completion of services unless other arrangements are made</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Scheduling and Cancellations</h2>
            <p className="text-slate-600 mb-4">
              Regarding appointments and scheduling:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>We strive to arrive within the scheduled time window</li>
              <li>We will contact you if delays occur</li>
              <li>Please provide 24 hours notice for appointment cancellations</li>
              <li>Repeated no-shows may result in service restrictions</li>
              <li>Emergency services are subject to availability</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Warranties</h2>
            <p className="text-slate-600 mb-4">
              Our warranty coverage includes:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Labor warranty on all work performed (duration varies by service type)</li>
              <li>Manufacturer warranties on equipment and parts as applicable</li>
              <li>Warranty claims must be reported promptly</li>
              <li>Warranties do not cover damage from misuse, neglect, or unauthorized modifications</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Specific warranty terms will be provided in writing for each job.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Customer Responsibilities</h2>
            <p className="text-slate-600 mb-4">
              As our customer, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Provide accurate information about your HVAC system and service needs</li>
              <li>Ensure safe access to equipment and work areas</li>
              <li>Secure pets during service visits</li>
              <li>Be present (or have an authorized adult present) during service appointments</li>
              <li>Pay for services rendered in a timely manner</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              To the fullest extent permitted by law, Baker Air Inc. shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from your
              use of our services or website. Our total liability for any claim shall not exceed
              the amount paid for the specific service giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Website Use</h2>
            <p className="text-slate-600 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit harmful code or interfere with website operation</li>
              <li>Reproduce or distribute website content without permission</li>
              <li>Submit false or misleading information through forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Intellectual Property</h2>
            <p className="text-slate-600 mb-6">
              All content on this website, including text, graphics, logos, and images, is the
              property of Baker Air Inc. or its content suppliers and is protected by copyright
              and other intellectual property laws. You may not use our content without express
              written permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Dispute Resolution</h2>
            <p className="text-slate-600 mb-6">
              Any disputes arising from these terms or our services shall be resolved through
              good-faith negotiation. If negotiation fails, disputes shall be submitted to
              binding arbitration in Riverside County, California, in accordance with California
              law. You agree to waive any right to a jury trial or to participate in a class action.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Changes to Terms</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of our services
              after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Severability</h2>
            <p className="text-slate-600 mb-6">
              If any provision of these Terms of Service is found to be unenforceable or invalid,
              that provision shall be limited or eliminated to the minimum extent necessary, and
              the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-700 font-semibold">Baker Air Inc.</p>
              <p className="text-slate-600">California Contractor License #1098493</p>
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
