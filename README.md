# Audit EU s.r.o. — web

One-page React (Vite) prezentace pro Audit EU s.r.o. — auditorská, účetní a ekonomická poradenská firma.
Statický frontend, žádný backend/CMS.

## Vývoj

```bash
npm install
npm run dev
```

## Produkční build

```bash
npm run build
```

Výstup se generuje do `dist/`.

## Struktura

- `src/styles/tokens.css` — barvy, typografie, spacing, radius, stíny (jediný zdroj pravdy pro design)
- `src/styles/global.css` — reset, base typografie, sdílené utility třídy
- `src/data/content.js` — veškerý textový obsah stránky
- `src/components/` — jedna komponenta = jeden soubor + vlastní `.css`
