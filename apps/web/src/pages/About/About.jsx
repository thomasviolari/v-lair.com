import "./About.css";

const SOCIALS = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/thomasviolari" },
  { label: "Email", icon: "✉", href: "mailto:thomasviolari@gmail.com" },
];

const PRINCIPLES = [
  {
    group: "Start with the real need",
    items: ["Listen", "Clarify", "Prioritise"],
  },
  { group: "Design for use", items: ["Simple", "Reliable", "Useful"] },
  {
    group: "Deliver with structure",
    items: ["Plan", "Track", "Improve"],
  },
];

export default function About() {
  return (
    <main className="about-page">
      <div className="container">
        {/* ── Bio ── */}
        <section className="bio animate-fadeUp">
          <div className="bio__avatar">
            <span>VL</span>
          </div>
          <div className="bio__text">
            <h1 className="bio__name">
              V-Lair helps teams turn ideas into delivery.
            </h1>
            <p className="bio__role">
              Technology & project management partner · Cyprus
            </p>
            <p className="bio__description">
              We work with founders, teams, and organisations that need a clear
              technical partner and a dependable delivery process. That usually
              means product thinking, systems design, prototype work, and the
              practical project management needed to keep everything moving.
            </p>
            <p className="bio__description bio__description--secondary">
              V-Lair is intentionally small, which means we stay close to the
              problem, move quickly, and keep the work grounded in business
              reality rather than buzzwords.
            </p>
            <div className="bio__socials">
              {SOCIALS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="bio__image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=82"
              alt="A team collaborating in a bright workspace"
            />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Skills ── */}
        <section className="skills-section animate-fadeUp delay-2">
          <h2 className="section-title">How we work</h2>
          <div className="skills-grid">
            {PRINCIPLES.map(({ group, items }) => (
              <div key={group} className="skill-group">
                <h3 className="skill-group__label">{group}</h3>
                <div className="skill-group__pills">
                  {items.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        <section className="europe-section animate-fadeUp delay-3">
          <div>
            <p className="skill-group__label">European project readiness</p>
            <h2 className="section-title">
              A practical partner for the work between a good idea and a real
              outcome.
            </h2>
          </div>
          <div className="europe-section__copy">
            <p>
              We support early-stage and growth-stage initiatives where a clear
              technical contribution and disciplined project management matter
              as much as the product itself. We are comfortable in discovery,
              prototyping, pilots, and structured delivery work.
            </p>
            <ul>
              <li>
                Based in Cyprus with a practical understanding of cross-border
                collaboration
              </li>
              <li>
                Product strategy, technical direction, and hands-on execution
              </li>
              <li>
                Planning, work-package coordination, risk tracking, and
                reporting
              </li>
              <li>
                Clear communication, documentation, and knowledge transfer
              </li>
            </ul>
          </div>
        </section>

        <div className="about-image-band animate-fadeUp delay-3">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=82"
            alt="A calm, modern workspace"
          />
        </div>

        <div className="section-divider" />

        {/* ── Currently ── */}
        <section className="currently animate-fadeUp delay-3">
          <h2 className="section-title">How we work</h2>
          <ul className="currently__list">
            {[
              "Helping teams clarify what matters before building too much",
              "Turning ideas into practical product decisions and working prototypes",
              "Keeping delivery structured, transparent, and honest about trade-offs",
            ].map((item, i) => (
              <li key={i} className="currently__item">
                <span className="currently__dot" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="contact-section animate-fadeUp delay-4"
        >
          <div className="contact-section__header">
            <p className="skill-group__label">Contact</p>
            <h2 className="section-title">Let’s talk about the next step.</h2>
          </div>

          <div className="contact-card">
            <div className="contact-card__copy">
              <p>
                If you are building something early, trying to improve an
                existing product, or looking for a technical partner that can
                help keep the work organised, we should talk.
              </p>
              <p>
                Tell us what you are building, what is unclear, and where you
                need support.
              </p>
            </div>

            <div className="contact-card__actions">
              <a href="/contact">Send a project enquiry</a>
              <a href="mailto:thomasviolari@gmail.com?subject=Project%20enquiry">
                Email directly
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
