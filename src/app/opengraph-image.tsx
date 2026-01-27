import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Baker Air Inc. - Quality HVAC Services in Temecula Valley'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        {/* Decorative gradient circle */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244,123,82,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244,123,82,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          {/* Logo placeholder - using text since we can't easily load images */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#f47b52',
                letterSpacing: '-2px',
              }}
            >
              BAKER AIR
            </div>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            Quality HVAC Services
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Serving the Temecula Valley
          </div>

          {/* Features row */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {['Installation', 'Repairs', 'Maintenance', 'Air Quality'].map((service) => (
              <div
                key={service}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#e2e8f0',
                  fontSize: '20px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#f47b52',
                  }}
                />
                {service}
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              color: '#64748b',
              fontSize: '18px',
            }}
          >
            <span>Family-Owned</span>
            <span>•</span>
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>(951) 348-0686</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
