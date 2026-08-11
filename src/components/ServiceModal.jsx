import Modal from './Modal.jsx';
import { CheckIcon } from './icons.jsx';

function TextColumn({ subTitle, paragraphs }) {
  return (
    <div>
      {subTitle && <h3 className="sub-heading">{subTitle}</h3>}
      {paragraphs.map((p, i) => (
        <p className="body-text" key={i}>
          {p}
        </p>
      ))}
    </div>
  );
}

function ListColumn({ subTitle, items, wide }) {
  return (
    <div>
      {subTitle && <h3 className="sub-heading">{subTitle}</h3>}
      <ul className={`check-list${wide ? ' check-list-wide' : ''}`}>
        {items.map((item) => (
          <li key={item}>
            <CheckIcon width="17" height="17" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceModal({ open, onClose, section }) {
  return (
    <Modal open={open} onClose={onClose} title={section?.title}>
      {section?.columns?.map((col, i) =>
        col.type === 'text' ? (
          <TextColumn key={i} subTitle={col.subTitle} paragraphs={col.paragraphs} />
        ) : (
          <ListColumn key={i} subTitle={col.subTitle} items={col.items} wide={col.wide} />
        )
      )}
    </Modal>
  );
}
