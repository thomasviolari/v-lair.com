import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />

        <div className="container hero__content">
          <p className="hero__eyebrow animate-fadeUp delay-1">Full Stack Developer</p>
          <h1 className="hero__title animate-fadeUp delay-2">
            Building things<br />
            <span className="hero__title-accent">that matter.</span>
          </h1>
          <p className="hero__subtitle animate-fadeUp delay-3">
            A collection of tools, experiments, and ideas — crafted with React, Node.js, and curiosity.
          </p>
          <div className="hero__cta animate-fadeUp delay-4">
            <Link to="/apps" className="btn btn--primary">
              Explore Apps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn--ghost">About me</Link>
          </div>
        </div>
      </section>

      {/* ── Featured strip ── */}
      <section className="features container animate-fadeUp delay-5">
        <div className="features__grid">
          {[
            { icon: '⚡', label: 'Fast', desc: 'Vite-powered, instant HMR' },
            { icon: '🎨', label: 'Polished', desc: 'Apple-inspired design system' },
            { icon: '🔌', label: 'Modular', desc: 'Add new apps anytime' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="feature-card">
              <span className="feature-card__icon">{icon}</span>
              <strong className="feature-card__label">{label}</strong>
              <p className="feature-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Scroll hint ── */}
      <div className="scroll-hint animate-fadeIn delay-6">
        <div className="scroll-hint__dot" />
      </div>
    </main>
  )
}
