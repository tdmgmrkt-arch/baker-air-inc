'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            backgroundColor: '#f8fafc',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            {/* Error Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fee2e2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Error Message */}
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '1rem',
              }}
            >
              Something Went Wrong
            </h1>
            <p
              style={{
                color: '#64748b',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              We apologize for the inconvenience. A critical error has occurred.
              Please try refreshing the page.
            </p>

            {/* Action Button */}
            <button
              onClick={() => reset()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#f47b52',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.75rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
              </svg>
              Try Again
            </button>

            {/* Contact Info */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e2e8f0',
              }}
            >
              <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                Need immediate assistance?
              </p>
              <a
                href="tel:9513480686"
                style={{
                  color: '#f47b52',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Call Baker Air: (951) 348-0686
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
