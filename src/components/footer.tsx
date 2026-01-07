import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin, Clock, Shield, Award, Wrench } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'AC Installation', href: '/installation-and-upgrades' },
    { name: 'Heating Systems', href: '/installation-and-upgrades' },
    { name: 'Repair Service', href: '/repair-service' },
    { name: 'Maintenance Plans', href: '/preventative-maintenance' },
    { name: 'Air Quality', href: '/indoor-air-quality' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Service Areas', href: '/contact-us' },
    { name: 'Reviews', href: '/about' },
  ],
  areas: ['Temecula', 'Menifee', 'Wildomar', 'Winchester', 'Murrieta', 'Lake Elsinore'],
}

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: 'Same-Day Service' },
  { icon: Award, text: 'Family Owned' },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy-800 to-navy-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/[0.08] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-600/[0.05] rounded-full blur-[80px]" />
      </div>

      {/* Premium CTA Section */}
      <div className="relative border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-brand-600/15 to-brand-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl bg-gradient-to-r from-brand-500/[0.12] to-brand-600/[0.08] border border-brand-500/20 p-8 lg:p-10 backdrop-blur-sm">
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left space-y-3">
                  <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest">
                    Free Estimates
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Ready for Comfort You Can Count On?
                  </h2>
                  <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                    Get expert HVAC service from a family-owned business that treats you like family.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="tel:9513480686"
                    className="group inline-flex items-center gap-2.5 px-5 py-3 bg-white text-slate-900 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4 text-brand-500" />
                    (951) 348-0686
                  </a>
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2 px-5 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 ease-out shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Schedule Online
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-600/15 flex items-center justify-center border border-brand-500/20 group-hover:border-brand-500/40 group-hover:from-brand-500/25 group-hover:to-brand-600/25 transition-all duration-300">
                  <badge.icon className="h-5 w-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
                </div>
                <span className="text-white/90 font-semibold tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Logo & Social - Left Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="group inline-block mb-8">
              <div className="relative w-36 h-28">
                <Image
                  src="/baker.logo.webp"
                  alt="Baker Air"
                  fill
                  className="object-contain drop-shadow-[0_4px_16px_rgba(244,123,82,0.5)] group-hover:drop-shadow-[0_8px_24px_rgba(244,123,82,0.6)] transition-all duration-300"
                />
              </div>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61562574151435#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bakerairinc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/baker-air-winchester-3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
                aria-label="Yelp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.67 4.711zm-6.226-1.792l2.905-4.308a1.072 1.072 0 00-.334-1.545A9.217 9.217 0 0012 3.75c-.167 0-.333.006-.498.016a1.073 1.073 0 00-.813 1.597l2.733 4.596c.57.955 1.952.755 2.247-.223l.266-.934zm-2.166 7.702l-2.266-4.63c-.452-.923-1.86-.82-2.166.159l-.954 3.063a1.073 1.073 0 00.848 1.378 9.181 9.181 0 004.538.03zm-5.86-6.05l4.995 1.433c.96.276 1.342 1.512.576 2.045l-3.92 2.736a1.073 1.073 0 01-1.65-.558 9.195 9.195 0 01-.001-5.656zm1.847-5.358a9.222 9.222 0 00-3.085 3.872 1.073 1.073 0 00.746 1.483l5.036 1.14c.976.222 1.744-.82 1.176-1.63l-2.58-3.656a1.073 1.073 0 00-1.293-.41v.001z" />
                </svg>
              </a>
              <a
                href="https://g.co/kgs/your-google-business"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
                aria-label="Google"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  className="text-slate-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                >
                  Our Service Area
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Right Column */}
          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Contact</h3>
            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:9513480686"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-500/25">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors tracking-tight">
                  (951) 348-0686
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:office.bakerair@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-500/25">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-white/90 group-hover:text-brand-400 transition-colors">
                  office.bakerair@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-white/90">
                  Winchester, CA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* License Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <p className="text-center text-slate-500 text-sm tracking-wide">
            California Contractor License: #1098493
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-white/[0.06] bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <p className="text-center text-slate-500/80 text-sm">
            &copy; {new Date().getFullYear()} Baker Air Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
