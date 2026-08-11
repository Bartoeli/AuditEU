import { hero, serviceCards } from "../data/content.js";
import { ServiceIcon, ShieldIcon } from "./icons.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="eyebrow">{hero.eyebrow}</div>

      <h1 className="hero-title">
        {hero.titleBefore}
        <span>{hero.titleAccent}</span>
      </h1>

      <p className="hero-lead">
        {hero.lead.map((part, i) =>
          part.strong ? (
            <strong key={i}>{part.text}</strong>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href={hero.ctaPrimary.href}>
          {hero.ctaPrimary.label}
        </a>
      </div>

      <div className="service-cards" id="sluzby">
        {serviceCards.map((card) => (
          <a className="s-card" href={card.href} key={card.href}>
            <div className="ico">
              <ServiceIcon name={card.icon} width="22" height="22" />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="go">Zjistit více →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
