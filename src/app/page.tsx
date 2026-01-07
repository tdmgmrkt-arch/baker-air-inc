'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Star,
  Thermometer,
  Wrench,
  Shield,
  Wind,
  Check,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const services = [
  {
    title: 'Installation',
    description: 'Custom AC & heating systems designed for your home',
    icon: Thermometer,
    href: '/installation-and-upgrades',
  },
  {
    title: 'Repairs',
    description: 'Fast, reliable fixes with honest pricing',
    icon: Wrench,
    href: '/repair-service',
  },
  {
    title: 'Maintenance',
    description: 'Keep your system running at peak efficiency',
    icon: Shield,
    href: '/preventative-maintenance',
  },
  {
    title: 'Air Quality',
    description: 'Breathe cleaner with advanced filtration',
    icon: Wind,
    href: '/indoor-air-quality',
  },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '5', label: 'Cities Served' },
  { value: '24/7', label: 'Support Available' },
  { value: '100%', label: 'Satisfaction' },
]

const areas = ['Temecula', 'Menifee', 'Wildomar', 'Winchester', 'Murrieta']

const reviews = [
  {
    text: "Baker Air fixed our AC the same day we called. Professional, honest, and affordable. Highly recommend!",
    author: "Sarah M.",
    location: "Temecula"
  },
  {
    text: "Best HVAC company in the valley! They installed our new system quickly and the price was very fair.",
    author: "Mike R.",
    location: "Murrieta"
  },
  {
    text: "Incredibly responsive and knowledgeable. They diagnosed our heating issue in minutes. Five stars!",
    author: "Jennifer L.",
    location: "Winchester"
  },
  {
    text: "Family-owned and it shows. They treat you like a neighbor, not just a customer. Great experience!",
    author: "David K.",
    location: "Menifee"
  },
]

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length)
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home.hero.webp"
            alt="HVAC Service"
            fill
            priority
            className="object-cover object-top left"
            style={{ opacity: 0.55 }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-navy-900/90" />
          {/* Ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="uppercase tracking-widest text-xs font-semibold text-white/90">Serving Temecula Valley</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white mb-6 text-balance"
            >
              Quality Heating &<br className="hidden sm:block" />
              Air Services
            </motion.h1>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <span className="text-white/60 text-sm font-medium tracking-wide">
                Rated 4.9 by 500+ local homeowners
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Family-owned HVAC company delivering professional installations,
              expert repairs, and preventative maintenance to keep your home
              comfortable year-round.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-500 text-white text-base font-semibold rounded-xl hover:bg-brand-600 transition-all duration-300 ease-out shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Your Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
              <a
                href="tel:9513480686"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white text-base font-semibold rounded-xl hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-white/70" />
                (951) 348-0686
              </a>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {/* Main Feature Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 lg:row-span-2 group relative bg-white/95 backdrop-blur-xl rounded-2xl p-7 lg:p-8 border border-slate-200/60 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 hover:scale-[1.01]"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <div className="relative h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 group-hover:scale-105 transition-all duration-300">
                  <Thermometer className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  Stay Cool With Baker Air
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                  From new installations to emergency repairs, we&apos;ve got you covered.
                  Our certified technicians deliver honest, reliable service every time.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Licensed & Insured', 'Family Owned', 'Fair Pricing', 'Quality Parts'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-brand-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service Cards */}
            {services.slice(0, 2).map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
                <Link href={service.href} className="relative block h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-3 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                    <service.icon className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}

            {/* Air Quality Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <Link href={services[3].href} className="relative block h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-3 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                  <Wind className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
                  {services[3].title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {services[3].description}
                </p>
              </Link>
            </motion.div>

            {/* Maintenance Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <Link href={services[2].href} className="relative block h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-3 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                  <Shield className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
                  {services[2].title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {services[2].description}
                </p>
              </Link>
            </motion.div>

            {/* Review Carousel Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 group relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/60 shadow-lg shadow-slate-900/5 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <div className="relative flex items-start gap-4">
                <div className="relative">
                  <Image
                    src="/baker.air.mascot.png"
                    alt="Baker Air"
                    width={48}
                    height={48}
                    className="rounded-full ring-2 ring-brand-100 flex-shrink-0"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
                      ))}
                    </div>
                    <span className="uppercase tracking-widest text-[10px] font-bold text-slate-400">Trusted by Families</span>
                  </div>
                  <div className="relative h-[68px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentReview}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <p className="text-slate-600 text-sm mb-1.5 leading-relaxed">
                          &quot;{reviews[currentReview].text}&quot;
                        </p>
                        <p className="text-xs text-slate-400 font-medium">
                          — {reviews[currentReview].author}, {reviews[currentReview].location}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              {/* Navigation */}
              <div className="relative flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div className="flex gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentReview(idx)}
                      className={`min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300`}
                      aria-label={`Go to review ${idx + 1}`}
                    >
                      <span className={`rounded-full transition-all duration-300 ${
                        idx === currentReview ? 'bg-brand-500 w-6 h-2' : 'bg-slate-200 w-2 h-2 hover:bg-slate-300'
                      }`} />
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all duration-200"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all duration-200"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 border border-white/10 overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Ready to get started?</h3>
                  <p className="text-white/60 text-sm">Free estimates, no obligation</p>
                </div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shadow-lg shadow-brand-500/25"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 group-hover:from-brand-600 group-hover:to-brand-500 transition-all duration-500">
                  {stat.value}
                </div>
                <div className="uppercase tracking-widest text-xs font-semibold text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-6">
              <span className="uppercase tracking-widest text-[10px] font-bold">Our Services</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tighter">
              Everything Your Home Needs
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Comprehensive HVAC solutions for every situation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Installation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 group-hover:scale-105 transition-all duration-300">
                    <Thermometer className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Installation & Upgrades
                  </h3>
                </div>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  From central AC to ductless mini-splits, we install systems tailored
                  to your home&apos;s unique needs. Energy-efficient options that save
                  you money long-term.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 pt-6 border-t border-slate-100">
                  {['Central AC Systems', 'Mini-Split Installation', 'Furnace Replacement', 'Smart Thermostats'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-brand-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/installation-and-upgrades"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-sm rounded-lg hover:bg-brand-50 hover:text-brand-600 hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Repair Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 group-hover:scale-105 transition-all duration-300">
                    <Wrench className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Repair Services
                  </h3>
                </div>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Fast, reliable repairs when you need them most. Our technicians
                  diagnose problems accurately and fix them right the first time.
                  No surprises, just honest service.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 pt-6 border-t border-slate-100">
                  {['Same-Day Service', 'Accurate Diagnostics', 'Quality Parts', 'Fair Pricing'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-brand-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/repair-service"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-sm rounded-lg hover:bg-brand-50 hover:text-brand-600 hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-6">
                <MapPin className="h-3.5 w-3.5" />
                <span className="uppercase tracking-widest text-[10px] font-bold">Service Areas</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                Serving the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">
                  Temecula Valley
                </span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Professional HVAC services throughout Riverside County and
                surrounding communities. We&apos;re your neighbors, committed to
                keeping local families comfortable.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-3 min-h-[44px] flex items-center bg-slate-100 text-slate-600 rounded-lg text-sm font-medium border border-slate-200/50 hover:bg-slate-200/50 transition-colors duration-200"
                  >
                    {area}, CA
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-500" />
                  <span className="font-medium">Mon-Sat: 7AM-5PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-500" />
                  <span className="font-medium">(951) 348-0686</span>
                </div>
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
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-brand-50 p-2 border border-brand-100">
                      <Image
                        src="/baker.logo.webp"
                        alt="Baker Air"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">Baker Air Inc.</h3>
                      <p className="text-slate-400 text-sm font-medium">Family-Owned Since Day One</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <MapPin className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm">
                        32675 Ashford Ln<br />
                        Winchester, CA 92596
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-brand-500 hover:bg-brand-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/25"
                  >
                    Get a Free Quote
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
