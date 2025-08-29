import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function formatTimeParts(targetDateMs) {
  const now = Date.now()
  const diff = Math.max(0, targetDateMs - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { diff, days, hours, minutes, seconds }
}

function Navbar({ onHomeClick }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick?.() }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="HIZE 2026" style={{ height: 30, borderRadius: 6 }} />
          <span style={{ marginLeft: 10, color: '#ff6600', fontWeight: 700, letterSpacing: 0.5, textShadow: '0 0 12px #ff6600' }}>HIZE 2026</span>
        </a>
      </div>
      <ul>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onHomeClick?.() }}>Home</a></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/guests">Guests</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/" className="active">HIZE 2026</Link></li>
      </ul>
    </nav>
  )
}

function HomeHero() {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetDateMs = useMemo(() => new Date('Jan 1, 2026 00:00:00').getTime(), [])

  useEffect(() => {
    const id = setInterval(() => {
      const { diff, days, hours, minutes, seconds } = formatTimeParts(targetDateMs)
      if (diff <= 0) {
        clearInterval(id)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    const initial = formatTimeParts(targetDateMs)
    setTimeLeft({ days: initial.days, hours: initial.hours, minutes: initial.minutes, seconds: initial.seconds })
    return () => clearInterval(id)
  }, [targetDateMs])

  return (
    <>
      <section className="hero" id="page1">
        <div className="hero-content fade-in">
          <img src="/hero.jpg" alt="HIZE 2026 Coming Soon" className="main-poster" />
          <div className="countdown" style={{ marginTop: 20, justifyContent: 'center' }}>
            <div><span id="days">{timeLeft.days.toString().padStart(2, '0')}</span><small>Days</small></div>
            <div><span id="hours">{timeLeft.hours.toString().padStart(2, '0')}</span><small>Hours</small></div>
            <div><span id="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span><small>Minutes</small></div>
            <div><span id="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span><small>Seconds</small></div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 IEEE CS SRM | In collaboration with SRM Institute of Science & Technology</p>
      </footer>
    </>
  )
}

function EventsPage() {
  return (
    <div className="section">
      <div className="container">
        <h1>Events</h1>
        <p className="muted" style={{ marginBottom: 24 }}>Explore our lineup of competitions, workshops and keynotes.</p>
        <div className="grid">
          <div className="card">
            <img className="media" src="/blank.svg" alt="Event" />
            <h3>Hackathon</h3>
            <div>
              <span className="pill">48 hrs</span>
              <span className="pill">Team</span>
            </div>
            <a className="btn-outline" href="#">View details</a>
          </div>
          <div className="card">
            <img className="media" src="/blank.svg" alt="Event" />
            <h3>AI Workshop</h3>
            <div>
              <span className="pill">Intermediate</span>
              <span className="pill">Hands-on</span>
            </div>
            <a className="btn-outline" href="#">View details</a>
          </div>
          <div className="card">
            <img className="media" src="/blank.svg" alt="Event" />
            <h3>Keynote Series</h3>
            <div>
              <span className="pill">Leaders</span>
              <span className="pill">Trends</span>
            </div>
            <a className="btn-outline" href="#">View details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function GuestsPage() {
  return (
    <div className="section">
      <div className="container">
        <h1>Guests</h1>
        <div className="grid">
          <div className="card">
            <img className="media" src="/blank.svg" alt="Guest" />
            <h3>Speaker Name</h3>
            <p className="muted">Title, Company</p>
          </div>
          <div className="card">
            <img className="media" src="/blank.svg" alt="Guest" />
            <h3>Speaker Name</h3>
            <p className="muted">Title, Company</p>
          </div>
          <div className="card">
            <img className="media" src="/blank.svg" alt="Guest" />
            <h3>Speaker Name</h3>
            <p className="muted">Title, Company</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <h1>Contact</h1>
        <p className="muted" style={{ marginBottom: 16 }}>Reach our faculty coordinators for HIZE 2026.</p>
        <div className="grid">
          <div className="card">
            <h3>Dr. Priya Sharma</h3>
            <p className="muted">Faculty Coordinator, Computer Science</p>
            <div style={{ marginTop: 10 }}>
              <a className="btn-outline" href="mailto:priya.sharma@example.edu">priya.sharma@example.edu</a>
              <a className="btn-outline" style={{ marginLeft: 8 }} href="tel:+911234567890">+91 12345 67890</a>
            </div>
          </div>
          <div className="card">
            <h3>Prof. Arjun Mehta</h3>
            <p className="muted">Events Lead, Information Technology</p>
            <div style={{ marginTop: 10 }}>
              <a className="btn-outline" href="mailto:arjun.mehta@example.edu">arjun.mehta@example.edu</a>
              <a className="btn-outline" style={{ marginLeft: 8 }} href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
          <div className="card">
            <h3>Dr. Neha Kapoor</h3>
            <p className="muted">Workshops & Outreach</p>
            <div style={{ marginTop: 10 }}>
              <a className="btn-outline" href="mailto:neha.kapoor@example.edu">neha.kapoor@example.edu</a>
              <a className="btn-outline" style={{ marginLeft: 8 }} href="tel:+911112223334">+91 11122 23334</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const navigate = useNavigate()
  const [showIntro, setShowIntro] = useState(true)
  const [introHide, setIntroHide] = useState(false)
  return (
    <>
      {showIntro && (
        <div className={`intro-overlay ${introHide ? 'intro-hide' : ''}`}>
          <div className="intro-inner">
            <img src="/logo.png" alt="HIZE 2026" className="intro-logo" />
            <h1 className="intro-title">HIZE 2026</h1>
            <a
              href="#"
              className="btn"
              style={{ marginTop: 24 }}
              onClick={(e) => {
                e.preventDefault()
                setIntroHide(true)
                setTimeout(() => setShowIntro(false), 600)
                navigate('/')
              }}
            >Enter Site</a>
          </div>
        </div>
      )}
      <Navbar onHomeClick={() => navigate('/')} />
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/guests" element={<GuestsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
