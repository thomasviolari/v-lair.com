import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} Thomas Violari. Built with Vite + React.</p>
        <p className="footer__made">Made with ☕ in Cyprus</p>
      </div>
    </footer>
  )
}
