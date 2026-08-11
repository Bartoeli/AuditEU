export const nav = [
  { href: "#sluzby", label: "Služby" },
  { href: "#o-spolecnosti", label: "O společnosti" },
  { href: "#firma", label: "Firma" },
  { href: "#kontakt", label: "Kontakt" },
];

export const hero = {
  eyebrow: "Audit EU s.r.o. · od roku 2006",
  titleBefore: "Nezávislý pohled na vaše ",
  titleAccent: "účetnictví a hospodaření",
  lead: [
    { text: "Poskytujeme ", strong: false },
    { text: "komplexní služby ", strong: true },
    {
      text: "v oblasti účetnictví a ekonomického poradenství pro právnické i fyzické osoby po celé České republice. Pomáháme klientům udržet přesný přehled o hospodaření, identifikujeme rizika, odhalujeme rezervy a nastavujeme procesy a kontrolní mechanismy tak, aby byly efektivní a spolehlivé.",
      strong: false,
    },
  ],
  ctaPrimary: { href: "#kontakt", label: "Domluvit konzultaci" },
};

export const serviceCards = [
  {
    href: "#ekonomicke",
    icon: "chart",
    title: "Ekonomické poradenství",
    description:
      "Podklady pro banky, podnikatelské záměry a sledování ekonomických ukazatelů.",
  },
  {
    href: "#ucetni",
    icon: "ledger",
    title: "Účetní poradenství",
    description:
      "Vedení účetnictví, daňové evidence a zpracování vnitropodnikových směrnic.",
  },
];

export const economicSection = {
  id: "ekonomicke",
  title: "Ekonomické poradenství",
  columns: [
    {
      type: "list",
      wide: true,
      items: [
        "Zpracování podkladů k žádostem o úvěry pro banky",
        "Zpracování podnikatelských záměrů včetně ekonomického posouzení vybraných ukazatelů a veličin",
        "Vyhodnocení ekonomických ukazatelů k určitému datu",
        "Sledování vybraných ekonomických ukazatelů v časové řadě",
        "Ověření funkčnosti vnitřních kontrol, tj. metod, předpisů a postupů používaných ve firmě",
        "Manažerské účetnictví",
      ],
    },
  ],
};

export const accountingSection = {
  id: "ucetni",
  title: "Účetní poradenství",
  columns: [
    {
      type: "list",
      items: [
        "Zpracování účetních závěrek",
        "Zpracování vnitropodnikových směrnic",
        "Poradenství při řešení účetních případů",
        "Vedení účetnictví",
        "Vedení daňové evidence",
      ],
    },
    {
      type: "list",
      items: [
        "Ověření správnosti vnitřních kontrol tj. metod, postupů a předpisů při předávání informací do účetního systému",
        "Prověření informačního systému používaného pro vedení účetnictví se zaměřením na splnění požadavků zákona o účetnictví",
        "Návrhy vnitřního kontrolního systému",
        "Spolupráce při sestavení účetní závěrky",
        "Optimalizace kalkulací a návrh způsobu oceňování",
      ],
    },
  ],
};

export const about = {
  kicker: "O nás",
  paragraphs: [
    "Naše společnost Audit EU s.r.o. byla založena v roce 2006. Její aktuální i bývalí společníci navázali na předchozí několikaleté zkušenosti získané v pracovních poměrech v různých společnostech.",
    "K potřebám klientů přistupujeme individuálně. Našimi stávajícími klienty jsou právnické i fyzické osoby působící v České republice.",
  ],
  facts: [
    { label: "Založeno", value: "2006" },
    { label: "Působnost", value: "Celá Česká republika" },
    { label: "Klienti", value: "Právnické i fyzické osoby" },
  ],
};

export const company = {
  kicker: "Firemní údaje",
  facts: [
    { label: "Název", value: "Audit EU s.r.o." },
    { label: "Sídlo", value: "Wonkova 385/28, 500 02 Hradec Králové" },
    { label: "IČ", value: "27505570" },
    { label: "DIČ", value: "CZ27505570" },
    { label: "Působnost", value: "Po celé České republice" },
  ],
};

const officeAddressQuery = encodeURIComponent("Wonkova 385/28, 500 02 Hradec Králové");

export const contact = {
  kicker: "Spojte se s námi",
  office: {
    heading: "Sídlo společnosti",
    name: "Audit EU s.r.o.",
    addressLines: ["Wonkova 385/28", "500 02 Hradec Králové"],
    email: "bartosova@auditeu.cz",
    web: { label: "www.auditeu.cz", href: "http://www.auditeu.cz" },
    mapHref: `https://www.google.com/maps/search/?api=1&query=${officeAddressQuery}`,
    mapEmbedSrc: `https://www.google.com/maps?q=${officeAddressQuery}&output=embed`,
  },
};

export const footer = {
  brandName: "Audit EU s.r.o.",
  description:
    "Nezávislý auditorský pohled na účetní výkazy a komplexní služby v oblasti účetnictví a ekonomického poradenství. Držitel oprávnění č. 468 vydaného Komorou auditorů ČR.",
  navTitle: "Navigace",
  navLinks: [
    { href: "#sluzby", label: "Služby" },
    { href: "#o-spolecnosti", label: "O společnosti" },
    { href: "#firma", label: "Firma" },
  ],
  contactTitle: "Kontakt",
  contactLinks: [
    { href: "mailto:mail@auditeu.cz", label: "mail@auditeu.cz" },
    { href: "tel:+420603228993", label: "+420 603 228 993" },
    { href: "#kontakt", label: "Wonkova 385/28, Hradec Králové" },
  ],
  copyright: "© 2007–2026 Audit EU s.r.o. Všechna práva vyhrazena.",
  backToTop: "Nahoru ↑",
};
