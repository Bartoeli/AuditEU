export const nav = [
  { href: '#home', label: 'Domů' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#o-spolecnosti', label: 'O společnosti' },
  { href: '#firma', label: 'Firma' },
  { href: '#reference', label: 'Reference' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const brand = {
  name: 'Audit EU',
  tagline: 'auditorské a účetní služby',
};

export const hero = {
  eyebrow: 'Audit EU s.r.o. · od roku 2006',
  titleBefore: 'Nezávislý pohled na vaše ',
  titleAccent: 'účetnictví a hospodaření',
  lead: [
    { text: 'Posláním naší ', strong: false },
    { text: 'auditorské práce', strong: true },
    {
      text: ' je nezávislý pohled na účetní výkazy klienta. Ověřením účetních výkazů publikovaných vedením společnosti zvyšujeme jejich věrohodnost — jednak pro externí subjekty jako jsou banky a věřitelé, jednak pro akcionáře a majitele. Dále poskytujeme komplexní služby v oblasti ',
      strong: false,
    },
    { text: 'účetnictví a ekonomického poradenství', strong: true },
    { text: '.', strong: false },
  ],
  ctaPrimary: { href: '#kontakt', label: 'Domluvit konzultaci' },
  ctaSecondary: { href: '#sluzby', label: 'Naše služby' },
  trustLine: 'Držitel oprávnění č. 468 vydaného Komorou auditorů České republiky',
};

export const serviceCards = [
  {
    href: '#audit',
    icon: 'check',
    title: 'Auditorské služby',
    description: 'Ověřování účetních závěrek, výročních zpráv a čerpání dotací dle zákona o auditorech.',
  },
  {
    href: '#ekonomicke',
    icon: 'chart',
    title: 'Ekonomické poradenství',
    description: 'Podklady pro banky, podnikatelské záměry a sledování ekonomických ukazatelů.',
  },
  {
    href: '#ucetni',
    icon: 'ledger',
    title: 'Účetní poradenství',
    description: 'Vedení účetnictví, daňové evidence a zpracování vnitropodnikových směrnic.',
  },
];

export const auditSection = {
  id: 'audit',
  kicker: 'Služby · 01',
  title: 'Auditorské služby dle zákona č. 93/2009 Sb.',
  intro:
    'Poslání a smysl auditu je vyjádřit názor nezávislé, kvalifikované osoby na věrohodnost účetní závěrky zveřejněné vedením účetní jednotky.',
  variant: 'plain',
  columns: [
    {
      type: 'text',
      subTitle: 'Poslání a smysl auditu',
      paragraphs: [
        'Auditor ověřuje, zda údaje uvedené v účetní závěrce věrně zobrazují stav majetku a závazků, finanční situaci a výsledek hospodaření společnosti v souladu s pravidly předepsanými českými nebo jinými účetními předpisy, často s Mezinárodními účetními standardy.',
        'Povinnost ověření účetní závěrky auditorem mají účetní jednotky specifikované v §20 zákona č. 563/1991 Sb., o účetnictví.',
      ],
    },
    {
      type: 'list',
      subTitle: 'Nabízíme mimo jiné',
      items: [
        'Ověřování účetních závěrek',
        'Ověřování konsolidovaných účetních závěrek',
        'Ověřování výročních zpráv',
        'Ověřování zprávy o vztazích mezi propojenými osobami',
        'Ověřování mezitímních účetních závěrek a zahajovacích rozvah při přeměnách společností',
        'Ověřování účetních informací pro specifické účely; například ověření pohledávek nebo závazků při navyšování základního kapitálu',
        'Ověřování dalších ekonomických informací',
        'Ověřování čerpání dotací',
      ],
    },
  ],
};

export const economicSection = {
  id: 'ekonomicke',
  kicker: 'Služby · 02',
  title: 'Ekonomické poradenství',
  variant: 'alt',
  columns: [
    {
      type: 'list',
      wide: true,
      items: [
        'Zpracování podkladů k žádostem o úvěry pro banky',
        'Zpracování podnikatelských záměrů včetně ekonomického posouzení vybraných ukazatelů a veličin',
        'Vyhodnocení ekonomických ukazatelů k určitému datu',
        'Sledování vybraných ekonomických ukazatelů v časové řadě',
        'Ověření funkčnosti vnitřních kontrol, tj. metod, předpisů a postupů používaných ve firmě',
        'Manažerské účetnictví',
      ],
    },
  ],
};

export const accountingSection = {
  id: 'ucetni',
  kicker: 'Služby · 03',
  title: 'Účetní poradenství',
  variant: 'plain',
  columns: [
    {
      type: 'list',
      items: [
        'Zpracování účetních závěrek',
        'Zpracování vnitropodnikových směrnic',
        'Poradenství při řešení účetních případů',
        'Vedení účetnictví',
        'Vedení daňové evidence',
      ],
    },
    {
      type: 'list',
      items: [
        'Ověření správnosti vnitřních kontrol tj. metod, postupů a předpisů při předávání informací do účetního systému',
        'Prověření informačního systému používaného pro vedení účetnictví se zaměřením na splnění požadavků zákona o účetnictví',
        'Návrhy vnitřního kontrolního systému',
        'Spolupráce při sestavení účetní závěrky',
        'Optimalizace kalkulací a návrh způsobu oceňování',
      ],
    },
  ],
};

export const about = {
  kicker: 'O nás',
  title: 'O společnosti',
  paragraphs: [
    'Naše společnost Audit EU s.r.o. byla založena v roce 2006. Její aktuální i bývalí společníci navázali na předchozí několikaleté zkušenosti získané v pracovních poměrech v různých auditorských společnostech. Audit EU s.r.o. je držitelem oprávnění č. 468 vydané Komorou auditorů České republiky.',
    'Auditoři i asistenti auditorů při své práci důsledně uplatňují metodiku, která se opírá o auditorské standardy vydané Komorou auditorů České republiky. Všichni zaměstnanci se průběžně vzdělávají, aby byli ve svém oboru opravdovými profesionály.',
    'K potřebám klientů přistupujeme individuálně. Našimi stávajícími klienty jsou právnické i fyzické osoby působící v České republice.',
  ],
  facts: [
    { label: 'Založeno', value: '2006' },
    { label: 'Oprávnění', value: 'č. 468, Komora auditorů ČR' },
    { label: 'Působnost', value: 'Celá Česká republika' },
    { label: 'Klienti', value: 'Právnické i fyzické osoby' },
  ],
};

export const company = {
  kicker: 'Firemní údaje',
  title: 'Firma',
  facts: [
    { label: 'Název', value: 'Audit EU s.r.o.' },
    { label: 'Sídlo', value: 'Wonkova 385/28, 500 02 Hradec Králové' },
    { label: 'IČ', value: '27505570' },
    { label: 'DIČ', value: 'CZ27505570' },
    { label: 'Působnost', value: 'Po celé České republice' },
  ],
  documentsTitle: 'Dokumenty ke stažení / náhledu',
  documents: [
    {
      title: 'Výpis z obchodního rejstříku',
      image: 'vypis-obchodni-rejstrik-nahled.jpg',
      full: 'vypis-obchodni-rejstrik.jpg',
    },
    {
      title: 'Osvědčení o zápisu do seznamu auditorských společností',
      image: 'osvedceni-auditorska-spolecnost-nahled.jpg',
      full: 'osvedceni-auditorska-spolecnost.jpg',
    },
    {
      title: 'Osvědčení o zápisu do seznamu auditorů',
      image: 'osvedceni-auditor-bartosova-nahled.jpg',
      full: 'osvedceni-auditor-bartosova.jpg',
    },
  ],
};

export const reference = {
  kicker: 'Klienti',
  title: 'Reference',
  clients: [
    'AG Com, a.s.',
    'ASPA a.s.',
    'DLNK s.r.o.',
    'FEIFER – kovovýroba, spol. s r.o.',
    'FREE ZONE Pardubice, a.s.',
    'Jiří Hartman – elektro',
    'TMM s.r.o.',
    'TOTO CZ a.s.',
  ],
  note: {
    strong: 'Subjekty veřejného zájmu:',
    text: 'Neprovádíme audit subjektů veřejného zájmu dle §2a zákona č. 93/2009 Sb., o auditorech.',
  },
};

export const contact = {
  kicker: 'Spojte se s námi',
  title: 'Kontakt',
  office: {
    heading: 'Sídlo společnosti',
    name: 'Audit EU s.r.o.',
    addressLines: ['Wonkova 385/28', '500 02 Hradec Králové'],
    email: 'mail@auditeu.cz',
    web: { label: 'www.auditeu.cz', href: 'http://www.auditeu.cz' },
    mapHref: 'https://mapy.cz/s/tyw2',
  },
  auditor: {
    heading: 'Auditorka',
    name: 'Mgr. Michaela Bartošová',
    phone: '+420 603 228 993',
    email: 'bartosova@auditeu.cz',
  },
  whyTitle: 'Proč Audit EU',
  whyItems: [
    'Individuální přístup ke každému klientovi',
    'Zkušenosti od roku 2006',
    'Působnost po celé ČR',
  ],
};

export const footer = {
  brandName: 'Audit EU s.r.o.',
  description:
    'Nezávislý auditorský pohled na účetní výkazy a komplexní služby v oblasti účetnictví a ekonomického poradenství. Držitel oprávnění č. 468 vydaného Komorou auditorů ČR.',
  navTitle: 'Navigace',
  navLinks: [
    { href: '#sluzby', label: 'Služby' },
    { href: '#o-spolecnosti', label: 'O společnosti' },
    { href: '#firma', label: 'Firma' },
    { href: '#reference', label: 'Reference' },
  ],
  contactTitle: 'Kontakt',
  contactLinks: [
    { href: 'mailto:mail@auditeu.cz', label: 'mail@auditeu.cz' },
    { href: 'tel:+420603228993', label: '+420 603 228 993' },
    { href: '#kontakt', label: 'Wonkova 385/28, Hradec Králové' },
  ],
  copyright: '© 2007–2026 Audit EU s.r.o. Všechna práva vyhrazena.',
  backToTop: 'Nahoru ↑',
};
