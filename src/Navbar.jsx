import React, { useState } from 'react'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À Propos', href: '#apropos' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Nos Adresses', href: '#adresses' },
  { label: 'Réserver', href: '#reserver' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(245,240,220,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? '58px' : '70px',
        transition: 'height 0.4s ease',
      }}>
        <a href="#accueil" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/public/images/logo.png" alt="Le Jasmin" style={{
            height: scrolled ? '36px' : '46px',
            width: 'auto',
            transition: 'height 0.4s ease',
          }} />
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: scrolled ? '#4e5c31' : '#ffffff',
              textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.5)',
              transition: 'color 0.3s',
              padding: '4px 0',
              borderBottom: '2px solid transparent',
            }}
            onMouseEnter={e => e.target.style.borderBottomColor = '#a08c3a'}
            onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
            >
              {link.label}
            </a>
          ))}
          <a href="#reserver" style={{
            background: 'linear-gradient(135deg, #6b7c45, #4e5c31)',
            color: '#fff',
            padding: '9px 22px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 15px rgba(107,124,69,0.4)',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(107,124,69,0.55)' }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(107,124,69,0.4)' }}
          >
            Réserver
          </a>
        </div>

        <button onClick={() => setOpen(!open)} style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          background: 'none',
          padding: '4px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: scrolled ? '#4e5c31' : '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{
          background: 'rgba(245,240,220,0.99)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid #d8d4be',
          animation: 'fadeIn 0.3s ease',
        }}>
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#4e5c31',
                padding: '0.5rem 0',
                borderBottom: '1px solid #e0dbc8',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}