import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow animate-fadeUp delay-1">
              Cyprus-based product & delivery partner
            </p>
            <h1 className="hero__title animate-fadeUp delay-2">
              A technology partner
              <br />
              <span className="hero__title-accent">
                for ambitious projects.
              </span>
            </h1>
            <p className="hero__subtitle animate-fadeUp delay-3">
              We help public-sector teams, European initiatives, and growing
              organisations turn complex work into usable services, clear plans,
              and reliable delivery momentum.
            </p>
            <div className="hero__cta animate-fadeUp delay-4">
              <Link to="/apps" className="btn btn--primary">
                Explore our services
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
              <Link to="/contact" className="btn btn--ghost">
                Discuss a project
              </Link>
            </div>
          </div>

          <aside
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
            <div className="hero__signal-image">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82"
                alt="A team reviewing project work together"
                fetchPriority="high"
              />
            </div>
            <div className="hero__signal-lines">
              <div>
                <span>Strategy &amp; planning</span>
                <b>01</b>
              </div>
              <div>
                <span>Digital delivery</span>
                <b>02</b>
              </div>
              <div>
                <span>Coordination &amp; reporting</span>
                <b>03</b>
              </div>
            </div>
            <div className="hero__signal-foot">
              PUBLIC SECTOR / EUROPE / REMOTE
            </div>
          </aside>
        </div>
      </section>

      <section className="project-fit container animate-fadeUp delay-5">
        <div className="project-fit__intro">
          <p className="section-intro__eyebrow">Where we fit</p>
          <h2>
            A capable partner for
            <br />
            <span>important work.</span>
          </h2>
          <p>
            We bring product thinking, delivery discipline, and clear
            communication to public services, European initiatives, and
            organisations improving the way people work.
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

      <section className="proof container animate-fadeUp delay-5">
        <div className="section-intro">
          <p className="section-intro__eyebrow">Selected work patterns</p>
          <h2>Delivery shaped by real constraints.</h2>
        </div>
        <div className="proof__grid">
          {[
            {
              title: "Public service workflows",
              text: "Digital systems designed to simplify complex processes and make operations clearer for teams and users.",
            },
            {
              title: "European project coordination",
              text: "Structured planning, tracking, and reporting that keep partners aligned and progress visible across stakeholders.",
            },
            {
              title: "Product and MVP validation",
              text: "Fast prototypes and focused delivery to test the idea, map the user need, and drive better decisions early.",
            },
          ].map(({ title, text }) => (
            <article key={title} className="proof-card">
              <span className="proof-card__number">↗</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-story container animate-fadeUp delay-5">
        <div className="home-story__media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://images.pexels.com/videos/8632590/pexels-photo-8632590.jpeg?auto=compress&dpr=1&h=750&w=1260"
            aria-hidden="true"
          >
            <source
              src="https://videos.pexels.com/video-files/8632590/8632590-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="home-story__copy">
          <p className="section-intro__eyebrow">The way we work</p>
          <h2>Good delivery is a team sport.</h2>
          <p>
            The best work happens when the people, priorities, and technology
            are moving in the same direction. We bring structure to that
            conversation and help turn it into something people can use.
          </p>
          <Link to="/about" className="home-story__link">
            More about V-Lair <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="features container animate-fadeUp delay-5">
        <div className="section-intro">
          <p className="section-intro__eyebrow">Our approach</p>
          <h2>Useful outcomes, built together.</h2>
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
        <p>Have a public-sector, software, or project delivery challenge?</p>
        <Link to="/contact">
          Start a conversation <span>→</span>
        </Link>
      </section>
    </main>
  );
}
