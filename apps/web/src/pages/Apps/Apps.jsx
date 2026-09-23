import { Link } from "react-router-dom";
import "./Apps.css";

const OFFERINGS = [
  {
    id: "products",
    category: "Products",
    title: "Relay",
    description:
      "Our relationship workspace for keeping follow-ups, contacts, and important conversations moving in one place.",
    icon: "↗",
    tags: ["Communication", "Product direction"],
    color: "#ef6a4f",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=78",
  },
  {
    id: "solutions",
    category: "Solutions",
    title: "Digital products",
    description:
      "Web platforms, workflow tools, and user experiences shaped around the people who will use them.",
    icon: "＋",
    tags: ["Web platforms", "Tailored delivery"],
    color: "#e8a344",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=78",
  },
  {
    id: "delivery",
    category: "Project management",
    title: "Public-sector & European delivery",
    description:
      "Planning, work-package coordination, partner communication, reporting, risk tracking, and delivery follow-through.",
    icon: "▦",
    tags: ["Public sector", "European projects"],
    color: "#5c9b83",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=78",
  },
  {
    id: "prototyping",
    category: "Software delivery",
    title: "Prototypes & MVPs",
    description:
      "Fast, focused prototypes that make an idea tangible, test assumptions, and give your team something real to discuss.",
    icon: "◇",
    tags: ["Rapid validation", "Working software"],
    color: "#d47752",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=78",
  },
  {
    id: "data",
    category: "Software delivery",
    title: "Data & AI applications",
    description:
      "Responsible tools that turn operational data into clear information, better decisions, and useful everyday workflows.",
    icon: "✦",
    tags: ["Data products", "AI interfaces"],
    color: "#6c8f86",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=78",
  },
  {
    id: "coordination",
    category: "Project management",
    title: "Coordination & reporting",
    description:
      "A steady operating rhythm for partners, milestones, risks, decisions, and reporting across a complex project.",
    icon: "◎",
    tags: ["Work packages", "Partner alignment"],
    color: "#c18b4d",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=78",
  },
];

export default function Apps() {
  return (
    <main className="apps-page">
      <div className="container">
        <header className="apps-intro animate-fadeUp">
          <div className="apps-intro__copy">
            <p className="page-header__eyebrow">Capabilities & products</p>
            <h1 className="page-header__title">
              Technology that moves projects forward.
            </h1>
            <p className="page-header__subtitle">
              We combine product thinking, software delivery, and project
              management for teams doing work that needs to land in the real
              world.
            </p>
            <div className="apps-intro__meta">
              <span>Based in Cyprus</span>
              <span>Public & private sector</span>
              <span>Small team, senior attention</span>
            </div>
          </div>
          <div className="apps-intro__image">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82"
              alt="A team planning work around a table"
            />
          </div>
        </header>

        <div className="apps-grid">
          {OFFERINGS.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>

        <section className="apps-process animate-fadeUp delay-5">
          <div>
            <p className="page-header__eyebrow">A sensible way to start</p>
            <h2>Useful from the first conversation.</h2>
          </div>
          <div className="apps-process__steps">
            <div>
              <span>01</span>
              <h3>Understand the work</h3>
              <p>
                We clarify the outcome, users, constraints, and people involved.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Make a practical plan</h3>
              <p>
                We turn uncertainty into priorities, milestones, and visible
                next steps.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Deliver and learn</h3>
              <p>
                We build, coordinate, document, and improve with the team around
                us.
              </p>
            </div>
          </div>
        </section>

        <section className="apps-cta animate-fadeUp delay-6">
          <div>
            <p className="page-header__eyebrow">Have a project in mind?</p>
            <h2>Let’s work out where V-Lair fits.</h2>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

function AppCard({ app, index }) {
  const delays = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-5"];
  const delay = delays[index % delays.length];

  const inner = (
    <div className={`app-card animate-fadeUp ${delay}`}>
      <div className="app-card__image">
        <img src={app.image} alt="" />
      </div>
      <div className="app-card__icon-wrap" style={{ "--app-color": app.color }}>
        <span className="app-card__icon">{app.icon}</span>
      </div>
      <div className="app-card__body">
        <p className="app-card__category">{app.category}</p>
        <h3 className="app-card__title">{app.title}</h3>
        <p className="app-card__desc">{app.description}</p>
      </div>
      <div className="app-card__footer">
        <div className="app-card__tags">
          {app.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return inner;
}
