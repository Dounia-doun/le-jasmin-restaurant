import React, { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'Annaba',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Bonjour Le Jasmin ! 🌸\n\nJe souhaite réserver une table :\n\n👤 Nom : ${form.name}\n📞 Téléphone : ${form.phone}\n📍 Établissement : ${form.location}\n📅 Date : ${form.date}\n🕐 Heure : ${form.time}\n👥 Nombre de personnes : ${form.guests}\n${form.message ? `\n💬 Message : ${form.message}` : ''}\n\nMerci !`
    const waUrl = `https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '10px',
    border: '2px solid #e8e8e8',
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.95rem',
    color: 'var(--text)',
    background: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const handleFocus = e => {
    e.target.style.borderColor = 'var(--teal)'
    e.target.style.boxShadow = '0 0 0 3px rgba(107,124,69,0.12)'
  }
  const handleBlur = e => {
    e.target.style.borderColor = '#e8e8e8'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="reserver" style={{
      padding: '100px 2rem',
      background: 'var(--beige)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '700', marginBottom: '0.75rem' }}>
            Votre Table Vous Attend
          </p>
          <h2 className="section-title">Réserver une Table</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Réservez en quelques clics via WhatsApp</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left Info */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--teal-dark)', marginBottom: '1rem', fontStyle: 'italic' }}>
              Réservez Facilement
            </h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.9', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Remplissez le formulaire ci-contre et votre message de réservation sera envoyé directement sur notre WhatsApp. Nous vous confirmerons votre table dans les plus brefs délais.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                { icon: '📞', title: 'Contact Direct', desc: 'Réponse rapide via WhatsApp' },
                { icon: '🎉', title: 'Événements Spéciaux', desc: 'Anniversaires, mariages, réunions d\'affaires' },
                { icon: '🌸', title: 'Service Personnalisé', desc: 'Menu spécial, décorations sur demande' },
                { icon: '🚗', title: 'Parking Disponible', desc: 'Stationnement facile dans nos deux adresses' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--teal), var(--teal-light))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(107,124,69,0.3)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--teal-dark)', marginBottom: '2px', fontSize: '0.95rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp direct */}
            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#25D366',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                width: 'fit-content',
                boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Nous contacter directement
            </a>
          </div>

          {/* Form */}
          <div style={{
            background: 'var(--white)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(107,124,69,0.1)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', animation: 'fadeInUp 0.5s ease' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--teal-dark)', marginBottom: '0.75rem' }}>
                  Demande Envoyée !
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>
                  Votre demande de réservation a été envoyée via WhatsApp. Nous vous répondrons très rapidement !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Votre Nom *</label>
                    <input required name="name" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} placeholder="Prénom Nom" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Téléphone *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} placeholder="+213 XX XX XX XX" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Établissement *</label>
                  <select required name="location" value={form.location} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}>
                    <option value="Annaba">Le Jasmin — Annaba (Saint Cloud)</option>
                    <option value="Guelma">Le Jasmin — Guelma (Lycée Mahmoud Ben Mahmoud)</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Date *</label>
                    <input required type="date" name="date" value={form.date} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Heure *</label>
                    <input required type="time" name="time" value={form.time} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Couverts *</label>
                    <select required name="guests" value={form.guests} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={inputStyle}>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>
                      ))}
                      <option value="10+">10+ personnes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: '6px' }}>Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    placeholder="Occasions spéciales, préférences alimentaires, demandes particulières..."
                  />
                </div>

                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  padding: '16px',
                  borderRadius: '12px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '700',
                  fontSize: '1rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(37,211,102,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Envoyer via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
