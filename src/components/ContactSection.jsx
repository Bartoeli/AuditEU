import { contact } from '../data/content.js';
import { CheckIcon } from './icons.jsx';
import sidloMapa from '../assets/sidlo-mapa.jpg';
import './ContactSection.css';

export default function ContactSection() {
  const { office, auditor } = contact;

  return (
    <section className="block" id="kontakt">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{contact.kicker}</p>
          <h2 className="h2">{contact.title}</h2>
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
            <a className="map-thumb" href={office.mapHref} target="_blank" rel="noreferrer">
              <img src={sidloMapa} alt="Mapa — sídlo Audit EU s.r.o., Wonkova 385/28, Hradec Králové" />
            </a>
          </div>

          <div className="contact-card">
            <h4>{auditor.heading}</h4>
            <div className="contact-name">{auditor.name}</div>
            <p>
              tel:{' '}
              <a className="contact-link" href={`tel:${auditor.phone.replace(/\s/g, '')}`}>
                {auditor.phone}
              </a>
            </p>
            <p>
              e-mail:{' '}
              <a className="contact-link" href={`mailto:${auditor.email}`}>
                {auditor.email}
              </a>
            </p>

            <div className="why-block">
              <h4>{contact.whyTitle}</h4>
              <ul className="check-list">
                {contact.whyItems.map((item) => (
                  <li key={item}>
                    <CheckIcon width="17" height="17" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
