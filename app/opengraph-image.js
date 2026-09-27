import { ImageResponse } from 'next/og';
import { content } from '@/lib/site';

export const alt = 'Northvane Defence Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#07090c',
          color: '#e9edf1',
          backgroundImage: 'radial-gradient(circle at 85% 50%, rgba(217,164,65,0.18), transparent 45%)',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: '#d9a441' }}>NORTHVANE DEFENCE SYSTEMS</div>
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, maxWidth: 900 }}>{content.tagline}</div>
        <div style={{ fontSize: 24, color: '#8b95a1' }}>Sensing · Autonomy · Secure communications · Space</div>
      </div>
    ),
    size,
  );
}
