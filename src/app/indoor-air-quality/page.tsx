'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wind,
  Sparkles,
  Filter,
  Droplets,
  Baby,
  Heart,
  PawPrint,
  Leaf,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertCircle,
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

const pollutants = [
  { name: 'Dust & Dust Mites', icon: Sparkles },
  { name: 'Pollen & Allergens', icon: Leaf },
  { name: 'Pet Dander', icon: PawPrint },
  { name: 'Mold Spores', icon: Droplets },
  { name: 'Bacteria & Viruses', icon: AlertCircle },
  { name: 'Volatile Organic Compounds', icon: Wind },
]

const whoNeeds = [
  {
    icon: Baby,
    title: 'Families with Children',
    description:
      'Children are more vulnerable to poor air quality. Clean air supports healthy development.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Heart,
    title: 'Allergy & Asthma Sufferers',
    description:
      'Reduce triggers that cause sneezing, coughing, and difficulty breathing.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: PawPrint,
    title: 'Pet Owners',
    description:
      'Love your pets without the dander. Advanced filtration captures pet-related allergens.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Leaf,
    title: 'Health-Conscious Homeowners',
    description:
      'Take control of what you breathe. Clean indoor air contributes to better sleep.',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const solutions = [
  {
    title: 'Whole-Home Air Purifiers',
    description:
      'These powerful systems integrate directly with your HVAC system, purifying air as it circulates throughout your home.',
    features: [
      'Integrates with existing HVAC',
      'Covers entire home',
      'Low maintenance',
      'Quiet operation',
    ],
    icon: Wind,
    gradient: 'from-brand-500 to-brand-600',
    overlayColor: 'bg-brand-500/40',
    image: '/wholehomeairpurifier.webp',
  },
  {
    title: 'UV Air Purification',
    description:
      'Ultraviolet germicidal irradiation systems use UV-C light to neutralize airborne pathogens.',
    features: [
      'Kills bacteria & viruses',
      'Prevents mold growth',
      'Chemical-free purification',
      'Works 24/7',
    ],
    icon: Sparkles,
    gradient: 'from-amber-500 to-orange-500',
    overlayColor: 'bg-amber-500/40',
    image: '/uvairpurification.webp',
  },
  {
    title: 'High-Efficiency MERV Filters',
    description:
      'We install MERV-rated filters designed to trap even the smallest airborne particles.',
    features: [
      'Traps tiny particles',
      'Maintains airflow',
      'Various MERV ratings',
      'Easy to replace',
    ],
    icon: Filter,
    gradient: 'from-slate-600 to-slate-700',
    overlayColor: 'bg-slate-600/40',
    image: '/higheffmervfilter.webp',
  },
]

const mervRatings = [
  {
    rating: 'MERV 8-10',
    captures: 'Dust, pollen, mold spores',
    best: 'Standard residential use',
    level: 'Standard',
  },
  {
    rating: 'MERV 11-13',
    captures: 'Fine dust, pet dander, smoke',
    best: 'Allergy sufferers, pet owners',
    level: 'Enhanced',
  },
  {
    rating: 'MERV 14-16',
    captures: 'Bacteria, virus carriers, fine particles',
    best: 'Maximum protection, health concerns',
    level: 'Premium',
  },
]

export default function IndoorAirQualityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/indoor.air.quality.hero.webp"
            alt="Indoor Air Quality"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "80% 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/50 " />
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
                  <Wind className="w-4 h-4" />
                  Indoor Air Quality
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
              >
                Breathe Cleaner.{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                    Feel Better.
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-200/50 -z-10" />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
              >
                The air inside your home can be more polluted than outdoor air.
                Baker Air offers solutions beyond heating and cooling to help
                your family breathe easier.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="group min-h-[44px]" asChild>
                  <Link href="/contact-us">
                    Schedule an Evaluation
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

              {/* Mobile-only pollutants card - Visual Interleaving */}
              <motion.div
                variants={fadeInUp}
                className="block lg:hidden mt-8"
              >
                <div className="bento-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 p-0.5">
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <Wind className="h-5 w-5 text-brand-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Common Indoor Pollutants
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {pollutants.map((pollutant) => (
                      <div
                        key={pollutant.name}
                        className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg min-h-[44px]"
                      >
                        <pollutant.icon className="h-4 w-4 text-brand-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700">
                          {pollutant.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop-only pollutants card - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-3xl blur-2xl" />
              <div className="relative bento-card p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-0.5">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <Wind className="h-7 w-7 text-brand-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Common Indoor Pollutants
                  </h3>
                  <p className="text-slate-600 text-sm">
                    These invisible threats affect your health daily
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {pollutants.map((pollutant) => (
                    <div
                      key={pollutant.name}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                    >
                      <pollutant.icon className="h-4 w-4 text-brand-600" />
                      <span className="text-sm text-slate-700">
                        {pollutant.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
              Why It Matters
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Who Benefits Most?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              We spend up to 90% of our time indoors, where air can be 2-5
              times more polluted than outside.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whoNeeds.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bento-card p-8 text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <item.icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
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
              Our Solutions
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Air Purification Systems
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              We offer multiple solutions to address your air quality
              concerns, from simple filter upgrades to comprehensive systems.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={fadeInUp}
                className="bento-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div
                      className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5`}
                    >
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:flex relative items-center justify-center overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${solution.overlayColor}`} />
                    <solution.icon className="relative h-32 w-32 text-white/80 drop-shadow-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MERV Ratings Section */}
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
                <Filter className="w-4 h-4" />
                Filter Guide
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                High-Efficiency Filters That{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Go the Extra Mile
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Not all filters are created equal. MERV ratings tell you how
                effectively a filter captures particles. We help you choose the
                right filter for your needs.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="bento-card p-6"
              >
                <p className="text-slate-600 text-sm">
                  <strong className="text-slate-900">Pro tip:</strong> Higher
                  isn&apos;t always better. The ideal MERV rating depends on
                  your specific needs and HVAC system. We&apos;ll help you
                  find the perfect balance.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {mervRatings.map((merv, index) => (
                <div
                  key={merv.rating}
                  className="bento-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        index === 0
                          ? 'bg-slate-100'
                          : index === 1
                          ? 'bg-brand-100'
                          : 'bg-brand-200'
                      }`}
                    >
                      <Filter
                        className={`h-7 w-7 ${
                          index === 0
                            ? 'text-slate-600'
                            : index === 1
                            ? 'text-brand-600'
                            : 'text-brand-700'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">
                          {merv.rating}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            index === 0
                              ? 'bg-slate-100 text-slate-600'
                              : index === 1
                              ? 'bg-brand-100 text-brand-600'
                              : 'bg-brand-200 text-brand-700'
                          }`}
                        >
                          {merv.level}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">
                        <strong>Captures:</strong> {merv.captures}
                      </p>
                      <p className="text-brand-600 text-sm font-medium">
                        Best for: {merv.best}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
