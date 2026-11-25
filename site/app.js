// ---------------------------------------------------------------- Diller
// Türkçe metin HTML'in içindedir; burada yalnızca çeviriler durur.
const translations = {
  en: {
    title: 'Lawyer Yasin Dedeli · Antalya',
    description: 'Lawyer Yasin Dedeli — Antalya. Professional information and contact details.',
    skip: 'Skip to content', name: 'Yasin Dedeli', fullName: 'Lawyer Yasin Dedeli', brand: 'LAWYER · ANTALYA',
    menu: 'Menu', navLabel: 'Main menu', langLabel: 'Language',
    home: 'Home', practice: 'Practice', about: 'About', contact: 'Contact',
    location: 'ANTALYA · TÜRKİYE', hero: 'Law · Consultancy · Mediation', contactInfo: 'Contact details',
    bar: 'Antalya Bar Association · Reg. No. 2727',
    stripName: 'LAWYER YASIN DEDELI', stripBar: 'ANTALYA BAR ASSOCIATION · 2727', stripCity: 'ANTALYA, TÜRKİYE',
    practiceLabel: 'PRACTICE', practiceTitle: 'Professional practice.',
    consulting: 'Legal consultancy',
    consulting1: 'Legal matters are assessed within the framework of the applicable legislation and the documents submitted; legal opinions are given on rights and obligations, and information is provided on the legal remedies available.',
    consulting2: 'We provide consultancy on drafting the contracts and other documents required for the establishment, continuation or termination of legal relationships between parties, and on the legal review of texts already prepared.',
    representation: 'Legal representation',
    representation1: 'Our office mainly handles civil and criminal cases as well as enforcement files.',
    representation2: 'These include construction in return for flats, subcontracting, preliminary sale contracts, purchase and sale, cancellation and registration of title deeds, dissolution of co-ownership, commercial cases, enforcement proceedings, all cases arising from enforcement law, labour cases, law on foreigners, compensation cases arising from traffic and occupational accidents, and other compensation cases.',
    representation3: 'Insurance, real estate, tenancy, contract, banking, energy, petroleum, family and company law are also among the fields of practice.',
    mediation: 'Mediation',
    mediation1: 'Since 2022, mandatory and voluntary mediation services have been provided under the Antalya Mediation Bureau in the capacity of specialist mediator in Commercial, Labour and Tenancy Law.',
    mediation2: 'Mediation aims for the parties to reach an agreement on resolving the dispute amicably, in a short time and at lower cost, without being exposed to long and exhausting judicial proceedings that place a financial burden on them.',
    mediation3: 'Mediation is a process conducted with the participation of an impartial and independent third person who helps the parties negotiate the dispute and form their own solution. Confidentiality and equality of the parties are fundamental to the meetings. The mediator does not rule on the dispute as a judge would; the parties decide whether an agreement is reached.',
    aboutLabel: 'ABOUT',
    bio: 'Graduated from Anadolu University Faculty of Law, Eskişehir, in 2006. Has practised as a self-employed lawyer registered with the Antalya Bar Association since 2007.',
    officeHistory: 'The practice has operated as Yasin Dedeli Law Office since 01.02.2010.',
    mediatorBio: 'Alongside legal practice, has conducted mandatory and voluntary mediation under the Antalya Mediation Bureau since 2022, in the capacity of specialist mediator in Commercial, Labour and Tenancy Law.',
    principlesTitle: 'Our working principles',
    principle1: 'Before disputes arise: to provide preventive legal review and consultancy.',
    principle2: 'After a dispute has arisen: to provide consultancy on sound and short-term methods of resolution.',
    barLabel: 'Bar association', barValue: 'Antalya Bar Association', numberLabel: 'Bar registration number',
    cityLabel: 'Place of practice', cityValue: 'Antalya, Türkiye',
    contactLabel: 'CONTACT', phone: 'PHONE', email: 'E-MAIL', address: 'ADDRESS',
    mapTitle: 'MURATPAŞA / ANTALYA', mapLabel: 'Map of the office address', directions: 'Open in Maps ↗', top: 'Back to top ↑'
  },
  ru: {
    title: 'Адвокат Ясин Дедели · Анталья',
    description: 'Адвокат Ясин Дедели — Анталья. Профессиональная информация и контакты.',
    skip: 'Перейти к содержимому', name: 'Ясин Дедели', fullName: 'Адвокат Ясин Дедели', brand: 'АДВОКАТ · АНТАЛЬЯ',
    menu: 'Меню', navLabel: 'Главное меню', langLabel: 'Язык',
    home: 'Главная', practice: 'Деятельность', about: 'Обо мне', contact: 'Контакты',
    location: 'АНТАЛЬЯ · ТУРЦИЯ', hero: 'Право · Консультации · Медиация', contactInfo: 'Контактная информация',
    bar: 'Коллегия адвокатов Антальи · № 2727',
    stripName: 'АДВОКАТ ЯСИН ДЕДЕЛИ', stripBar: 'КОЛЛЕГИЯ АДВОКАТОВ АНТАЛЬИ · 2727', stripCity: 'АНТАЛЬЯ, ТУРЦИЯ',
    practiceLabel: 'ДЕЯТЕЛЬНОСТЬ', practiceTitle: 'Профессиональная деятельность.',
    consulting: 'Юридические консультации',
    consulting1: 'Правовые вопросы рассматриваются с учётом применимого законодательства и представленных документов; даются юридические заключения о правах и обязанностях, предоставляется информация о возможных правовых способах защиты.',
    consulting2: 'Мы консультируем по вопросам составления договоров и иных документов, необходимых для установления, продолжения или прекращения правовых отношений между сторонами, а также по вопросам правовой проверки ранее подготовленных текстов.',
    representation: 'Адвокатская деятельность',
    representation1: 'Наше бюро преимущественно ведёт гражданские и уголовные дела, а также дела исполнительного производства.',
    representation2: 'В их числе: строительство в обмен на долю в недвижимости, субподряд, предварительные договоры купли-продажи, купля-продажа, аннулирование и регистрация права собственности, прекращение общей собственности, коммерческие споры, исполнительное производство, любые дела, возникающие из исполнительного права, трудовые споры, правовое положение иностранцев, иски о возмещении вреда вследствие дорожно-транспортных происшествий и несчастных случаев на производстве, а также иные иски о возмещении вреда.',
    representation3: 'К направлениям деятельности также относятся страховое право, право недвижимости, арендное, договорное, банковское, энергетическое, нефтяное, семейное и корпоративное право.',
    mediation: 'Медиация',
    mediation1: 'С 2022 года при Бюро медиации Антальи оказываются услуги обязательной и добровольной медиации в качестве специализированного медиатора в области коммерческого, трудового и арендного права.',
    mediation2: 'Цель медиации — достижение сторонами соглашения о мирном разрешении спора в короткие сроки и с меньшими расходами, без длительных и изнурительных судебных процедур, влекущих для сторон материальные затраты.',
    mediation3: 'Медиация — это процедура с участием нейтрального и независимого третьего лица, которое помогает сторонам обсудить спор и выработать собственное решение. Переговоры проводятся с соблюдением конфиденциальности и равенства сторон. Медиатор не разрешает спор как судья: решение о достижении соглашения принимают сами стороны.',
    aboutLabel: 'ОБО МНЕ',
    bio: 'В 2006 году окончил юридический факультет Университета Анадолу в Эскишехире. С 2007 года занимается частной адвокатской практикой, являясь членом Коллегии адвокатов Антальи.',
    officeHistory: 'С 01.02.2010 осуществляет деятельность как «Адвокатское бюро Ясина Дедели».',
    mediatorBio: 'Наряду с адвокатской деятельностью с 2022 года проводит обязательные и добровольные медиации при Бюро медиации Антальи в качестве специализированного медиатора в области коммерческого, трудового и арендного права.',
    principlesTitle: 'Принципы нашей работы',
    principle1: 'До возникновения споров — предоставлять превентивную правовую проверку и консультации.',
    principle2: 'После возникновения спора — консультировать по надёжным и краткосрочным способам его разрешения.',
    barLabel: 'Коллегия адвокатов', barValue: 'Коллегия адвокатов Антальи', numberLabel: 'Регистрационный номер',
    cityLabel: 'Место деятельности', cityValue: 'Анталья, Турция',
    contactLabel: 'КОНТАКТЫ', phone: 'ТЕЛЕФОН', email: 'ЭЛЕКТРОННАЯ ПОЧТА', address: 'АДРЕС',
    mapTitle: 'МУРАТПАША / АНТАЛЬЯ', mapLabel: 'Карта с адресом офиса', directions: 'Открыть на карте ↗', top: 'Наверх ↑'
  }
};

const root = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const mapFrame = document.getElementById('map');
const textNodes = [...document.querySelectorAll('[data-i]')];
const attrNodes = [...document.querySelectorAll('[data-ia]')].map(el => {
  const [attr, key] = el.dataset.ia.split(':');
  return { el, attr, key };
});
const turkish = { title: document.title, description: metaDescription.content };
textNodes.forEach(el => { turkish[el.dataset.i] = el.textContent; });
attrNodes.forEach(({ el, attr, key }) => { turkish[key] ??= el.getAttribute(attr); });
translations.tr = turkish;

function setLanguage(lang) {
  const t = translations[lang];
  root.lang = lang;
  document.title = t.title;
  metaDescription.content = t.description;
  textNodes.forEach(el => { el.textContent = t[el.dataset.i] ?? turkish[el.dataset.i]; });
  attrNodes.forEach(({ el, attr, key }) => el.setAttribute(attr, t[key] ?? turkish[key]));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  const src = mapFrame.src.replace(/&hl=\w+/, '') + '&hl=' + lang;
  if (mapFrame.src !== src && !(lang === 'tr' && !mapFrame.src.includes('&hl='))) mapFrame.src = src;
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
  setLanguage(b.dataset.lang);
  try { localStorage.setItem('dedeli-language', b.dataset.lang); } catch {}
}));

// Dil bağlantıyla da açılabilir: ?lang=en, ?lang=ru
let initial = new URLSearchParams(location.search).get('lang');
if (!Object.hasOwn(translations, initial ?? '')) {
  try { initial = localStorage.getItem('dedeli-language'); } catch { initial = null; }
}
if (initial !== 'tr' && Object.hasOwn(translations, initial ?? '')) setLanguage(initial);

// ---------------------------------------------------------------- Menü
const header = document.getElementById('header');
const menu = document.getElementById('menu-toggle');
const menuOpen = () => header.classList.contains('menu-open');

function setMenu(open) {
  header.classList.toggle('menu-open', open);
  menu.setAttribute('aria-expanded', String(open));
  if (open) header.classList.remove('hidden');
}
menu.addEventListener('click', () => setMenu(!menuOpen()));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOpen()) { setMenu(false); menu.focus(); }
});
document.addEventListener('click', e => { if (menuOpen() && !header.contains(e.target)) setMenu(false); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// ---------------------------------------------------------------- Kaydırma
// Terazinin açısı yalnızca sayfanın kaydırma konumuna bağlıdır. Destekleyen
// tarayıcılarda hareketi CSS (styles.css, "Kaydırma hareketi") sürer ve ana iş
// parçacığına hiç uğramaz. Aşağıdaki yol yalnızca desteklemeyenler içindir.
const nativeScroll = CSS.supports('animation-timeline: scroll()') && CSS.supports('animation-range: 0px 1px');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const compact = matchMedia('(max-width: 900px), (pointer: coarse)');
const stage = document.querySelector('.hero-stage');
const hero = stage.querySelector('.hero');
const flow = document.querySelector('.editorial-flow');
const part = s => document.querySelector(s);
const parts = {
  beam: part('.beam'), left: part('.pan-left'), right: part('.pan-right'), bar: part('.hero-progress'),
  architecture: part('.architecture'), art: part('.art'), ring: part('.orbit'), ringTwo: part('.orbit-two'), flow: part('.flow-art svg')
};
const clamp = n => Math.max(0, Math.min(1, n));
let geometry = null, previousY = scrollY, scheduled = false, lastProgress = -1, lastFlow = -1;

function measure() {
  const flowRect = flow.getBoundingClientRect();
  const travel = stage.offsetHeight - hero.offsetHeight;
  geometry = {
    travel: travel > 1 ? travel : innerHeight * .6,
    flowStart: flowRect.top + scrollY,
    flowTravel: Math.max(1, flowRect.height - innerHeight)
  };
}

function drive(y) {
  if (!geometry) measure();
  const progress = clamp(y / geometry.travel);
  if (progress !== lastProgress) {
    lastProgress = progress;
    const t = clamp((progress - .12) / .76);
    const tilt = -28 * (1 - t * t * (3 - 2 * t));
    parts.beam.style.transform = `rotate(${tilt}deg)`;
    parts.left.style.transform = parts.right.style.transform = `rotate(${-tilt}deg)`;
    parts.bar.style.transform = `scaleX(${progress})`;
    if (!compact.matches) {
      parts.architecture.style.transform = `translateY(${progress * 65}px) rotate(-16deg) skewY(-9deg)`;
      parts.art.style.transform = `translateY(${progress * -19.5}px)`;
      parts.ring.style.transform = `rotate(${progress * 50}deg)`;
      parts.ringTwo.style.transform = `rotate(${progress * -50}deg)`;
    }
  }
  if (compact.matches) return;
  const f = clamp((y - geometry.flowStart) / geometry.flowTravel);
  if (f !== lastFlow) { lastFlow = f; parts.flow.style.transform = `translateX(${(f - .5) * 120}px)`; }
}

function onFrame() {
  scheduled = false;
  const y = scrollY;
  if (Math.abs(y - previousY) > 2) {
    header.classList.toggle('hidden', y > 150 && y > previousY && !menuOpen());
    previousY = y;
  }
  if (!nativeScroll && !reduced.matches) drive(y);
}
function schedule() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(onFrame); }
}
addEventListener('scroll', schedule, { passive: true });

if (!nativeScroll) {
  const remeasure = () => { geometry = null; lastProgress = lastFlow = -1; schedule(); };
  const reset = () => { Object.values(parts).forEach(el => el.style.removeProperty('transform')); remeasure(); };
  new ResizeObserver(remeasure).observe(flow);
  addEventListener('resize', remeasure, { passive: true });
  reduced.addEventListener('change', reset);
  compact.addEventListener('change', reset);
  onFrame();
}

// ---------------------------------------------------------------- Aktif menü öğesi
const links = [...document.querySelectorAll('nav a')];
const sections = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  links.forEach(a => {
    const active = a.hash === '#' + entry.target.id;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
}), { rootMargin: '-15% 0px -55% 0px' });
document.querySelectorAll('main section[id], .hero-stage[id]').forEach(s => sections.observe(s));

// ---------------------------------------------------------------- Faaliyet akordeonu
document.querySelectorAll('.service-toggle').forEach(button => button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.closest('.service').classList.toggle('is-open', open);
  document.getElementById(button.getAttribute('aria-controls')).inert = !open;
}));
