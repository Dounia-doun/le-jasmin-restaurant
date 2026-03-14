import React, { useState } from 'react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', caption: 'Plats Gastronomiques', cat: 'plats' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', caption: 'Cuisine Raffinée', cat: 'plats' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', caption: 'Notre Salle', cat: 'interieur' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', caption: 'Ambiance Chaleureuse', cat: 'interieur' },
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', caption: 'Nos Burgers', cat: 'burgers' },
  { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80', caption: 'Burgers Artisanaux', cat: 'burgers' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', caption: 'Grillades Premium', cat: 'plats' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80', caption: 'Desserts Maison', cat: 'desserts' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', caption: 'Cocktails Signature', cat: 'boissons' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', caption: 'Terrasse Élégante', cat: 'interieur' },
  { src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', caption: 'Plats Orientaux', cat: 'plats' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', caption: 'Salades Fraîches', cat: 'plats' },
]

const filters = ['Tout', 'plats', 'interieur', 'burgers', 'boissons', 'desserts']
const filterLabels = { 'Tout': 'Tout', 'plats': 'Plats', 'interieur': 'Intérieur', 'burgers': 'Burgers', 'boissons': 'Boissons', 'desserts': 'Desserts' }

export default function Gallery() {
  const [filter, setFilter] = useState('Tout')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'Tout' ? photos : photos.filter(p => p.cat === filter)

  return (
    <section id="galerie" style={{
      padding: '100px 2rem',
      background: 'var(--beige)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '700', marginBottom: '0.75rem' }}>
            En Images
          </p>
          <h2 className="section-title">Notre Galerie</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Laissez-vous séduire par nos créations et notre ambiance</p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: '2px solid',
              borderColor: filter === f ? 'var(--teal)' : '#ddd',
              background: filter === f ? 'var(--teal)' : 'transparent',
              color: filter === f ? '#fff' : 'var(--text-light)',
              fontFamily: "'Lato', sans-serif",
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}>
              {filterLabels[f]}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{
          columns: '3 280px',
          columnGap: '1rem',
          gap: '1rem',
        }}>
          {filtered.map((photo, i) => (
            <div key={photo.src + i} style={{
              breakInside: 'avoid',
              marginBottom: '1rem',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              animation: 'fadeInUp 0.5s ease both',
              animationDelay: `${i * 0.05}s`,
            }}
            onClick={() => setLightbox(photo)}
            >
              <img src={photo.src} alt={photo.caption} style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)',
                padding: '2rem 1rem 0.75rem',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <p style={{ color: '#fff', fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', fontWeight: '700' }}>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease',
          }}>
            <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>
              <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.caption} style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }} />
              <p style={{ color: '#fff', textAlign: 'center', marginTop: '1rem', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontStyle: 'italic' }}>{lightbox.caption}</p>
              <button onClick={() => setLightbox(null)} style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--gold)',
                color: '#fff',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              }}>✕</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
