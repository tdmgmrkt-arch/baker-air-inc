'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wrench,
  Clock,
  ShieldCheck,
  BadgeCheck,
  ThumbsUp,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertTriangle,
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

const repairFeatures = [
  {
    icon: Clock,
    title: 'Fast Response',
    description:
      'We understand that a broken AC in California heat is an emergency. We prioritize quick response times.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BadgeCheck,
    title: 'Accurate Diagnostics',
    description:
      'Our skilled technicians use professional diagnostic tools to identify the root cause of your problem.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Parts',
    description:
      'We use only high-quality replacement parts that meet or exceed manufacturer specifications.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ThumbsUp,
    title: 'First-Time Fix',
    description:
      'Our goal is to fix your problem correctly the first time. No unnecessary return visits.',
    gradient: 'from-brand-500 to-amber-500',
  },
]

const commonIssues = [
  {
    issue: 'AC Not Cooling',
    symptoms: 'Warm air blowing, system running constantly, ice on coils',
  },
  {
    issue: 'Strange Noises',
    symptoms: 'Grinding, squealing, banging, or rattling sounds',
  },
  {
    issue: "System Won't Start",
    symptoms: 'No response, tripped breaker, thermostat issues',
  },
  {
    issue: 'Poor Airflow',
    symptoms: 'Weak airflow, uneven temperatures, stuffy rooms',
  },
  {
    issue: 'Refrigerant Leaks',
    symptoms: 'Reduced cooling, hissing sounds, frozen evaporator',
  },
  {
    issue: 'Thermostat Problems',
    symptoms: 'Incorrect readings, system cycling frequently',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Schedule a Visit',
    description:
      "Call us or fill out our contact form. We'll arrange a convenient time to assess your system.",
  },
  {
    step: '2',
    title: 'Expert Diagnosis',
    description:
      'Our certified technician thoroughly inspects your system to identify the exact issue.',
  },
  {
    step: '3',
    title: 'Honest Options',
    description:
      "We explain what's wrong, discuss your options, and provide upfront pricing before any work begins.",
  },
  {
    step: '4',
    title: 'Quality Repair',
    description:
      'Once approved, we complete the repair efficiently using quality parts and proven techniques.',
  },
]

export default function RepairServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/repair.service.webp"
            alt="HVAC Repair Service"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "90% 25%", transform: "scaleX(-1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6">
                  <Wrench className="w-4 h-4" />
                  HVAC Repair Services
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
              >
                Fast Fixes.{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                    No Surprises.
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-200/50 -z-10" />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
              >
                When your HVAC system breaks down, you need a team that
                responds quickly and fixes the problem right. Our skilled
                technicians diagnose and repair issues the first time.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="group min-h-[44px]" asChild>
                  <Link href="/contact-us">
                    Schedule a Repair
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="min-h-[44px]" asChild>
                  <a href="tel:9513480686">
                    <Phone className="mr-2 h-5 w-5" />
                    (951) 348-0686
                  </a>
                </Button>
              </motion.div>

              {/* Mobile-only CTA card - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden mt-8"
              >
                <div className="bento-card p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 p-0.5">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-brand-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Need a Repair?
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    We&apos;re just a call away. Fast, reliable service.
                  </p>
                  <a
                    href="tel:9513480686"
                    className="inline-flex items-center gap-2 text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors min-h-[44px]"
                  >
                    <Phone className="h-5 w-5" />
                    (951) 348-0686
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop-only CTA card - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-3xl blur-2xl" />
              <div className="relative bento-card p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-0.5">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <Wrench className="h-9 w-9 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Need a Repair?
                </h3>
                <p className="text-slate-600 mb-6">
                  We&apos;re just a call away. Fast, reliable service to get
                  your system running again.
                </p>
                <a
                  href="tel:9513480686"
                  className="inline-flex items-center gap-2 text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  (951) 348-0686
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              The Baker Air Difference
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              You deserve honest answers and real solutions - not guesses or
              sales pitches.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {repairFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bento-card p-8 text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                Common Problems
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Issues We{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Solve Daily
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Don&apos;t let a minor issue become a major problem. If you
                notice any of these symptoms, give us a call.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="bento-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Don&apos;t Wait Until It&apos;s Too Late
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Many HVAC problems start small but can escalate quickly.
                      If your system is acting unusual, it&apos;s worth
                      getting it checked.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              {commonIssues.map((item) => (
                <motion.div
                  key={item.issue}
                  variants={fadeInUp}
                  className="bento-card p-6"
                >
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.issue}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    <span className="font-medium text-slate-700">Symptoms:</span>{' '}
                    {item.symptoms}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6"
            >
              Our Process
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              How It Works
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 -translate-x-1/2 z-0" />
                )}
                <div className="relative bento-card p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  )
}
