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

export default function ServiceSection({ id, kicker, title, intro, columns, variant }) {
  const singleColumn = columns.length === 1;

  return (
    <section className={`block${variant === 'alt' ? ' block-alt' : ''}`} id={id}>
      <div className="container">
        <div className="section-head">
          <p className="kicker">{kicker}</p>
          <h2 className="h2">{title}</h2>
          {intro && <p>{intro}</p>}
        </div>

        <div className={singleColumn ? '' : 'split-cols'}>
          {columns.map((col, i) =>
            col.type === 'text' ? (
              <TextColumn key={i} subTitle={col.subTitle} paragraphs={col.paragraphs} />
            ) : (
              <ListColumn key={i} subTitle={col.subTitle} items={col.items} wide={col.wide} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
