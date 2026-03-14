import React, { useState } from 'react'

const locations = [
  {
    id: 'annaba',
    city: 'Annaba',
    address: 'Saint Cloud, Annaba',
    phone: '+213 540413000',
    hours: 'Lun–Dim : 11h00 – 23h00',
    desc: 'Notre établissement phare au cœur d\'Annaba, dans le quartier élégant de Saint Cloud. Un cadre raffiné pour vos repas en famille ou entre amis.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24798.73437295894!2d7.742831847059815!3d36.895856977870744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f00ffe8ecdb5c9%3A0x2cd0b3fdf0cc62e6!2sAnnaba%2C%20Algeria!5e0!3m2!1sfr!2s!4v1710000000000!5m2!1sfr!2s',
    color: '#6b7c45',
    icon: '📍',
  },
  {
    id: 'guelma',
    city: 'Guelma',
    address: 'En face du Lycée Mahmoud Ben Mahmoud, Guelma',
    phone: '+213 540413000',
    hours: 'Lun–Dim : 11h00 – 23h00',
    desc: 'Notre second restaurant à Guelma, idéalement situé en face du lycée Mahmoud Ben Mahmoud. Venez découvrir nos saveurs dans un cadre moderne et accueillant.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24798.73437295894!2d7.427316147059815!3d36.463086977870744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ef2c5e72bfb3d9%3A0x2cd0b3fdf0cc62e6!2sGuelma%2C%20Algeria!5e0!3m2!1sfr!2s!4v1710000000000!5m2!1sfr!2s',
    color: '#a08c3a',
    icon: '📍',
  },
]

export default function Locations() {
  const [active, setActive] = useState('annaba')
  const loc = locations.find(l => l.id === active)

  return (
    <section id="adresses" style={{
      padding: '100px 2rem',
      background: 'var(--white)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '700', marginBottom: '0.75rem' }}>
            Venez Nous Rendre Visite
          </p>
          <h2 className="section-title">Nos Adresses</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Deux établissements pour vous accueillir en Algérie</p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          {locations.map(l => (
            <button key={l.id} onClick={() => setActive(l.id)} style={{
              padding: '14px 36px',
              borderRadius: '40px',
              border: 'none',
              background: active === l.id ? `linear-gradient(135deg, ${l.color}, ${l.color}bb)` : 'var(--beige)',
              color: active === l.id ? '#fff' : 'var(--text)',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: active === l.id ? `0 8px 25px ${l.color}44` : 'none',
            }}>
              {l.icon} {l.city}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          animation: 'fadeIn 0.4s ease',
        }}>
          {/* Info Card */}
          <div style={{
            background: 'var(--beige)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: `2px solid ${loc.color}22`,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${loc.color}, ${loc.color}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                🏛️
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--teal-dark)' }}>
                  Le Jasmin — {loc.city}
                </h3>
                <div style={{ width: '40px', height: '2px', background: loc.color, marginTop: '4px', borderRadius: '1px' }} />
              </div>
            </div>

            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.95rem' }}>
              {loc.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📌', label: 'Adresse', value: loc.address },
                { icon: '📞', label: 'Téléphone', value: loc.phone },
                { icon: '🕐', label: 'Horaires', value: loc.hours },
              ].map((info, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'var(--white)',
                  borderRadius: '10px',
                  alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '1.2rem', marginTop: '1px' }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: loc.color, marginBottom: '2px' }}>{info.label}</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp button with correct number */}
            <a
              href={`https://wa.me/213540413000?text=Bonjour, je voudrais réserver une table au Jasmin ${loc.city}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginTop: '1.5rem',
                background: '#25D366',
                color: '#fff',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,211,102,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.4)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Réserver via WhatsApp
            </a>
          </div>

          {/* Google Maps */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
            minHeight: '420px',
            border: `2px solid ${loc.color}22`,
          }}>
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: '420px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Carte ${loc.city}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}