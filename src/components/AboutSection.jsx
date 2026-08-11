import { about } from '../data/content.js';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="block block-alt" id="o-spolecnosti">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{about.kicker}</p>
          <h2 className="h2">{about.title}</h2>
        </div>

        <div className="about-cols">
          <div>
            {about.paragraphs.map((p, i) => (
              <p className="body-text" key={i}>
                {p}
              </p>
            ))}
          </div>

          <div className="info-card">
            {about.facts.map((fact) => (
              <div className="info-row" key={fact.label}>
                <b>{fact.label}</b>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
