import "./About.css";

const SOCIALS = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/thomasviolari" },
  {
    label: "LinkedIn",
    icon: "⬡",
    href: "https://linkedin.com/in/yourusername",
  },
  { label: "Email", icon: "✉", href: "mailto:thomasviolari@gmail.com" },
];

const PRINCIPLES = [
  {
    group: "Start with the friction",
    items: ["Observe", "Question", "Simplify"],
  },
  { group: "Make it feel obvious", items: ["Clarity", "Care", "Momentum"] },
  {
    group: "Ship, then listen",
    items: ["Small bets", "Feedback", "Iteration"],
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
            <h1 className="bio__name">V-Lair is a product studio.</h1>
            <p className="bio__role">
              Technology & project management partner · Cyprus
            </p>
            <p className="bio__description">
              We build focused digital products for teams and organisations
              working on important problems. V-Lair is small by design: close to
              the problem, easy to work with, and fast enough to keep learning.
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
          {/* </div> */}
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
              A practical partner for the work between the idea and the impact.
            </h2>
          </div>
          <div className="europe-section__copy">
            <p>
              We are interested in joining focused consortia where a startup can
              own a meaningful technical contribution, coordinate delivery, and
              help move the project from concept to a working pilot.
            </p>
            <ul>
              <li>
                Based in Cyprus and available for cross-border collaboration
              </li>
              <li>
                Comfortable with discovery, prototyping, pilots, and product
                delivery
              </li>
              <li>
                Project planning, work-package coordination, reporting, and risk
                tracking
              </li>
              <li>
                Focused on clear communication, documentation, and knowledge
                transfer
              </li>
            </ul>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Currently ── */}
        <section className="currently animate-fadeUp delay-3">
          <h2 className="section-title">Right now</h2>
          <ul className="currently__list">
            {[
              "Shipping Relay for relationship-driven teams",
              "Listening to the people who use our products",
              "Looking for the next piece of workflow friction to remove",
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
  );
}
