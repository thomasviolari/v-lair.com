import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} V-Lair. Software for the way work moves.
        </p>
        <p className="footer__made">Independent product studio / Cyprus</p>
      </div>
    </footer>
  );
}
