'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

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

const values = [
  {
    icon: Heart,
    title: 'Family Values',
    description:
      'Every job we do is a reflection of our family name. We treat your home with the same care we would our own.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description:
      'We show up on time, communicate clearly, and deliver exactly what we promise. No surprises, no gimmicks.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Personal Care',
    description:
      "You're not just a customer to us. We take the time to understand your needs and provide solutions that fit.",
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description:
      'We use premium parts and proven techniques. Our work is done right the first time, guaranteed.',
    gradient: 'from-brand-500 to-amber-500',
  },
]

const commitments = [
  'Honest, upfront pricing with no hidden fees',
  'Thorough explanation of all work performed',
  'Clean, respectful service in your home',
  'Prompt response times and reliable scheduling',
  'Standing behind our work with solid warranties',
  'Continuous training to stay current with technology',
]

const stats = [
  { value: '500+', label: 'Happy Families' },
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Satisfaction' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-200/50 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Family-Owned Since Day One
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
              >
                Our Family{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                    Legacy
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-200/50 -z-10" />
                </span>
              </motion.h1>

              {/* Mobile-only hero image - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden my-6"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 aspect-[4/3]">
                  <Image
                    src="/family.legacy.webp"
                    alt="Baker Air - Family Owned Business"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
              >
                Baker Air Inc. is a family-owned and operated HVAC business
                dedicated to delivering high-quality installation, maintenance,
                and repair services throughout the Temecula Valley.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact-us">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:9513480686">
                    <Phone className="mr-2 h-5 w-5" />
                    (951) 348-0686
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Desktop-only hero image - hidden on mobile (shown inline above) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-3xl blur-2xl" />
              <div className="relative bento-card p-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <Image
                    src="/family.legacy.webp"
                    alt="Baker Air - Family Owned Business"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-600 text-sm font-medium mb-6 shadow-soft"
            >
              What We Stand For
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Our Core Values
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              These aren&apos;t just words on a page - they&apos;re the principles
              that guide every interaction and every job we take on.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bento-card p-8 text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <value.icon className={`h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6"
              >
                Our Promise
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Our Commitment{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  To You
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                When you choose Baker Air, you&apos;re choosing a partner who
                genuinely cares about your comfort and satisfaction. Here&apos;s
                what you can always expect from us:
              </motion.p>

              <motion.div variants={stagger} className="space-y-4">
                {commitments.map((commitment) => (
                  <motion.div
                    key={commitment}
                    variants={fadeInUp}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{commitment}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bento-card p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:9513480686"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                      <Phone className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="text-lg font-semibold text-slate-900">
                        (951) 348-0686
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:office.bakerair@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                      <Mail className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="text-lg font-semibold text-slate-900">
                        office.bakerair@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="text-lg font-semibold text-slate-900">
                        32675 Ashford Ln
                        <br />
                        Winchester, CA 92596
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm text-slate-500 text-center">
                    Licensed & Insured HVAC Contractor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-brand-50 via-white to-brand-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-500/10 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeInUp}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-0.5"
            >
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-brand-500" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Ready to Experience the{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                Baker Air Difference?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Join the many families in the Temecula Valley who trust Baker Air
              for their heating and cooling needs. Contact us today for a free
              quote.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 text-white"
                asChild
              >
                <Link href="/contact-us">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-brand-50 hover:border-brand-300"
                asChild
              >
                <a href="tel:9513480686">
                  <Phone className="mr-2 h-5 w-5 text-brand-500" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
