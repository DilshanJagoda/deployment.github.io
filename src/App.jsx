import { useEffect, useState } from 'react'
import './App.css'

const tracks = [
  { title: 'Ada Ape Thaththa', spotify: '6j515KxPLfwTsVIEkJkCrU' },
  { title: 'Bus Eke Dakke', spotify: '421PPxgiHyH2qIe7rFxwuP' },
  { title: 'Doppi Nakin', spotify: '5hnHxcZ6xjJLXPSlRD9VdJ' },
  { title: 'Sereppuwa', spotify: '5A16odAsBtHavDJs5inAWH' },
  { title: 'Kopara Pipigngna', spotify: '7edfQPe0AgMdUVwjNJQIav' },
  { title: 'Watey Gihin', spotify: '4nX06dv7UyO06k0GhUrUkr' },
]

const gallery = [
  { src: '/images/pofile2.png', caption: 'MURA — portrait' },
  { src: '/images/profile.png', caption: 'MURA — profile' },
  { src: '/images/profile1.jpg', caption: 'Off the scene' },
  { src: '/images/cover_uba.png', caption: 'On the mic' },
  { src: '/images/funky.png', caption: 'Funky mode On' },
  { src: '/images/buddy.png', caption: 'Funky dirt' },
]

const socials = [
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/mura_funkydirt' },
  { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/murshh' },
  { label: 'TikTok', icon: 'tiktok', url: 'https://tiktok.com/@murshadhuvais' },
  { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/channel/UCaXIgQ1qGVRslmK6HkT6cuA' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/murshad-huvais-7011a9150' },
  { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/artist/murshadhuvais' },
  { label: 'Apple Music', icon: 'note', url: 'https://music.apple.com/us/artist/murshad-huvais/1533869031' },
]

const iconPaths = {
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  tiktok:
    'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  youtube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  spotify:
    'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
}

function SocialIcon({ icon }) {
  if (icon === 'deezer') {
    return (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <g fill="currentColor">
          <rect x="3" y="5" width="7" height="3" rx="1.5" />
          <rect x="3" y="10" width="7" height="3" rx="1.5" />
          <rect x="3" y="15" width="7" height="3" rx="1.5" />
          <rect x="13" y="5" width="8" height="3" rx="1.5" />
          <rect x="13" y="10" width="8" height="3" rx="1.5" />
          <rect x="13" y="15" width="8" height="3" rx="1.5" />
        </g>
      </svg>
    )
  }

  const path = iconPaths[icon] ?? iconPaths.note
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path fill="currentColor" d={path} />
    </svg>
  )
}

iconPaths.note =
  'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'

function useCountUp(target) {
  const [value, setValue] = useState(1)

  useEffect(() => {
    const duration = 1600
    const start = performance.now()
    let raf

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(1 + (target - 1) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return value
}

function Stat({ value, suffix, label }) {
  const count = useCountUp(value)
  return (
    <div className="stat">
      <b>
        {count}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  )
}

const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

const WHATSAPP_NUMBER = '94779822947'

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const SHOW_TYPES = [
  'Wedding',
  'Live Concert / Festival',
  'Club / Party Night',
  'Solo Show',
  'Feature Verse / Collab',
  'Private Event',
  'Other',
]

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    showType: SHOW_TYPES[0],
    date: '',
    location: '',
    audience: '',
    details: '',
  })

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const message = [
      'Yo MURA! I want to book a show.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Show Type: ${form.showType}`,
      `Date: ${form.date}`,
      `Location: ${form.location}`,
      form.audience ? `Audience Size: ${form.audience}` : '',
      '',
      `Details: ${form.details || "Let's talk."}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section booking" id="book">
      <div className="section-head">
        <p className="kicker">Bookings</p>
        <h2>Book a Show</h2>
        <p>
          Fill in the details and your request goes straight to MURA&apos;s WhatsApp. He replies
          within a few hours.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-field">
            <span>Your Name</span>
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="e.g. Sandun Perera"
              required
            />
          </label>
          <label className="form-field">
            <span>Your Phone</span>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="e.g. 077 123 4567"
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span>Show Type</span>
            <select value={form.showType} onChange={update('showType')}>
              {SHOW_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="form-field">
            <span>Event Date</span>
            <input type="date" value={form.date} onChange={update('date')} required />
          </label>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span>Location</span>
            <input
              type="text"
              value={form.location}
              onChange={update('location')}
              placeholder="e.g. Colombo 07, Negombo"
              required
            />
          </label>
          <label className="form-field">
            <span>Audience Size</span>
            <input
              type="text"
              value={form.audience}
              onChange={update('audience')}
              placeholder="e.g. 300 people"
            />
          </label>
        </div>

        <label className="form-field">
          <span>Tell Me More</span>
          <textarea
            rows="4"
            value={form.details}
            onChange={update('details')}
            placeholder="Venue vibe, set length, feature style, budget..."
          />
        </label>

        <button type="submit" className="btn btn-whatsapp booking-submit">
          <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
            <path fill="currentColor" d={whatsappPath} />
          </svg>
          Send Booking via WhatsApp
        </button>
        <p className="booking-note">
          This opens WhatsApp with your request pre-filled — nothing is sent to a server.
        </p>
      </form>
    </section>
  )
}

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Music', href: '#music' },
  { label: 'Connect', href: '#connect' },
  { label: 'Book', href: '#book' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="site">
      <nav className={`nav${navOpen ? ' open' : ''}`}>
        <a className="brand" href="#top" onClick={() => setNavOpen(false)}>
          MURA<span>.</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setNavOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="social-rail" aria-label="Social media">
        {socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}>
            <SocialIcon icon={s.icon} />
          </a>
        ))}
      </aside>

      <header className="hero" id="top">
        <p className="hero-eyebrow">Sri Lankan Hip-Hop &amp; Rap</p>
        <h1 className="hero-title">
          Murshad<br />
          Huvais<em>.</em>
        </h1>
        <p className="hero-tag">M U R A</p>
        <p className="hero-desc">
          Wordsmith, vocalist and lyricist out of Sri Lanka. Heavy bars, Sinhala
          flows and street-level stories — carried by raw production from the
          island&apos;s underground.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#book">
            Book a Show
          </a>
          <a
            className="btn btn-whatsapp"
            href={whatsappLink('Yo MURA! I want to book you for a show.')}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
              <path fill="currentColor" d={whatsappPath} />
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="hero-stats">
          <Stat value={20} label="Million+ plays" />
          <Stat value={10} suffix="+" label="Released tracks" />
          
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-head">
          <p className="kicker">Who is he?</p>
          <h2>About</h2>
          <p>
            Murshad Huvais — known on the mic as <strong>MURA</strong> — is a
            rising voice in the Sri Lankan rap scene, blending punchy Sinhala
            lyricism with hard-hitting hip-hop production.
          </p>
        </div>

        <div className="about">
          <div className="about-photo">
            <img src="/images/profile.png" alt="Murshad Huvais (MURA)" />
          </div>
          <div className="about-text">
            <h3>Murshad Huvais</h3>
            <p className="role">Rapper · Vocalist · Lyricist</p>
            <p>
              MURA has carved a lane in the Sinhala hip-hop wave by pairing
              honest, everyday storytelling with confident delivery. He&apos;s a
              frequent writing force behind the mic too — credited as lyricist
              on records like <strong>Doppi Nakin</strong>,{' '}
              <strong>Bus Eke Dakke</strong> and <strong>Ada Ape Thaththa</strong>,
              composed by the prolific producer Shenal Maddumage.
            </p>
            <p>
              His collaborations read like a who&apos;s-who of the Lankan scene —
              from heavyweight crew <strong>Funky Dirt</strong> and{' '}
              <strong>Shehara Sandaruwan</strong> to international pop breakout{' '}
              <strong>Yohani</strong> on the 2021 single <em>Awidan Yanawa</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-head">
          <p className="kicker">Moments</p>
          <h2>Gallery</h2>
          <p>Portraits, studio sessions and cover art from the MURA vault.</p>
        </div>

        <div className="gallery">
          {gallery.map((g) => (
            <figure className="gallery-item" key={g.src}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption className="gallery-caption">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="music">
        <div className="section-head">
          <p className="kicker">The catalog</p>
          <h2>Discography</h2>
          <p>Singles and features from the MURA vault — raw, melodic and unmistakably Sri Lankan.</p>
        </div>

        <div className="tracks">
          {tracks.map((track) => (
            <iframe
              key={track.title}
              className="track-embed"
              src={`https://open.spotify.com/embed/track/${track.spotify}`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="encrypted-media"
              loading="lazy"
              title={`Play ${track.title} on Spotify`}
            />
          ))}
        </div>
      </section>

      <section className="section" id="connect">
        <div className="section-head">
          <p className="kicker">Stay close</p>
          <h2>Connect With MURA</h2>
          <p>
            Follow Murshad Huvais (MURA) on his official platforms and connect
            with him directly through his social accounts.
          </p>
        </div>
        <div className="social-grid">
          {socials.map((s) => (
            <a className="social-link" key={s.label} href={s.url} target="_blank" rel="noreferrer">
              <span className="social-link-icon">
                <SocialIcon icon={s.icon} />
              </span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </section>

      <BookingForm />

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a className="brand" href="#top">
              MURA<span>.</span>
            </a>
            <p className="footer-tagline">
              Sri Lankan Hip-Hop &amp; Rap. Heavy bars, Sinhala flows and
              street-level stories from the island&apos;s underground.
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-social">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    aria-label={s.label}
                  >
                    <SocialIcon icon={s.icon} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms.html">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MURA. All rights reserved.</p>
          <p className="footer-credit">
            Created by{' '}
            <a href="https://dilshanjagoda.github.io" target="_blank" rel="noreferrer">
              Dilshan Jagoda
            </a>
          </p>
        </div>
      </footer>

      <a
        className="whatsapp-btn"
        href={whatsappLink('Yo MURA! I found your website.')}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
          <path fill="currentColor" d={whatsappPath} />
        </svg>
      </a>
    </div>
  )
}

export default App
