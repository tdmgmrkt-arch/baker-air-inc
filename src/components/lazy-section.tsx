'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'

// Loading skeleton component
function SectionSkeleton({ height = '400px' }: { height?: string }) {
  return (
    <div
      className="animate-pulse bg-slate-100 rounded-2xl"
      style={{ height, minHeight: height }}
    />
  )
}

// Wrapper for lazy-loaded sections
export function LazySection({
  children,
  fallbackHeight = '400px',
}: {
  children: ReactNode
  fallbackHeight?: string
}) {
  return (
    <Suspense fallback={<SectionSkeleton height={fallbackHeight} />}>
      {children}
    </Suspense>
  )
}

// Example of how to use dynamic imports for heavy components
// Usage: const HeavyComponent = lazyLoad(() => import('./HeavyComponent'))
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  options?: { ssr?: boolean }
) {
  return dynamic(importFn, {
    loading: () => <SectionSkeleton />,
    ssr: options?.ssr ?? true,
  })
}

// Intersection Observer hook for lazy loading on scroll
import { useEffect, useRef, useState } from 'react'

export function useLazyLoad(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// Component that only renders children when visible in viewport
export function LazyOnScroll({
  children,
  fallbackHeight = '400px',
  threshold = 0.1,
}: {
  children: ReactNode
  fallbackHeight?: string
  threshold?: number
}) {
  const { ref, isVisible } = useLazyLoad(threshold)

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : fallbackHeight }}>
      {isVisible ? children : <SectionSkeleton height={fallbackHeight} />}
    </div>
  )
}
