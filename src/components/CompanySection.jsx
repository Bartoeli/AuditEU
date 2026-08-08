import { company } from '../data/content.js';
import './CompanySection.css';

const documentImages = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' });

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

          <div>
            <h3 className="sub-heading">{company.documentsTitle}</h3>
            <div className="cert-grid">
              {company.documents.map((doc) => (
                <a className="cert" href={docSrc(doc.full)} target="_blank" rel="noreferrer" key={doc.title}>
                  <span className="doc-thumb">
                    <img src={docSrc(doc.image)} alt={doc.title} />
                  </span>
                  <span className="cert-label">{doc.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
