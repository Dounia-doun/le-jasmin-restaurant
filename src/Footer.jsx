import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: '#1e2410',
      color: 'rgba(255,255,255,0.8)',
      padding: '60px 2rem 0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Le Jasmin" style={{ height: '80px', width: 'auto', marginBottom: '1.25rem', filter: 'brightness(1.1)' }} />
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', maxWidth: '260px' }}>
              Restaurant élégant proposant une cuisine méditerranéenne raffinée dans deux établissements en Algérie.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} title={s.label} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  transition: 'background 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(160,140,58,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                ['#accueil', 'Accueil'],
                ['#apropos', 'À Propos'],
                ['#menu', 'Menu'],
                ['#galerie', 'Galerie'],
                ['#adresses', 'Nos Adresses'],
                ['#reserver', 'Réservations'],
              ].map(([href, label]) => (
                <a key={href} href={href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold-light, #c4ac55)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <span style={{ color: '#a08c3a', fontSize: '0.7rem' }}>▶</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Adresses */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>Nos Adresses</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#a08c3a', marginBottom: '4px', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Annaba</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>Saint Cloud, Annaba<br />Algérie</p>
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#a08c3a', marginBottom: '4px', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Guelma</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>En face du Lycée<br />Mahmoud Ben Mahmoud<br />Guelma, Algérie</p>
              </div>
            </div>
          </div>

          {/* Horaires & Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>Horaires & Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                ['🕐', 'Lundi — Dimanche'],
                ['⏰', '11h00 – 23h00'],
                ['📞', '+213 540413000'],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>{icon}</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>{text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/213540413000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#25D366',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.5rem 0',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Le Jasmin. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/images/logo.png" alt="Le Jasmin" style={{ height: '28px', opacity: 0.5 }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              L'art de bien manger
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}