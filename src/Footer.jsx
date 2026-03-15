import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: '#1e2410',
      color: 'rgba(255,255,255,0.8)',
      padding: '60px 2rem 20px',
      marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <img src="/images/logo.png" alt="Le Jasmin" style={{ height: '60px', marginBottom: '1rem' }} />
            <p>Restaurant élégant à Annaba et Guelma</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#galerie">Galerie</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Annaba: Saint Cloud</p>
            <p>Guelma: En face du Lycée</p>
            <p>Tél: +213 540413000</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <p>© {new Date().getFullYear()} Le Jasmin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}