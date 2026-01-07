'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Thermometer,
  Wrench,
  Shield,
  Wind,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    title: 'Installation & Upgrades',
    description:
      'From central AC to ductless mini-splits, we install systems tailored to your home\'s unique needs. Energy-efficient options that save you money long-term.',
    href: '/installation-and-upgrades',
    icon: Thermometer,
    gradient: 'from-cyan-500 to-blue-500',
    features: [
      'Central AC Systems',
      'Mini-Split Installation',
      'Furnace Replacement',
      'Smart Thermostats',
    ],
  },
  {
    title: 'Repair Service',
    description:
      'Fast, reliable repairs when you need them most. Our technicians diagnose problems accurately and fix them right the first time.',
    href: '/repair-service',
    icon: Wrench,
    gradient: 'from-brand-500 to-brand-600',
    features: [
      'Same-Day Service',
      'Accurate Diagnostics',
      'Quality Parts',
      'Fair Pricing',
    ],
  },
  {
    title: 'Preventative Maintenance',
    description:
      'Keep your system running at peak efficiency with regular maintenance. Join The Comfy Club for exclusive member benefits.',
    href: '/preventative-maintenance',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      '2 Visits Per Year',
      'Priority Booking',
      '15% Repair Discount',
      '$97 Service Fee Waived',
    ],
  },
  {
    title: 'Indoor Air Quality',
    description:
      'Breathe cleaner, healthier air with our advanced filtration and purification solutions. Protect your family from indoor pollutants.',
    href: '/indoor-air-quality',
    icon: Wind,
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Whole-Home Purification',
      'UV Air Treatment',
      'MERV Filtration',
      'Humidity Control',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-6">
                <span className="uppercase tracking-widest text-[10px] font-bold">Our Services</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Complete HVAC Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">
                Your Home
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-500 mb-8 leading-relaxed"
            >
              From installations to repairs, maintenance to air quality improvements,
              Baker Air provides comprehensive HVAC services to keep your family
              comfortable year-round.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 px-6 py-3 min-h-[44px] bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 ease-out shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:9513480686"
                className="group inline-flex items-center gap-2.5 px-6 py-3 min-h-[44px] bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                (951) 348-0686
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 hover:scale-[1.01] overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />

                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8 pt-6 border-t border-slate-100">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <div className="w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-2.5 w-2.5 text-brand-600" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-slate-100 text-slate-700 font-semibold text-sm rounded-lg hover:bg-brand-50 hover:text-brand-600 hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-6">
                <span className="uppercase tracking-widest text-[10px] font-bold">Why Baker Air</span>
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Family-Owned Service You Can{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">
                  Trust
                </span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                We&apos;re not just another HVAC company. We&apos;re your neighbors,
                committed to keeping local families comfortable with honest service
                and fair pricing.
              </p>

              <div className="space-y-4">
                {[
                  'Licensed & Insured Technicians',
                  'Upfront, Transparent Pricing',
                  'Same-Day Service Available',
                  'Quality Parts & Workmanship',
                  '100% Satisfaction Guarantee',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-brand-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Ambient glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-600/5 rounded-3xl blur-3xl scale-110" />

              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/80 shadow-2xl shadow-slate-900/10">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
                <div className="relative text-center">
                  <div className="relative w-24 h-20 mx-auto mb-6">
                    <Image
                      src="/baker.logo.webp"
                      alt="Baker Air"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    Ready to Get Started?
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Free estimates, no obligation. Let us help you find the right solution.
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 min-h-[44px] bg-brand-500 hover:bg-brand-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/25"
                  >
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
