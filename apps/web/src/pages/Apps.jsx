import { Link } from "react-router-dom";
import "./Apps.css";

// ── Add your apps here ──────────────────────────────────────────────────────
// Each entry will appear as a card in the grid.
// Set `ready: false` to show it as "Coming soon"
const APPS = [
  {
    id: "placeholder-1",
    title: "App One",
    description: "Your first mini app. Replace this with a real one.",
    icon: "🚀",
    tags: ["React", "API"],
    color: "#0071e3",
    ready: false,
    path: "/apps/placeholder-1",
  },
  {
    id: "placeholder-2",
    title: "App Two",
    description: "Another tool you are building. Keep it modular.",
    icon: "🧩",
    tags: ["Node.js", "Microservice"],
    color: "#30d158",
    ready: false,
    path: "/apps/placeholder-2",
  },
  {
    id: "placeholder-3",
    title: "App Three",
    description: "Coming soon. Something creative is brewing here.",
    icon: "✨",
    tags: ["Experiment"],
    color: "#bf5af2",
    ready: false,
    path: "/apps/placeholder-3",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Apps() {
  return (
    <main className="apps-page">
      <div className="container">
        <header className="page-header animate-fadeUp">
          <p className="page-header__eyebrow">Mini Apps</p>
          <h1 className="page-header__title">The Lab</h1>
          <p className="page-header__subtitle">
            Small, focused tools — each solving one problem well.
          </p>
        </header>

        <div className="apps-grid">
          {APPS.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}

          {/* Add new app placeholder */}
          <div className="app-card app-card--add animate-fadeUp delay-6">
            <span className="app-card__add-icon">+</span>
            <p className="app-card__add-text">New app coming soon</p>
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
        {!app.ready && <span className="badge-soon">Soon</span>}
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
