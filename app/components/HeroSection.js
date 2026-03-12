'use client';

export default function HeroSection({ id, title, subtitle, buttons }) {
  return (
    <section
      id={id}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '100px',
        textAlign: 'center',
        position: 'relative',
        backgroundImage: `url(/${id}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)',
        zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 52px)',
          fontWeight: '600',
          color: 'white',
          marginBottom: '8px',
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '18px',
            color: 'white',
            opacity: 0.9,
            marginBottom: '32px',
          }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              style={{
                padding: '14px 36px',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                minWidth: '200px',
                background: btn.type === 'secondary' ? 'rgba(100,100,100,0.6)' : 'rgba(255,255,255,0.9)',
                color: btn.type === 'secondary' ? 'white' : 'black',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
