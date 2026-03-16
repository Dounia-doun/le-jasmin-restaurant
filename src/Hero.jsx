import React, { useEffect, useState } from 'react'

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
    slogan: 'Une Expérience Culinaire Inoubliable',
    sub: 'Saveurs authentiques • Ambiance raffinée • Moments précieux',
  },
  {
    bg: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80',
    slogan: 'L\'Art de Bien Manger',
    sub: 'Plats préparés avec passion, servis avec élégance',
  },
  {
    bg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80',
    slogan: 'Deux Adresses, Une Seule Passion',
    sub: 'Annaba • Guelma — Votre table vous attend',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section id="accueil" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background Images */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${s.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.2s ease',
          transform: i === current ? 'scale(1.03)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '1.2s, 8s',
        }} />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '800px',
        animation: 'fadeInUp 1s ease',
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <img src="/le-jasmin-restaurant/logo.png" alt="Le Jasmin" style={{
            height: '80px',
            width: 'auto',
            filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
          }} />
        </div>

        {/* Slogan */}
        <h1 key={current} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          color: '#ffffff',
          lineHeight: '1.2',
          marginBottom: '1rem',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          animation: 'fadeInUp 0.8s ease',
        }}>
          {slide.slogan}
        </h1>

        {/* Gold line */}
        <div style={{
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #a08c3a, transparent)',
          margin: '1.2rem auto',
        }} />

        <p key={current + 's'} style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'rgba(255,255,255,0.9)',
          letterSpacing: '1px',
          marginBottom: '2.5rem',
          fontWeight: '300',
          animation: 'fadeInUp 1s ease 0.2s both',
        }}>
          {slide.sub}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#menu" style={{
            background: 'linear-gradient(135deg, #a08c3a, #c4ac55)',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: '40px',
            fontSize: '0.95rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            boxShadow: '0 6px 25px rgba(107,124,69,0.45)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 30px rgba(160,140,58,0.6)' }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 25px rgba(160,140,58,0.5)' }}
          >
            Voir le Menu
          </a>
          <a href="#reserver" style={{
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.8)',
            color: '#ffffff',
            padding: '14px 36px',
            borderRadius: '40px',
            fontSize: '0.95rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.borderColor = '#fff' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(255,255,255,0.8)' }}
          >
            Réserver une Table
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '30px' : '10px',
            height: '10px',
            borderRadius: '5px',
            background: i === current ? '#6b7c45' : 'rgba(255,255,255,0.5)',
            border: 'none',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
          }} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        opacity: 0.7,
      }}>
        <span style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Défiler</span>
        <div style={{
          width: '24px',
          height: '38px',
          border: '2px solid rgba(255,255,255,0.6)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: '#fff',
            borderRadius: '2px',
            animation: 'scrollDot 1.5s infinite',
          }} />
        </div>
        <style>{`
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(14px); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  )
}