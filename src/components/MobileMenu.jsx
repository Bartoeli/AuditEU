import { nav } from '../data/content.js';
import './MobileMenu.css';

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-nav${open ? ' mobile-nav-open' : ''}`}>
      {nav.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
