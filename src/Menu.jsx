import React, { useState } from 'react'

const categories = [
  {
    id: 'entrees',
    label: 'Entrées',
    icon: '🥗',
    color: '#8a9c5a',
    items: [
      { name: 'Hmis', desc: 'Houmous maison aux pois chiches, huile d\'olive et épices orientales', price: '450 DA' },
      { name: 'Salade César', desc: 'Laitue romaine, croûtons dorés, parmesan, sauce César maison', price: '550 DA' },
      { name: 'Salade Caprese', desc: 'Tomates fraîches, mozzarella, basilic frais, huile d\'olive extra vierge', price: '600 DA' },
      { name: 'Camembert au Four', desc: 'Camembert gratiné au four, miel et noix, pain grillé', price: '650 DA' },
      { name: 'Bourek', desc: 'Feuilles de brick croustillantes farcies à la viande et aux herbes', price: '400 DA' },
      { name: 'Velouté du Jour', desc: 'Soupe onctueuse préparée selon les arrivages du marché', price: '350 DA' },
    ],
  },
  {
    id: 'plats',
    label: 'Plats Principaux',
    icon: '🍽️',
    color: '#6b7c45',
    items: [
      { name: 'Gratin Poulet', desc: 'Escalope de poulet gratinée au fromage, sauce béchamel, légumes', price: '950 DA' },
      { name: 'Escalope Grillée', desc: 'Escalope de veau grillée, sauce au poivre, frites maison', price: '1100 DA' },
      { name: 'Escalope à la Crème', desc: 'Escalope tendre en sauce crémeuse aux champignons', price: '1100 DA' },
      { name: 'Faux Filet Grillé', desc: 'Faux filet de bœuf grillé, herbes fines, frites et salade', price: '1400 DA' },
      { name: 'Chiche Taouk', desc: 'Brochettes de poulet marinées aux épices libanaises, riz pilaf', price: '950 DA' },
      { name: 'Tagliatelles Poulet', desc: 'Tagliatelles fraîches, émincé de poulet, sauce crémeuse au basilic', price: '900 DA' },
      { name: 'Poisson Frais', desc: 'Poisson du jour grillé ou en papillote, citron et herbes fraîches', price: '1200 DA' },
      { name: 'Mix Grillade', desc: 'Assortiment de viandes grillées : bœuf, agneau, poulet, merguez', price: '1600 DA' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: '🍔',
    color: '#a08c3a',
    items: [
      { name: 'Burger Classic', desc: 'Steak haché, salade, tomate, cornichons, sauce maison, pain brioché', price: '700 DA' },
      { name: 'Cheese Burger', desc: 'Steak haché, double cheddar fondu, sauce spéciale, frites incluses', price: '800 DA' },
      { name: 'Jasmin Burger', desc: 'Notre signature : double steak, bacon croustillant, sauce Jasmin secrète', price: '950 DA' },
      { name: 'Chicken Burger', desc: 'Poulet pané croustillant, coleslaw, pickles et sauce honey mustard', price: '750 DA' },
    ],
  },
  {
    id: 'cocktails',
    label: 'Cocktails & Jus',
    icon: '🍹',
    color: '#e67e5a',
    items: [
      { name: 'Piña Colada', desc: 'Ananas, lait de coco, jus d\'orange, grenadine — cocktail tropical sans alcool', price: '450 DA' },
      { name: 'Fraise Banane', desc: 'Fraises fraîches mixées avec banane, lait et glace vanille', price: '400 DA' },
      { name: 'Bella Luna', desc: 'Mangue, passion, lait de coco et une touche de menthe fraîche', price: '450 DA' },
      { name: 'Virgin Mojito', desc: 'Citron vert, menthe, sucre de canne, eau pétillante — frais et rafraîchissant', price: '380 DA' },
      { name: 'Jus d\'Orange Frais', desc: 'Oranges pressées à la minute, pure fraîcheur', price: '300 DA' },
      { name: 'Citronnade Maison', desc: 'Citrons frais, sirop de menthe, eau pétillante et zestes', price: '320 DA' },
    ],
  },
  {
    id: 'frappe',
    label: 'Frappés & Milkshakes',
    icon: '🥤',
    color: '#8e44ad',
    items: [
      { name: 'Frappé Caramel', desc: 'Café frappé avec sirop caramel, crème fouettée et éclats de caramel', price: '500 DA' },
      { name: 'Frappé Chocolat', desc: 'Chocolat intense frappé, chantilly, pépites de chocolat noir', price: '480 DA' },
      { name: 'Milkshake Vanille', desc: 'Glace vanille premium, lait entier, crème fouettée généreuse', price: '480 DA' },
      { name: 'Milkshake Fraise', desc: 'Fraises fraîches mixées avec glace, lait et sirop de fraise', price: '500 DA' },
      { name: 'Oreo Shake', desc: 'Milkshake crémeux aux biscuits Oreo écrasés et glace vanille', price: '520 DA' },
    ],
  },
  {
    id: 'mojitos',
    label: 'Mojitos',
    icon: '🌿',
    color: '#27ae60',
    items: [
      { name: 'Mojito Classic', desc: 'Citron vert, menthe fraîche, sucre de canne, eau gazeuse sur glace', price: '380 DA' },
      { name: 'Mojito Fraise', desc: 'Fraises fraîches, menthe, citron vert, eau gazeuse — une explosion de saveurs', price: '420 DA' },
      { name: 'Mojito Mangue', desc: 'Mangue fraîche, menthe, gingembre, citron vert et bulles pétillantes', price: '420 DA' },
      { name: 'Mojito Passion', desc: 'Fruit de la passion, menthe, citron, eau gazeuse — exotique et rafraîchissant', price: '420 DA' },
      { name: 'Mojito Myrtille', desc: 'Myrtilles fraîches, menthe, citron vert et eau gazeuse', price: '420 DA' },
    ],
  },
  {
    id: 'enfants',
    label: 'Menu Enfants',
    icon: '🌟',
    color: '#f39c12',
    items: [
      { name: 'Mini Burger', desc: 'Petit burger moelleux avec steak haché, fromage et sauce tomate douce', price: '500 DA' },
      { name: 'Nuggets Poulet', desc: '6 nuggets de poulet dorés, sauce ketchup maison et frites légères', price: '450 DA' },
      { name: 'Pâtes Bolognaise', desc: 'Pennes avec sauce tomate bolognaise maison, parmesan râpé', price: '450 DA' },
      { name: 'Pizza Mini', desc: 'Mini pizza à la sauce tomate, mozzarella et garniture au choix', price: '500 DA' },
      { name: 'Milkshake Enfant', desc: 'Petit milkshake au choix : fraise, chocolat ou vanille', price: '300 DA' },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entrees')

  const active = categories.find(c => c.id === activeCategory)

  return (
    <section id="menu" style={{
      padding: '100px 2rem',
      background: 'var(--white)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '700', marginBottom: '0.75rem' }}>
            Nos Délices
          </p>
          <h2 className="section-title">Notre Menu</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Explorez notre sélection de plats préparés avec passion</p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: `2px solid ${activeCategory === cat.id ? cat.color : '#e0e0e0'}`,
              background: activeCategory === cat.id ? cat.color : 'transparent',
              color: activeCategory === cat.id ? '#fff' : '#666',
              fontFamily: "'Lato', sans-serif",
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => {
              if (activeCategory !== cat.id) {
                e.currentTarget.style.background = cat.color + '15'
                e.currentTarget.style.borderColor = cat.color
                e.currentTarget.style.color = cat.color
              }
            }}
            onMouseLeave={e => {
              if (activeCategory !== cat.id) {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = '#e0e0e0'
                e.currentTarget.style.color = '#666'
              }
            }}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 0.4s ease',
        }}>
          {active.items.map((item, i) => (
            <div key={i} style={{
              background: 'var(--beige)',
              borderRadius: '16px',
              padding: '1.75rem',
              border: `1px solid ${active.color}22`,
              transition: 'transform 0.3s, box-shadow 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 35px ${active.color}25` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${active.color}, ${active.color}66)`,
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: 'var(--dark)', fontWeight: '700' }}>
                  {item.name}
                </h4>
                <span style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: active.color,
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem',
                }}>
                  {item.price}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.7' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* QR Code CTA */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, var(--teal-dark), var(--teal))',
          borderRadius: '20px',
          color: '#fff',
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', opacity: 0.9 }}>Scannez notre QR Code pour accéder au menu complet sur votre téléphone</p>
          <a href="#qrcode" style={{
            display: 'inline-block',
            marginTop: '1rem',
            background: 'var(--gold)',
            color: '#1a1a1a',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '700',
            fontSize: '0.9rem',
            letterSpacing: '1px',
          }}>
            Voir le QR Code
          </a>
        </div>
      </div>
    </section>
  )
}
