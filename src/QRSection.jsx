import React from 'react'

export default function QRSection() {
  // Utilise ton IP locale
  const menuUrl = encodeURIComponent('http://192.168.100.15:5173/#menu')
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${menuUrl}&color=4e5c31&bgcolor=f5f0dc`

  return (
    <section id="qrcode" style={{
      padding: '100px 2rem',
      background: 'linear-gradient(135deg, #4e5c31 0%, #3a4524 50%, #252d17 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.04)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(160,140,58,0.08)' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '700', marginBottom: '1rem' }}>
              Menu Digital
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', lineHeight: '1.2', marginBottom: '1.25rem' }}>
              Le Menu dans<br />Votre Poche
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, var(--gold), var(--teal-light))', marginBottom: '1.5rem', borderRadius: '1px' }} />
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', marginBottom: '2rem', fontSize: '1rem' }}>
              Scannez le QR Code avec votre smartphone pour accéder instantanément à notre menu complet. Pratique, rapide et toujours à jour !
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📱', text: 'Ouvrez l\'appareil photo de votre téléphone' },
                { icon: '🎯', text: 'Pointez vers le QR Code' },
                { icon: '✨', text: 'Accédez au menu instantanément' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(160,140,58,0.15)',
                    border: '1px solid rgba(160,140,58,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: 'var(--beige)',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              border: '1px solid rgba(160,140,58,0.3)',
            }}>
              <img src="/Public/images/logo.png" alt="Le Jasmin" style={{ height: '60px', width: 'auto' }} />
              <div style={{ width: '2px', height: '20px', background: 'linear-gradient(180deg, var(--gold), transparent)' }} />

              <div style={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}>
                <img
                  src={qrUrl}
                  alt="QR Code Menu Le Jasmin"
                  width="200"
                  height="200"
                  style={{ display: 'block' }}
                />
              </div>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: 'var(--teal-dark)',
                textAlign: 'center',
                fontStyle: 'italic',
              }}>
                Scannez pour voir le menu
              </p>
              <div style={{
                background: 'linear-gradient(135deg, var(--gold), #c4ac55)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#1a1a1a',
              }}>
                Le Jasmin • Annaba & Guelma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}