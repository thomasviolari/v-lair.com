import { useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../lib/api";
import "./Contact.css";

const DIRECT_EMAIL = "thomasviolari@gmail.com";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [emailFallback, setEmailFallback] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    setEmailFallback(false);

    try {
      const response = await fetch(apiUrl("email/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 503) {
          setEmailFallback(true);
        }
        throw new Error(data.error || "We could not send your message.");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (submitError) {
      if (submitError.message.includes("not configured")) setEmailFallback(true);
      setStatus("error");
      setError(
        submitError.message ||
          "We could not send your message. Please try again or email us directly.",
      );
    }
  };

  if (status === "sent") {
    return (
      <main className="contact-page">
        <div className="container contact-page__layout">
          <section className="contact-intro animate-fadeUp">
            <p className="page-header__eyebrow">Message sent</p>
            <h1 className="page-header__title">Thanks for getting in touch.</h1>
            <p>
              Your message is on its way. We will read it and get back to you as
              soon as possible.
            </p>
            <Link to="/" className="contact-back-link">
              Back to V-Lair <span>↗</span>
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <div className="container contact-page__layout">
        <section className="contact-intro animate-fadeUp">
          <div className="contact-intro__image">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=82"
              alt="People discussing a project together"
            />
          </div>
          <p className="page-header__eyebrow">Contact V-Lair</p>
          <h1 className="page-header__title">
            Tell us what you are working on.
          </h1>
          <p>
            Give us the short version. What are you building, where are you
            stuck, and what kind of help would make a difference?
          </p>
          <p className="contact-intro__note">
            You can also write directly to{" "}
            <a href={`mailto:${DIRECT_EMAIL}`}>{DIRECT_EMAIL}</a>
          </p>
        </section>

        <form
          className="contact-form animate-fadeUp delay-1"
          onSubmit={handleSubmit}
        >
          <label>
            Your name
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Company or organisation <span>(optional)</span>
            <input
              name="company"
              value={form.company}
              onChange={updateField}
              autoComplete="organization"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="7"
              required
            />
          </label>

          <input
            className="contact-form__trap"
            name="website"
            value={form.website}
            onChange={updateField}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          {status === "error" && (
            <p className="contact-form__error">
              {emailFallback
                ? "Online sending is not available yet. Please email us directly: "
                : `${error} `}
              {emailFallback && (
                <a href={`mailto:${DIRECT_EMAIL}?subject=Project%20enquiry`}>
                  {DIRECT_EMAIL}
                </a>
              )}
            </p>
          )}

          <button
            className="btn btn--primary contact-form__submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
            {status !== "sending" && <span aria-hidden="true">↗</span>}
          </button>
        </form>
      </div>
    </main>
  );
}
