import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  Clock,
  Phone,
  Sparkles,
  Thermometer,
  Wrench,
  Shield,
  Wind,
  Sun,
  Snowflake,
  Zap,
  Home,
  Leaf,
  Gauge,
  AlertTriangle,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { getAllPosts, formatPublishDate, type BlogIconName } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'HVAC Tips & Local Guides for Temecula Valley Homeowners',
  description:
    'Practical HVAC advice from Baker Air — AC repair troubleshooting, installation guides, energy-saving tips, and indoor air quality resources for Temecula, Murrieta, Menifee, and Winchester homeowners.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Baker Air Blog | HVAC Tips for the Temecula Valley',
    description:
      'Straight-talking HVAC advice for homeowners in Temecula, Murrieta, Menifee, Wildomar, Winchester, and Lake Elsinore.',
    url: 'https://bakerairinc.com/blog',
    type: 'website',
  },
}

const iconMap: Record<BlogIconName, React.ComponentType<{ className?: string }>> = {
  Thermometer,
  Wrench,
  Shield,
  Wind,
  Sun,
  Snowflake,
  Zap,
  Home,
  Leaf,
  Gauge,
  AlertTriangle,
}

const categoryColors: Record<string, string> = {
  'Repairs & Troubleshooting': 'from-brand-500 to-brand-600',
  'Installation & Buying': 'from-navy-700 to-navy-900',
  Maintenance: 'from-emerald-500 to-teal-600',
  'Indoor Air Quality': 'from-sky-500 to-cyan-600',
  'Local Guides': 'from-amber-500 to-orange-500',
  'Energy & Efficiency': 'from-violet-500 to-purple-600',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Baker Air Blog',
    description:
      'HVAC tips, local guides, and homeowner advice from Baker Air Inc. serving the Temecula Valley.',
    url: 'https://bakerairinc.com/blog',
    publisher: {
      '@type': 'HVACBusiness',
      name: 'Baker Air Inc.',
      url: 'https://bakerairinc.com',
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://bakerairinc.com/blog/${p.slug}`,
      datePublished: p.publishDate,
      dateModified: p.publishDate,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-brand-400 [&_span[aria-current]]:text-white">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span className="uppercase tracking-widest text-xs font-semibold text-white/90">
                The Baker Air Blog
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white mb-6 text-balance">
              HVAC advice built for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                {' '}
                Temecula Valley homes
              </span>
              .
            </h1>

            <p className="text-lg lg:text-xl text-slate-300/80 leading-relaxed max-w-2xl">
              Straight-talking tips, seasonal checklists, and local buying guides from a
              family-owned HVAC team that works these zip codes every day — Temecula, Murrieta,
              Menifee, Wildomar, Winchester, and Lake Elsinore.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-brand-600">
                Latest post
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 lg:mb-14 flex-wrap gap-4">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-4">
                  <span className="uppercase tracking-widest text-[10px] font-bold">
                    More Articles
                  </span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tighter">
                  Guides, checklists & explainers
                </h2>
              </div>
              <p className="text-slate-500 max-w-md">
                Filed by our technicians and updated as our Temecula Valley homes change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-8 lg:p-14 overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  Have a question our articles didn&apos;t answer?
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Call the Baker Air team direct — we&apos;ll walk you through your options,
                  no pressure, no upsells. Same-day service across the Temecula Valley.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href="tel:9513480686"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  (951) 348-0686
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-500/25"
                >
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeaturedCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number]
}) {
  const Icon = iconMap[post.heroIcon] ?? Thermometer
  const gradient = categoryColors[post.category] ?? 'from-brand-500 to-brand-600'
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500"
    >
      {/* Visual */}
      <div className={`relative bg-gradient-to-br ${gradient} min-h-[280px] lg:min-h-[420px] overflow-hidden`}>
        {post.heroImage ? (
          <>
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt ?? post.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
            <span className={`absolute top-5 left-5 inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} text-white font-bold uppercase tracking-widest text-[10px] shadow-lg`}>
              {post.category}
            </span>
            <div className="absolute bottom-5 right-5 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
              <Icon className="h-7 w-7 text-white" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-10 lg:p-14">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-6 right-6 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Icon className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 text-xs mb-5">
          <span className="inline-flex px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-bold uppercase tracking-widest text-[10px]">
            {post.category}
          </span>
          <span className="text-slate-400 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatPublishDate(post.publishDate)}
          </span>
          <span className="text-slate-400 flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readMinutes} min read
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-brand-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6 text-base lg:text-lg">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Read the full article
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

function PostCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number]
}) {
  const Icon = iconMap[post.heroIcon] ?? Thermometer
  const gradient = categoryColors[post.category] ?? 'from-brand-500 to-brand-600'
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-500"
    >
      <div className={`relative bg-gradient-to-br ${gradient} h-48 overflow-hidden`}>
        {post.heroImage ? (
          <>
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt ?? post.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Icon className="h-10 w-10 text-white" />
              </div>
            </div>
          </>
        )}
        <span className="absolute top-4 left-4 inline-flex px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold uppercase tracking-widest text-[9px] shadow-lg">
          {post.category}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatPublishDate(post.publishDate)}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readMinutes} min
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight leading-snug group-hover:text-brand-600 transition-colors duration-300 line-clamp-3">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
          Read article
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
