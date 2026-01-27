import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'About Baker Air Inc. - Family-Owned HVAC Company'
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
              backgroundColor: 'rgba(244,123,82,0.2)',
              padding: '12px 24px',
              borderRadius: '50px',
              marginBottom: '30px',
            }}
          >
            <div style={{ fontSize: '24px' }}>👨‍👩‍👧‍👦</div>
            <span style={{ color: '#f47b52', fontSize: '18px', fontWeight: '600' }}>
              Family-Owned Since Day One
            </span>
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
            }}
          >
            About
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
            Baker Air
          </div>

          {/* Values */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              color: '#94a3b8',
              fontSize: '20px',
            }}
          >
            <span>Trusted</span>
            <span>•</span>
            <span>Reliable</span>
            <span>•</span>
            <span>Professional</span>
          </div>

          {/* Bottom branding */}
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
            <span>500+ Happy Families</span>
            <span>•</span>
            <span>15+ Years Experience</span>
            <span>•</span>
            <span>Temecula Valley</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
