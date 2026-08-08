import { footer } from '../data/content.js';
import logo from '../assets/logo.png';
import footerBracket from '../assets/footer-bracket.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-mark" src={footerBracket} alt="" aria-hidden="true" />

      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Audit EU" />
              <span>{footer.brandName}</span>
            </div>
            <p>{footer.description}</p>
          </div>

          <div>
            <h5>{footer.navTitle}</h5>
            <ul>
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{footer.contactTitle}</h5>
            <ul>
              {footer.contactLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <a href="#home">{footer.backToTop}</a>
        </div>
      </div>
    </footer>
  );
}
