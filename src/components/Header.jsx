import { useState } from "react";
import { nav } from "../data/content.js";
import { MenuIcon } from "./icons.jsx";
import MobileMenu from "./MobileMenu.jsx";
import logo from "../assets/logo.png";
import "./Header.css";

function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={scrollToTop}>
          <img src={logo} alt="Audit EU" />
        </a>

        <nav className="main-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon width="20" height="20" />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
