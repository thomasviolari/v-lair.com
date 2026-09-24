import "./About.css";

const SOCIALS = [
  { label: "Email", icon: "✉", href: "mailto:thomasviolari@gmail.com" },
];

const PRINCIPLES = [
  {
    group: "Understand the context",
    description:
      "Before proposing a solution, we learn how the work happens, who it affects, and what a useful result needs to change.",
    items: ["Discovery", "User needs", "Constraints", "Outcomes"],
  },
  {
    group: "Shape the right solution",
    description:
      "We turn the brief into a clear product direction, a sensible technical approach, and something people can understand early.",
    items: ["Service design", "UX flows", "Prototypes", "Architecture"],
  },
  {
    group: "Deliver with confidence",
    description:
      "We keep delivery visible and manageable with decisions, milestones, documentation, and honest communication.",
    items: ["Planning", "Milestones", "Risk tracking", "Reporting", "Handover"],
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
          <figure className="bio__image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=82"
              alt="A team collaborating in a bright workspace"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Skills ── */}
        <section className="skills-section animate-fadeUp delay-2">
          <div className="skills-section__intro">
            <div>
              <p className="skill-group__label">Our working model</p>
              <h2 className="section-title">How we work</h2>
            </div>
            <p>
              Good delivery is not a single handoff. It is a sequence of clear
              conversations, practical decisions, and steady progress.
            </p>
          </div>
          <div className="skills-grid">
            {PRINCIPLES.map(({ group, description, items }) => (
              <div key={group} className="skill-group">
                <h3 className="skill-group__label">{group}</h3>
                <p className="skill-group__description">{description}</p>
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
            <p className="skill-group__label">Public-sector & European work</p>
            <h2 className="section-title">
              Clear delivery for work that affects more than one organisation.
            </h2>
          </div>
          <div className="europe-section__copy">
            <p>
              We are interested in working with public-sector teams, agencies,
              municipalities, research partners, and growing organisations that
              need technology to become useful in practice. That includes
              European innovation initiatives, service improvement, digital
              platforms, and structured delivery support.
            </p>
            <ul>
              <li>
                Based in Cyprus and available for cross-border collaboration
              </li>
              <li>
                Digital services, product strategy, and hands-on execution
              </li>
              <li>
                Project planning, coordination, risk tracking, and reporting
              </li>
              <li>
                Clear documentation, accessibility-minded thinking, and
                knowledge transfer
              </li>
            </ul>
          </div>
        </section>

        <div className="about-image-band animate-fadeUp delay-3">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1600&q=85"
            alt="Software developers working together at their computers"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="section-divider" />

        {/* ── Currently ── */}
        <section className="currently animate-fadeUp delay-3">
          <h2 className="section-title">What clients can expect</h2>
          <ul className="currently__list">
            {[
              "A clear first step that turns a broad brief into a practical scope",
              "Visible progress through decisions, prototypes, milestones, and regular updates",
              "A documented handover so the work remains useful after delivery",
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
