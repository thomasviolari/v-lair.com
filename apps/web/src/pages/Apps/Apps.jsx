import { Link } from "react-router-dom";
import "./Apps.css";

const APPS = [
  {
    id: "contact",
    title: "Relay",
    description:
      "A calmer way to manage relationships, follow-ups, and the conversations that keep work moving.",
    icon: "↗",
    tags: ["Communication", "Live"],
    color: "#ef6a4f",
    ready: true,
    path: "/apps/contacts",
  },
  {
    id: "placeholder-2",
    title: "Signal",
    description: "A focused workspace for turning scattered customer feedback into clear next steps.",
    icon: "+",
    tags: ["Insights", "Coming soon"],
    color: "#e8a344",
    ready: false,
    path: "/apps/placeholder-2",
  },
  {
    id: "placeholder-3",
    title: "Project delivery",
    description: "Planning, coordination, reporting, and delivery support for ambitious technical projects.",
    icon: "~",
    tags: ["Management", "Service"],
    color: "#5c9b83",
    ready: false,
    status: "Available",
    path: "/apps/placeholder-3",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Apps() {
  return (
    <main className="apps-page">
      <div className="container">
        <header className="page-header animate-fadeUp">
          <p className="page-header__eyebrow">Capabilities & products</p>
          <h1 className="page-header__title">Technology that moves projects forward.</h1>
          <p className="page-header__subtitle">
            From working prototypes to useful products, we help ambitious teams turn complex ideas into something people can use.
          </p>
        </header>

        <div className="apps-grid">
          {APPS.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}

          {/* Add new app placeholder */}
          <div className="app-card app-card--add animate-fadeUp delay-6">
            <span className="app-card__add-icon">+</span>
            <p className="app-card__add-text">More products in the works</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function AppCard({ app, index }) {
  const delays = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-5"];
  const delay = delays[index % delays.length];

  const inner = (
    <div
      className={`app-card animate-fadeUp ${delay} ${!app.ready ? "app-card--soon" : ""}`}
    >
      <div className="app-card__icon-wrap" style={{ "--app-color": app.color }}>
        <span className="app-card__icon">{app.icon}</span>
      </div>
      <div className="app-card__body">
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
        {!app.ready && (
          <span className={app.status === "Available" ? "badge-ready" : "badge-soon"}>
            {app.status || "Soon"}
          </span>
        )}
        {app.ready && (
          <span className="badge-ready">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Open
          </span>
        )}
      </div>
    </div>
  );

  return app.ready ? (
    <Link to={app.path} style={{ textDecoration: "none" }}>
      {inner}
    </Link>
  ) : (
    inner
  );
}
