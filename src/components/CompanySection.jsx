import { company } from "../data/content.js";
import "./CompanySection.css";

const documentImages = import.meta.glob("../assets/*.jpg", {
  eager: true,
  import: "default",
});

function docSrc(fileName) {
  return documentImages[`../assets/${fileName}`];
}

export default function CompanySection() {
  return (
    <section className="block" id="firma">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{company.kicker}</p>
          <h2 className="h2">{company.title}</h2>
        </div>

        <div className="split-cols">
          <div className="info-card">
            {company.facts.map((fact) => (
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
