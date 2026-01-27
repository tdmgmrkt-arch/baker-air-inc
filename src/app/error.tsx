'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw, Phone } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        {/* Error Icon */}
        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-8">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact us if the problem persists.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f47b52] text-white font-semibold rounded-xl hover:bg-[#e06a42] transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 mb-4">Need immediate assistance?</p>
          <a
            href="tel:9513480686"
            className="inline-flex items-center gap-2 text-[#f47b52] font-semibold hover:underline"
          >
            <Phone className="w-5 h-5" />
            Call (951) 348-0686
          </a>
        </div>
      </div>
    </div>
  )
}
