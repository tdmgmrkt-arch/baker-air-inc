'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Calendar,
  Percent,
  ClipboardCheck,
  Snowflake,
  Flame,
  DollarSign,
  Clock,
  Bell,
  ArrowRight,
  Phone,
  CheckCircle2,
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

const membershipBenefits = [
  {
    icon: Calendar,
    title: '2 Visits Per Year',
    description:
      'Comprehensive seasonal tune-ups to keep your system running at peak efficiency year-round.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bell,
    title: 'Priority Booking',
    description:
      'Skip the wait during busy seasons. Members get priority scheduling for all service calls.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Clock,
    title: 'Service Reminders',
    description:
      "Never miss a maintenance appointment. We'll remind you when it's time for your seasonal checkup.",
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Percent,
    title: '15% Discount',
    description:
      'Save 15% on all repairs and replacements. The savings add up quickly over time.',
    gradient: 'from-brand-500 to-amber-500',
  },
  {
    icon: ClipboardCheck,
    title: '26-Point AC Tune-Up',
    description:
      'Thorough inspection and professional cleaning to maximize cooling efficiency.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: DollarSign,
    title: '$97 Service Fee Waived',
    description:
      'Your membership includes waived diagnostic fees - a value that pays for itself.',
    gradient: 'from-amber-500 to-orange-500',
  },
]

const acTuneUpChecklist = [
  'Inspect and clean condenser coils',
  'Check refrigerant levels',
  'Test capacitors and contactors',
  'Inspect electrical connections',
  'Clean or replace air filter',
  'Check thermostat calibration',
  'Inspect ductwork for leaks',
  'Test system performance',
  'Lubricate moving parts',
  'Check drain lines',
  'Inspect blower components',
  'Verify safety controls',
  'Measure airflow',
]

const heatingChecklist = [
  'Inspect heat exchanger',
  'Clean burner assembly',
  'Check gas connections',
  'Test ignition system',
  'Inspect flue and venting',
  'Check thermostat operation',
  'Test safety controls',
  'Lubricate motor bearings',
  'Inspect electrical connections',
]

const benefits = [
  {
    title: 'Lower Energy Bills',
    description:
      'A well-maintained system runs more efficiently, using less energy to heat and cool your home.',
  },
  {
    title: 'Fewer Breakdowns',
    description:
      'Catching small issues before they become big problems means fewer unexpected repair bills.',
  },
  {
    title: 'Extended Equipment Life',
    description:
      "Regular maintenance can add years to your HVAC system's lifespan, delaying costly replacements.",
  },
  {
    title: 'Better Air Quality',
    description:
      'Clean filters and components mean cleaner air circulating throughout your home.',
  },
]

export default function PreventativeMaintenancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/comfy.club.webp"
            alt="HVAC Maintenance"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "90% 12%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start lg:pt-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="lg:pt-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  Preventative Maintenance
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
              >
                Comfort That{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                    Lasts.
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-200/50 -z-10" />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
              >
                Proactive maintenance keeps your system running efficiently,
                prevents unexpected breakdowns, and extends equipment life.
                Join The Comfy Club for year-round peace of mind.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="group min-h-[44px]" asChild>
                  <Link href="/contact-us">
                    Join The Comfy Club
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

              {/* Mobile-only Comfy Club card - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden mt-8"
              >
                <div className="rounded-2xl overflow-hidden">
                  <div className="bg-brand-500 text-white text-center py-2.5 px-4">
                    <p className="font-semibold text-sm tracking-wide">
                      The Comfy Club Membership
                    </p>
                  </div>
                  <div className="bg-slate-800 p-6">
                    <div className="space-y-2.5 mb-5">
                      {[
                        '2 visits per year',
                        'Priority booking',
                        '15% discount on repairs',
                        '$97 service fee waived',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-brand-400 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-brand-500 hover:bg-brand-600 min-h-[44px]" asChild>
                      <Link href="/contact-us">
                        Become a Member
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop-only Comfy Club card - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden">
                {/* Premium Badge Banner */}
                <div className="bg-brand-500 text-white text-center py-3 px-4">
                  <p className="font-semibold tracking-wide">
                    Keep Your Buns Comfy All Year Long
                  </p>
                </div>

                {/* Hero Card with Background */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-10">
                  {/* Background texture overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('/home.hero.webp')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90" />

                  <div className="relative text-center">
                    {/* Logo */}
                    <div className="relative w-32 h-24 mx-auto mb-4">
                      <Image
                        src="/baker.logo.webp"
                        alt="Baker Air Inc."
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
                      The Comfy Club
                    </h3>

                    {/* Benefits list */}
                    <div className="space-y-3 text-left max-w-xs mx-auto mb-8">
                      {[
                        '2 visits per year',
                        'Priority booking & service reminders',
                        '15% discount on repairs',
                        '26-point AC tune-up included',
                        '$97 service fee waived',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand-400 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-brand-500 hover:bg-brand-600" size="lg" asChild>
                      <Link href="/contact-us">
                        Become a Member
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
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
              Membership Perks
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Everything You Get
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              The Comfy Club membership is designed to save you money,
              prevent headaches, and keep your home comfortable year-round.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {membershipBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bento-card p-8 group"
              >
                <div
                  className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seasonal Checkups */}
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
              What&apos;s Included
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Seasonal Checkups
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Our thorough seasonal maintenance ensures your system is ready
              for summer heat or winter cold.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AC Tune-Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <Snowflake className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    26-Point AC Tune-Up
                  </h3>
                  <p className="text-slate-600">Summer Preparation</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {acTuneUpChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-cyan-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heating Tune-Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-amber-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <Flame className="h-6 w-6 text-brand-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    18-Point Heating Tune-Up
                  </h3>
                  <p className="text-slate-600">Winter Preparation</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {heatingChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-brand-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Desktop-only image - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
              <div className="relative bento-card p-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <Image
                    src="/bakerairmascotinspection.webp"
                    alt="Baker Air Mascot Preventive Maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

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
                <Sparkles className="w-4 h-4" />
                Why Maintenance Matters
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Stay Ahead of{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Costly Repairs
                </span>
              </motion.h2>

              {/* Mobile-only image - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden my-6"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/bakerairmascotinspection.webp"
                    alt="Baker Air Mascot Preventive Maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Routine inspections, detailed cleanings, and precise tuning
                maximize efficiency and extend equipment life.
              </motion.p>

              <motion.div variants={stagger} className="space-y-4 lg:space-y-6">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 min-h-[44px] rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
