import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow animate-fadeUp delay-1">
              V-Lair / Cyprus-based technology startup
            </p>
            <h1 className="hero__title animate-fadeUp delay-2">
              A technology partner
              <br />
              <span className="hero__title-accent">
                for ambitious projects.
              </span>
            </h1>
            <p className="hero__subtitle animate-fadeUp delay-3">
              We combine practical software delivery with hands-on project
              management for European innovation projects, growing teams, and
              organisations ready to work differently.
            </p>
            <div className="hero__cta animate-fadeUp delay-4">
              <Link to="/apps" className="btn btn--primary">
                See our capabilities
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/apps/contacts" className="btn btn--ghost">
                Discuss a project
              </Link>
            </div>
          </div>

          <div
            className="hero__signal animate-scaleIn delay-3"
            aria-label="Project delivery overview"
          >
            <div className="hero__signal-top">
              <span>PROJECT DELIVERY</span>
              <span className="hero__signal-status">
                <i /> Ready to partner
              </span>
            </div>
            <div className="hero__signal-number">03</div>
            <p className="hero__signal-heading">
              Workstreams moving
              <br />
              from brief to impact.
            </p>
            <div className="hero__signal-lines">
              <div>
                <span>Strategy & planning</span>
                <b>01</b>
              </div>
              <div>
                <span>Digital delivery</span>
                <b>02</b>
              </div>
              <div>
                <span>Coordination & reporting</span>
                <b>03</b>
              </div>
            </div>
            <div className="hero__signal-foot">EUROPE / CYPRUS / REMOTE</div>
          </div>
        </div>
      </section>

      <section className="project-fit container animate-fadeUp delay-5">
        <div className="project-fit__intro">
          <p className="section-intro__eyebrow">Where we fit</p>
          <h2>
            A small team for
            <br />
            <span>important work.</span>
          </h2>
          <p>
            As a startup, we bring speed, ownership, and a product mindset to
            focused work packages and consortium partnerships.
          </p>
        </div>
        <div className="project-fit__list">
          {[
            {
              number: "01",
              title: "Digital products",
              desc: "Web platforms, workflow tools, and user experiences that make project outcomes useful in the real world.",
            },
            {
              number: "02",
              title: "Data & AI applications",
              desc: "Clear, responsible interfaces for turning operational data into decisions people can act on.",
            },
            {
              number: "03",
              title: "Project management services",
              desc: "We support project planning, work-package coordination, partner communication, progress reporting, risk tracking, and delivery follow-through.",
            },
          ].map(({ number, title, desc }) => (
            <article key={number} className="project-fit__item">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="features container animate-fadeUp delay-5">
        <div className="section-intro">
          <p className="section-intro__eyebrow">Our approach</p>
          <h2>
            Useful outcomes.
            <br />
            <span>Built together.</span>
          </h2>
        </div>
        <div className="features__grid">
          {[
            {
              number: "01",
              label: "Start with the users",
              desc: "We turn complex requirements into experiences people can understand and adopt.",
            },
            {
              number: "02",
              label: "Prototype early",
              desc: "We make progress visible with working software, measurable pilots, and honest feedback.",
            },
            {
              number: "03",
              label: "Leave a strong foundation",
              desc: "We document, transfer knowledge, and build systems that can grow beyond the project.",
            },
          ].map(({ number, label, desc }) => (
            <div key={label} className="feature-card">
              <span className="feature-card__number">{number}</span>
              <strong className="feature-card__label">{label}</strong>
              <p className="feature-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-note container animate-fadeUp delay-6">
        <span className="home-note__mark">↗</span>
        <p>Looking for a startup partner for a European innovation project?</p>
        <Link to="/apps/contacts">
          Start a conversation <span>→</span>
        </Link>
      </section>
      <div className="scroll-hint animate-fadeIn delay-6">
        <div className="scroll-hint__dot" />
      </div>
    </main>
  );
}
