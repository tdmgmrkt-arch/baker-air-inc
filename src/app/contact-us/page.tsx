'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const hours = [
  { day: 'Monday', time: '7:00 AM - 5:00 PM' },
  { day: 'Tuesday', time: '7:00 AM - 5:00 PM' },
  { day: 'Wednesday', time: '7:00 AM - 5:00 PM' },
  { day: 'Thursday', time: '7:00 AM - 5:00 PM' },
  { day: 'Friday', time: '7:00 AM - 5:00 PM' },
  { day: 'Saturday', time: '7:00 AM - 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const serviceAreas = [
  'Temecula, CA',
  'Menifee, CA',
  'Wildomar, CA',
  'Winchester, CA',
  'Murrieta, CA',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact.hero.webp"
            alt="Contact Baker Air"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "90% 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-6 tracking-wide">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-[-0.02em]"
            >
              Contact Us
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              Ready to experience the Baker Air difference? Fill out the form
              below or give us a call. We&apos;re here to help with all your
              heating and cooling needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bento-card p-8 lg:p-12 shadow-soft-lg">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                  Request a Free Quote
                </h2>
                <p className="text-slate-500 mb-8">We typically respond within 24 hours.</p>

                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-brand-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(951) 555-0123"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-brand-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">
                      Service Address
                    </h3>

                    {/* Address */}
                    <div className="space-y-2">
                      <Label htmlFor="address1">
                        Street Address <span className="text-brand-500">*</span>
                      </Label>
                      <Input
                        id="address1"
                        name="address1"
                        required
                        placeholder="123 Main Street"
                      />
                    </div>

                    {/* City, State, ZIP */}
                    <div className="grid sm:grid-cols-3 gap-6 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">
                          City <span className="text-brand-500">*</span>
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          required
                          placeholder="Winchester"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">
                          State <span className="text-brand-500">*</span>
                        </Label>
                        <Select defaultValue="California">
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {US_STATES.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">
                          ZIP Code <span className="text-brand-500">*</span>
                        </Label>
                        <Input
                          id="zip"
                          name="zip"
                          required
                          placeholder="92596"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Please describe what we can help you with{' '}
                        <span className="text-brand-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your HVAC needs, any issues you're experiencing, or questions you have..."
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button type="submit" size="lg" variant="primary" className="group w-full sm:w-auto">
                      Submit Request
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <div className="space-y-5">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bento-card p-7"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
                  Contact Information
                </h3>

                <div className="space-y-3">
                  <a
                    href="tel:9513480686"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <Phone className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium tracking-wide">Phone</p>
                      <p className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                        (951) 348-0686
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:office.bakerair@gmail.com"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <Mail className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium tracking-wide">Email</p>
                      <p className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">
                        office.bakerair@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-3 rounded-xl">
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center shadow-sm">
                      <MapPin className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium tracking-wide">Address</p>
                      <p className="font-semibold text-slate-900 text-sm">
                        32675 Ashford Ln
                        <br />
                        Winchester, CA 92596
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-5 border-t border-slate-100/80">
                  <p className="text-xs text-slate-400 font-medium tracking-wide mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=61562574151435#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 hover:scale-105"
                      aria-label="Facebook"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/bakerairinc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-105"
                      aria-label="Instagram"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.yelp.com/biz/baker-air-winchester-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105"
                      aria-label="Yelp"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.67-.8-1.097-1.66l2.77-4.165c.592-.89 1.93-.54 2.033.53l.39 4.063c.05.527-.36.99-.89 1.08l-.21-.28zm-8.566 5.527l-1.31-4.865c-.263-.98.82-1.785 1.678-1.246l4.31 2.712c.88.553.67 1.88-.32 2.01l-4.015.534c-.487.065-.955-.28-1.06-.76l.717-.385zm-3.93-6.85l4.17 2.77c.86.573.54 1.93-.53 2.034l-4.063.388c-.527.05-.99-.36-1.08-.89l.28-.21-1.433-4.995c-.276-.96.8-1.67 1.66-1.097l.996 2zm4.1-7.78c.527-.05.99.36 1.08.89l-.28.21 1.433 4.995c.276.96-.8 1.67-1.66 1.097l-4.17-2.77c-.86-.573-.54-1.93.53-2.034l3.067-.388zm-3.42 14.645l-.39-4.063c-.05-.527.36-.99.89-1.08l.21.28 4.995-1.433c.96-.276 1.67.8 1.097 1.66l-2.77 4.165c-.592.89-1.93.54-2.033-.53z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bento-card p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Clock className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className={`flex justify-between text-sm py-1 ${
                        h.time === 'Closed'
                          ? 'text-slate-400'
                          : 'text-slate-600'
                      }`}
                    >
                      <span className="font-medium">{h.day}</span>
                      <span className="tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Service Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bento-card p-7"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
                  Service Areas
                </h3>

                <div className="space-y-2.5">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                      </div>
                      {area}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bento-card p-6 text-center bg-gradient-to-br from-brand-50/50 to-white"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden bg-white shadow-sm ring-2 ring-brand-100">
                  <Image
                    src="/baker.air.mascot.png"
                    alt="Baker Air Seal of Trust"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Family-owned and operated.
                  <br />
                  Licensed & insured contractor.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-slate-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2!2d-117.08!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzM2LjAiTiAxMTfCsDA0JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Baker Air Inc. Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </section>
    </>
  )
}
