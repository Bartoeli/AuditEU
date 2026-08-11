import { useEffect } from 'react';
import { CloseIcon } from './icons.jsx';
import './Modal.css';

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" aria-label="Zavřít" onClick={onClose}>
          <CloseIcon width="18" height="18" />
        </button>
        <h2 className="modal-title" id="modal-title">
          {title}
        </h2>
        <div className="modal-columns">{children}</div>
      </div>
    </div>
  );
}
