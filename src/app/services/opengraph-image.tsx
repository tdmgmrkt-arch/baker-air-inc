import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'HVAC Services - Baker Air Inc.'
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
        {/* Decorative elements */}
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#f47b52',
              marginBottom: '20px',
            }}
          >
            BAKER AIR
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '40px',
            }}
          >
            Our HVAC Services
          </div>

          {/* Services grid */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            {[
              { emoji: '🏠', label: 'Installation' },
              { emoji: '🔧', label: 'Repairs' },
              { emoji: '🛡️', label: 'Maintenance' },
              { emoji: '💨', label: 'Air Quality' },
            ].map((service) => (
              <div
                key={service.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '24px 32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span style={{ fontSize: '36px' }}>{service.emoji}</span>
                <span style={{ color: '#e2e8f0', fontSize: '18px', fontWeight: '600' }}>
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              color: '#64748b',
              fontSize: '18px',
            }}
          >
            Serving the Temecula Valley
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
