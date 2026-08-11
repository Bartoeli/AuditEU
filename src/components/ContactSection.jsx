import { contact } from "../data/content.js";
import { CheckIcon } from "./icons.jsx";
import "./ContactSection.css";

export default function ContactSection() {
  const { office, auditor } = contact;

  return (
    <section className="block" id="kontakt">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{contact.kicker}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h4>{office.heading}</h4>
            <div className="contact-name">{office.name}</div>
            <p>
              {office.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < office.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="contact-links">
              <a className="contact-link" href={`mailto:${office.email}`}>
                {office.email}
              </a>
            </p>
            <p>
              <a className="contact-link" href={office.web.href}>
                {office.web.label}
              </a>
            </p>
            <div className="map-embed">
              <iframe
                src={office.mapEmbedSrc}
                title={`Mapa — ${office.name}, ${office.addressLines.join(", ")}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="contact-link map-link"
              href={office.mapHref}
              target="_blank"
              rel="noreferrer"
            >
              Otevřít na Google Mapách →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
