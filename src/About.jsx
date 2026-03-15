import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '2', label: 'Établissements', icon: '🏛️' },
  { value: '50+', label: 'Plats au Menu', icon: '🍽️' },
  { value: '100%', label: 'Produits Frais', icon: '🌿' },
  { value: '★★★★★', label: 'Satisfaction Client', icon: '⭐' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="apropos" ref={ref} style={{
      padding: '100px 2rem',
      background: 'var(--beige)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease',
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#a08c3a', fontWeight: '700', marginBottom: '0.75rem' }}>
            Notre Histoire
          </p>
          <h2 className="section-title">Bienvenue au Jasmin</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Un lieu où la gastronomie rencontre l'élégance</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.9s ease 0.2s',
          }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--teal-dark)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
              Une Cuisine de Passion
            </h3>
            <p style={{ lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '1rem', fontSize: '1.05rem' }}>
              Le Jasmin est né d'une passion profonde pour la gastronomie et l'hospitalité. Depuis notre ouverture, nous nous engageons à offrir une expérience culinaire d'exception, alliant des saveurs méditerranéennes authentiques à des techniques modernes.
            </p>
            <p style={{ lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Nos deux établissements — à <strong style={{ color: 'var(--teal)' }}>Annaba (Saint Cloud)</strong> et à <strong style={{ color: 'var(--teal)' }}>Guelma</strong> — partagent la même philosophie : des produits frais, une cuisine faite avec amour et un service irréprochable.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Ingrédients frais sélectionnés chaque jour', 'Recettes maison et créations originales', 'Service attentionné et cadre élégant', 'Ambiance chaleureuse pour tous les occasions'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
                  <span style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.9s ease 0.3s',
            position: 'relative',
          }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              aspectRatio: '4/3',
            }}>
              <img
                src="/public/images/hero1.jpg"
                alt="Intérieur du restaurant Le Jasmin"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, var(--gold), var(--teal-light))',
              borderRadius: '12px',
              zIndex: -1,
              opacity: 0.3,
            }} />
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              border: '3px solid var(--gold)',
              borderRadius: '12px',
              opacity: 0.4,
            }} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0.5s',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '2rem 1rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid rgba(160,140,58,0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: 'var(--teal)', marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}