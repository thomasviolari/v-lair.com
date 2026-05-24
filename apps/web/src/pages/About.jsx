import './About.css'

const SOCIALS = [
  { label: 'GitHub',   icon: '⌥', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', icon: '⬡', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Email',    icon: '✉', href: 'mailto:you@example.com' },
]

const SKILLS = [
  { group: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'CSS'] },
  { group: 'Backend',  items: ['Node.js', 'Express', 'REST', 'GraphQL'] },
  { group: 'Infra',    items: ['Docker', 'Nginx', 'Vercel', 'Microservices'] },
]

export default function About() {
  return (
    <main className="about-page">
      <div className="container">

        {/* ── Bio ── */}
        <section className="bio animate-fadeUp">
          <div className="bio__avatar">
            <span>YN</span>
          </div>
          <div className="bio__text">
            <h1 className="bio__name">Your Name</h1>
            <p className="bio__role">Full Stack Developer · Cyprus 🌊</p>
            <p className="bio__description">
              I build full-stack products with a focus on clean architecture and great UX.
              Currently experimenting with microservices, Vite, and turning ideas into
              small useful tools. This is my personal lab.
            </p>
            <div className="bio__socials">
              {SOCIALS.map(({ label, icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                  <span>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Skills ── */}
        <section className="skills-section animate-fadeUp delay-2">
          <h2 className="section-title">Skills & Stack</h2>
          <div className="skills-grid">
            {SKILLS.map(({ group, items }) => (
              <div key={group} className="skill-group">
                <h3 className="skill-group__label">{group}</h3>
                <div className="skill-group__pills">
                  {items.map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Currently ── */}
        <section className="currently animate-fadeUp delay-3">
          <h2 className="section-title">Currently</h2>
          <ul className="currently__list">
            {[
              'Learning Vite & modern build tooling',
              'Building micro-apps to ship and learn fast',
              'Exploring microservice patterns with Express',
            ].map((item, i) => (
              <li key={i} className="currently__item">
                <span className="currently__dot" />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  )
}
