import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Phone,
  User,
  Tag,
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
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  formatPublishDate,
  type BlogIconName,
} from '@/lib/blog-posts'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article not found' }
  const url = `https://bakerairinc.com/blog/${post.slug}`
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author ?? 'The Baker Air Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
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

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)
  const Icon = iconMap[post.heroIcon] ?? Thermometer
  const gradient = categoryColors[post.category] ?? 'from-brand-500 to-brand-600'
  const url = `https://bakerairinc.com/blog/${post.slug}`

  const postingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    articleSection: post.category,
    keywords: post.primaryKeyword,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: post.author ?? 'The Baker Air Team',
      url: 'https://bakerairinc.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Baker Air Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bakerairinc.com/baker.logo.webp',
      },
    },
    image: 'https://bakerairinc.com/baker.logo.webp',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r ${gradient} opacity-10 rounded-full blur-[120px]`} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-brand-400 [&_span[aria-current]]:text-white">
            <Breadcrumbs
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} text-white font-bold uppercase tracking-widest text-[10px] shadow-lg`}>
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] text-white mb-8 text-balance leading-[1.05] max-w-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-medium">{post.author ?? 'The Baker Air Team'}</span>
            </div>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-400" />
              {formatPublishDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" />
              {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero image */}
          <div className={`relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-br ${gradient} h-72 lg:h-[480px] shadow-2xl`}>
            {post.heroImage ? (
              <>
                <Image
                  src={post.heroImage}
                  alt={post.heroImageAlt ?? post.title}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                  <Icon className="h-14 w-14 lg:h-16 lg:w-16 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* 2-col: article + sticky sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-8 min-w-0">
              <div
                className="prose-baker"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author + back-to-blog bar */}
              <div className="mt-16 pt-10 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-0.5">
                        Written by
                      </p>
                      <p className="font-bold text-slate-900">
                        {post.author ?? 'The Baker Air Team'}
                      </p>
                      <p className="text-sm text-slate-500">
                        Family-owned HVAC contractor · Winchester, CA · CSLB #1098493
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    All Articles
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* Contact CTA */}
                <div className="relative rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-7 overflow-hidden border border-white/10 shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-400 mb-2">
                      Need it fixed today?
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight">
                      Same-day HVAC service across the Temecula Valley
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      Talk to a real Baker Air technician. Honest pricing, no surprises.
                    </p>
                    <div className="space-y-2.5">
                      <a
                        href="tel:9513480686"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg"
                      >
                        <Phone className="h-4 w-4 text-brand-500" />
                        (951) 348-0686
                      </a>
                      <Link
                        href="/contact-us"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-500/25"
                      >
                        Get a Free Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Article meta card */}
                <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">
                    About this article
                  </p>
                  <dl className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500 flex items-center gap-2">
                        <Tag className="h-3.5 w-3.5 text-brand-500" />
                        Topic
                      </dt>
                      <dd className="text-slate-900 font-semibold text-right">
                        {post.category}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-brand-500" />
                        Published
                      </dt>
                      <dd className="text-slate-900 font-semibold text-right">
                        {formatPublishDate(post.publishDate)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500 flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-brand-500" />
                        Read time
                      </dt>
                      <dd className="text-slate-900 font-semibold text-right">
                        {post.readMinutes} min
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Keep reading list */}
                {related.length > 0 && (
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">
                      Keep reading
                    </p>
                    <ul className="space-y-4">
                      {related.map((rp) => (
                        <li key={rp.slug}>
                          <Link
                            href={`/blog/${rp.slug}`}
                            className="group block"
                          >
                            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-600 mb-1">
                              {rp.category}
                            </p>
                            <p className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors line-clamp-3">
                              {rp.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Inline CTA */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 p-8 lg:p-12 overflow-hidden shadow-2xl shadow-brand-500/20">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-lg">
                <p className="text-xs uppercase tracking-widest font-bold text-white/80 mb-2">
                  Need a hand?
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                  Talk to a real Baker Air technician
                </h2>
                <p className="text-white/85 leading-relaxed">
                  Same-day service across Temecula, Murrieta, Menifee, Wildomar, Winchester,
                  and Lake Elsinore. Honest pricing. No surprises.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href="tel:9513480686"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-brand-600 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  (951) 348-0686
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold rounded-xl transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50/80 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 mb-4">
                  <span className="uppercase tracking-widest text-[10px] font-bold">
                    Keep Reading
                  </span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tighter">
                  More from the Baker Air blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                View all articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((rp) => {
                const RIcon = iconMap[rp.heroIcon] ?? Thermometer
                const rGradient = categoryColors[rp.category] ?? 'from-brand-500 to-brand-600'
                return (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className={`relative bg-gradient-to-br ${rGradient} h-40 overflow-hidden`}>
                      {rp.heroImage ? (
                        <>
                          <Image
                            src={rp.heroImage}
                            alt={rp.heroImageAlt ?? rp.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                          <div className="relative w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <RIcon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-600 mb-2">
                        {rp.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight leading-snug group-hover:text-brand-600 transition-colors line-clamp-3 flex-1">
                        {rp.title}
                      </h3>
                      <span className="text-xs text-slate-400 mt-2">
                        {formatPublishDate(rp.publishDate)} · {rp.readMinutes} min
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
