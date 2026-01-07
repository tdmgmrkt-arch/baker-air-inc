'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Phone, ChevronDown, Thermometer, Wind, Wrench, Shield, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    name: 'Installation & Upgrades',
    description: 'New AC & heating system installations',
    href: '/installation-and-upgrades',
    icon: Thermometer,
  },
  {
    name: 'Repair Service',
    description: 'Fast, reliable HVAC repairs',
    href: '/repair-service',
    icon: Wrench,
  },
  {
    name: 'Preventative Maintenance',
    description: 'Keep your system running efficiently',
    href: '/preventative-maintenance',
    icon: Shield,
  },
  {
    name: 'Indoor Air Quality',
    description: 'Breathe cleaner, healthier air',
    href: '/indoor-air-quality',
    icon: Wind,
  },
]

const features = [
  { text: 'Licensed & Insured', icon: CheckCircle2 },
  { text: 'Same-Day Service', icon: Clock },
  { text: 'Family Owned', icon: Sparkles },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasMegaMenu: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact-us' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setMegaMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false)
    }, 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900 shadow-lg'
            : 'bg-navy-800'
        }`}
      >
        {/* Top Bar */}
        <div className="border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="hidden md:flex items-center gap-8">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2 text-slate-400/90">
                    <feature.icon className="h-3.5 w-3.5 text-brand-400" />
                    <span className="text-xs font-medium tracking-wide">{feature.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:9513480686"
                className="group flex items-center gap-2.5 text-white font-semibold hover:text-brand-400 transition-colors duration-200 ml-auto"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/20 group-hover:bg-brand-500/30 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-brand-400" />
                </span>
                <span className="tracking-wide">(951) 348-0686</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-20 h-16 flex-shrink-0">
                <Image
                  src="/baker.logo.webp"
                  alt="Baker Air"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(244,123,82,0.3)] group-hover:drop-shadow-[0_4px_12px_rgba(244,123,82,0.4)] transition-all duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={megaMenuRef}>
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={link.hasMegaMenu ? handleMouseEnter : undefined}
                  onMouseLeave={link.hasMegaMenu ? handleMouseLeave : undefined}
                >
                  {link.hasMegaMenu ? (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ease-out ${
                        megaMenuOpen
                          ? 'text-brand-400 bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      }`}
                      onClick={(e) => {
                        // Allow navigation on click, but prevent if just hovering to see menu
                        if (megaMenuOpen) {
                          setMegaMenuOpen(false)
                        }
                      }}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all duration-300 ease-out group"
                    >
                      {link.name}
                      <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all duration-300 ease-out shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-0 right-0 bg-navy-900 border-t border-white/10 shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-6">
                  {/* Services Grid */}
                  <div className="col-span-8">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                      Our Services
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setMegaMenuOpen(false)}
                          className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300 ease-out"
                        >
                          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-300">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-medium text-white text-sm group-hover:text-brand-400 transition-colors duration-200">
                              {service.name}
                            </h3>
                            <p className="text-sm text-slate-400 mt-0.5 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* View All Services Link */}
                    <Link
                      href="/services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="group inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-all duration-200"
                    >
                      View All Services
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* CTA Panel */}
                  <div className="col-span-4">
                    <div className="h-full rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 p-6 flex flex-col justify-between relative overflow-hidden">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-[0.07]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                      </div>
                      {/* Mascot image */}
                      <div className="absolute -top-3 right-6 w-40 h-40">
                        <Image
                          src="/bakermascottaking calls.png"
                          alt=""
                          fill
                          className="object-contain drop-shadow-lg opacity-25"
                        />
                      </div>
                      <div className="relative pr-20">
                        <p className="text-white/80 font-medium text-xs uppercase tracking-wider mb-2">
                          Need Help?
                        </p>
                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                          We&apos;re Here 24/7
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Fast, reliable service when you need it most.
                        </p>
                      </div>
                      <div className="relative mt-5 space-y-2.5">
                        <a
                          href="tel:9513480686"
                          className="group flex items-center justify-center gap-2.5 w-full px-4 py-3 bg-white text-brand-600 font-bold text-sm rounded-lg hover:bg-slate-50 transition-all duration-300 shadow-lg shadow-brand-900/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                          <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          (951) 348-0686
                        </a>
                        <Link
                          href="/contact-us"
                          onClick={() => setMegaMenuOpen(false)}
                          className="group flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                        >
                          Schedule Online
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy-800 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="relative w-16 h-12 flex-shrink-0">
                      <Image
                        src="/baker.logo.webp"
                        alt="Baker Air"
                        fill
                        className="object-contain drop-shadow-[0_2px_8px_rgba(244,123,82,0.3)]"
                      />
                    </div>
                  </Link>
                  <button
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <p className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-4">
                    Menu
                  </p>
                  <div className="space-y-1 mb-8">
                    {navLinks.filter(l => !l.hasMegaMenu).map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:text-brand-400 rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                          <ArrowRight className="h-4 w-4 text-slate-500" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-4">
                    Services
                  </p>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 3) * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <span className="font-medium text-white">{service.name}</span>
                            <p className="text-xs text-slate-400 font-normal">{service.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    {/* View All Services Link */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-3 mt-2 text-sm font-semibold text-brand-400 hover:text-brand-300 rounded-xl hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-white/10 bg-navy-900">
                  <a
                    href="tel:9513480686"
                    className="flex items-center justify-center gap-2 mb-3 px-6 py-3 text-white font-semibold bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-brand-500" />
                    (951) 348-0686
                  </a>
                  <Link
                    href="/contact-us"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-bold text-slate-900 bg-gradient-to-r from-brand-400 to-brand-500 rounded-xl hover:from-brand-500 hover:to-brand-600 transition-all shadow-lg shadow-brand-500/25"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
