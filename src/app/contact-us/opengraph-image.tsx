import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Contact Baker Air Inc. - Get a Free HVAC Quote'
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
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(34,197,94,0.2)',
              padding: '12px 24px',
              borderRadius: '50px',
              marginBottom: '30px',
            }}
          >
            <div style={{ fontSize: '24px' }}>📞</div>
            <span style={{ color: '#4ade80', fontSize: '18px', fontWeight: '600' }}>
              Free Estimates
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Get Your Free
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#f47b52',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '30px',
            }}
          >
            HVAC Quote
          </div>

          {/* Phone number */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              backgroundColor: 'rgba(244,123,82,0.15)',
              padding: '16px 32px',
              borderRadius: '16px',
              border: '2px solid rgba(244,123,82,0.3)',
            }}
          >
            <span style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
              (951) 348-0686
            </span>
          </div>

          {/* Bottom branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <span style={{ color: '#f47b52', fontSize: '24px', fontWeight: 'bold' }}>
              BAKER AIR
            </span>
            <span style={{ color: '#64748b' }}>|</span>
            <span style={{ color: '#64748b', fontSize: '18px' }}>
              Temecula • Menifee • Murrieta • Winchester
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
