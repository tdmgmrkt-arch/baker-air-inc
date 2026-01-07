'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Snowflake,
  Home,
  Building2,
  Layers,
  Thermometer,
  Gauge,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  Zap,
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

const systems = [
  {
    icon: Snowflake,
    title: 'Central AC Condenser',
    description:
      'Works seamlessly with your indoor furnace or air handler to provide efficient, whole-home cooling.',
    features: [
      'Whole-home cooling coverage',
      'Energy-efficient operation',
      'Pairs with existing furnace',
      'Quiet outdoor unit',
    ],
    gradient: 'from-cyan-500 to-blue-500',
    image: '/central.ac.condenser.webp',
  },
  {
    icon: Thermometer,
    title: 'Mini-Split System',
    description:
      'The perfect ductless solution for heating and cooling garages, home additions, or entire homes.',
    features: [
      'No ductwork required',
      'Zone-specific control',
      'High energy efficiency',
      'Whisper-quiet operation',
    ],
    gradient: 'from-brand-500 to-amber-500',
    image: '/mini.split.system.webp',
  },
  {
    icon: Building2,
    title: 'Rooftop Package Unit',
    description:
      'All-in-one heating and cooling system mounted on the roof. Perfect for commercial spaces.',
    features: [
      'Space-saving design',
      'Easy maintenance access',
      'All-in-one system',
      'Commercial-grade reliability',
    ],
    gradient: 'from-violet-500 to-purple-500',
    image: '/rooftop.package.unit.webp',
  },
  {
    icon: Home,
    title: 'Indoor Furnace & Coil',
    description:
      'Compact furnace and evaporator coil combination designed for installation in closets or attics.',
    features: [
      'Compact installation',
      'Year-round comfort',
      'Efficient heating',
      'Closet or attic placement',
    ],
    gradient: 'from-rose-500 to-pink-500',
    image: '/indoor.furnance.coil.webp',
  },
  {
    icon: Layers,
    title: 'Multi-Zone Systems',
    description:
      'Independent temperature control for different rooms or zones in your home.',
    features: [
      'Individual room control',
      'Reduced energy waste',
      'Perfect for large homes',
      'Customizable comfort',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    image: '/multi.zone.systems.webp',
  },
  {
    icon: Gauge,
    title: 'High-Efficiency Upgrades',
    description:
      'Upgrade your existing system to modern, high-efficiency equipment.',
    features: [
      'Lower utility bills',
      'Improved performance',
      'Quieter operation',
      'Environmental benefits',
    ],
    gradient: 'from-amber-500 to-orange-500',
    image: '/highefficiencyupgrades.webp',
  },
]

const benefits = [
  'Free in-home consultations',
  'Competitive, transparent pricing',
  'Licensed and insured technicians',
  'Quality equipment from trusted brands',
  'Professional installation guaranteed',
  'Flexible financing options available',
]

export default function InstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/installation.upgrades.webp"
            alt="HVAC Installation"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "90% 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Installation & Upgrades
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Customized Comfort.{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Built to Perform.
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-200/50 -z-10" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Whether you&apos;re installing a new system or upgrading an
              existing one, we provide expert guidance and professional
              installation tailored to your home&apos;s unique needs.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact-us">
                  Request a Consultation
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
        </div>
      </section>

      {/* Systems Grid - Bento Layout */}
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
              Our Solutions
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              System Options
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              From ductless mini-splits to complete central air systems, we
              install and upgrade equipment to fit your space and budget.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {systems.map((system) => (
              <motion.div
                key={system.title}
                variants={fadeInUp}
                className="bento-card p-0 group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${system.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <system.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {system.title}
                  </h3>

                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {system.description}
                  </p>

                  <ul className="space-y-2">
                    {system.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Desktop-only image - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-3xl blur-2xl" />
              <div className="relative bento-card p-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <Image
                    src="/baker.logo.webp"
                    alt="Professional HVAC Installation"
                    fill
                    className="object-contain p-8"
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
                Why Choose Baker Air
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Installation{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Done Right
                </span>
              </motion.h2>

              {/* Mobile-only image - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden my-6"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-6 aspect-[4/3]">
                  <Image
                    src="/baker.logo.webp"
                    alt="Professional HVAC Installation"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                A properly installed HVAC system can last for decades and save
                you thousands in energy costs. Our certified technicians
                ensure every installation meets the highest standards.
              </motion.p>

              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-2 gap-4"
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-3 min-h-[44px] rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
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
