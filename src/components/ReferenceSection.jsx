import { reference } from '../data/content.js';
import { BuildingIcon } from './icons.jsx';
import './ReferenceSection.css';

export default function ReferenceSection() {
  return (
    <section className="block block-alt" id="reference">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{reference.kicker}</p>
          <h2 className="h2">{reference.title}</h2>
        </div>

        <div className="ref-grid">
          {reference.clients.map((client) => (
            <div key={client}>
              <BuildingIcon width="16" height="16" />
              {client}
            </div>
          ))}
        </div>

        <div className="note-box">
          <strong>{reference.note.strong}</strong> {reference.note.text}
        </div>
      </div>
    </section>
  );
}
