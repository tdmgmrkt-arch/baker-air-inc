'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Phone, Wrench, Shield, Wind, Thermometer } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    name: 'Installation',
    href: '/installation-and-upgrades',
    icon: Thermometer,
  },
  {
    name: 'Repairs',
    href: '/repair-service',
    icon: Wrench,
  },
  {
    name: 'Maintenance',
    href: '/preventative-maintenance',
    icon: Shield,
  },
  {
    name: 'Air Quality',
    href: '/indoor-air-quality',
    icon: Wind,
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/baker.air.mascot.png"
              alt="Baker Air mascot"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-7xl sm:text-8xl font-bold text-brand-500 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            Looks like this page took a vacation. Let us help you find your way back to comfort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact-us">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">
            Or explore our services
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                  <service.icon className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-brand-600 transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm">
            Need immediate assistance? Call us at{' '}
            <a
              href="tel:9513480686"
              className="text-brand-600 font-semibold hover:text-brand-700"
            >
              (951) 348-0686
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
