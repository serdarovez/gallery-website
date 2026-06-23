import type { Lang } from "../types";

const en = {
  "nav.catalog": "Catalog",
  "nav.artist": "Artist",
  "nav.exhibitions": "Exhibitions",
  "nav.about": "About",

  "hero.eyebrow": "Personal Online Gallery",
  "hero.title.l1": "Redefining the",
  "hero.title.accent": "Contemporary",
  "hero.title.l2": "Canvas.",
  "hero.subtitle":
    "An intimate collection of original paintings — bridging classical technique with modern intention. Curated for the bold.",
  "hero.cta.primary": "Explore Catalog",
  "hero.cta.secondary": "About the Artist",

  "intro.eyebrow": "About the Artist",
  "intro.title": "A studio of quiet light and bold red.",
  "intro.body":
    "Welcome. I am a painter working in oil and mixed media. My practice circles around the moments where memory and material meet — portraits, fragments of the figure, the silent geometry of objects. Every piece on this page was made by hand, in a small studio, over many days.",
  "intro.cta": "Read full biography",

  "featured.eyebrow": "Curated Selections",
  "featured.title": "Featured works",
  "featured.subtitle": "Recent paintings and lasting favorites from the studio.",
  "featured.cta": "View full catalog",

  "exhibitions.eyebrow": "Current Exhibitions",
  "exhibitions.title": "Where to see the work in person",
  "exhibitions.cta": "See all events",

  "catalog.title": "Art Catalog",
  "catalog.subtitle": "Explore the curated collection of original paintings.",
  "catalog.filters": "Filters",
  "catalog.filter.year": "Year",
  "catalog.filter.size": "Size",
  "catalog.filter.price": "Price",
  "catalog.filter.status": "Status",
  "catalog.filter.collection": "Collection",
  "catalog.filter.all": "All",
  "catalog.empty": "No artworks match the selected filters.",
  "catalog.loadMore": "Load more artworks",
  "catalog.size.small": "Small (under 50 cm)",
  "catalog.size.medium": "Medium (50–100 cm)",
  "catalog.size.large": "Large (over 100 cm)",
  "catalog.price.under1k": "Under $1,000",
  "catalog.price.1k3k": "$1,000 – $3,000",
  "catalog.price.3k6k": "$3,000 – $6,000",
  "catalog.price.over6k": "Over $6,000",

  "status.available": "Available",
  "status.reserved": "Reserved",
  "status.sold": "Sold",

  "modal.year": "Year",
  "modal.technique": "Technique",
  "modal.size": "Size",
  "modal.collection": "Collection",
  "modal.price": "Price",
  "modal.buy": "Buy this painting",
  "modal.request": "Request information",
  "modal.story": "Story of the painting",
  "modal.close": "Close",
  "modal.sold": "This piece has found its home",

  "artist.eyebrow": "The Artist",
  "artist.title": "About me",
  "artist.bio.h1": "Biography",
  "artist.bio.body":
    "I was born in a small town and started drawing before I could write. After a classical art education, I built my own studio and have been exhibiting since 2018. My work is rooted in the figurative tradition but breathes in the dust of contemporary cities — neon, billboards, late-night windows.",
  "artist.path.h1": "Creative Path",
  "artist.path.body":
    "I work in cycles. Each collection takes between six and eighteen months, and is built around a single question — about silence, memory, or attention. The paintings you see here belong to four such cycles.",
  "artist.shows.h1": "Selected Exhibitions",
  "artist.publications.h1": "Press and Publications",

  "footer.curating": "Curating the intersection of classical technique and contemporary vision.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.press": "Press Kit",
  "footer.contact": "Contact",
  "footer.rights": "ALL RIGHTS RESERVED.",

  "common.from": "from",
  "common.cm": "cm",
};

const ru: Record<keyof typeof en, string> = {
  "nav.catalog": "Каталог",
  "nav.artist": "Художник",
  "nav.exhibitions": "Выставки",
  "nav.about": "О себе",

  "hero.eyebrow": "Персональная онлайн-галерея",
  "hero.title.l1": "Переосмысляя",
  "hero.title.accent": "современный",
  "hero.title.l2": "холст.",
  "hero.subtitle":
    "Камерная коллекция авторских работ — место, где классическая техника встречается с современным взглядом. Куратированно для тех, кто чувствует.",
  "hero.cta.primary": "Смотреть каталог",
  "hero.cta.secondary": "О художнике",

  "intro.eyebrow": "О художнике",
  "intro.title": "Студия тихого света и густого красного.",
  "intro.body":
    "Здравствуйте. Я художник, работаю маслом и смешанной техникой. Мои работы посвящены моментам, где встречаются память и материал — портреты, фрагменты фигуры, тихая геометрия предметов. Каждая картина на этой странице сделана вручную, в небольшой студии, за многие дни.",
  "intro.cta": "Читать полную биографию",

  "featured.eyebrow": "Избранные работы",
  "featured.title": "Избранное",
  "featured.subtitle": "Недавние картины и работы, к которым возвращаешься.",
  "featured.cta": "Смотреть весь каталог",

  "exhibitions.eyebrow": "Текущие выставки",
  "exhibitions.title": "Где увидеть работы вживую",
  "exhibitions.cta": "Все события",

  "catalog.title": "Каталог работ",
  "catalog.subtitle": "Изучите авторскую коллекцию оригинальных картин.",
  "catalog.filters": "Фильтры",
  "catalog.filter.year": "Год",
  "catalog.filter.size": "Размер",
  "catalog.filter.price": "Цена",
  "catalog.filter.status": "Наличие",
  "catalog.filter.collection": "Коллекция",
  "catalog.filter.all": "Все",
  "catalog.empty": "Нет работ, подходящих под выбранные фильтры.",
  "catalog.loadMore": "Загрузить ещё",
  "catalog.size.small": "Малый (до 50 см)",
  "catalog.size.medium": "Средний (50–100 см)",
  "catalog.size.large": "Большой (от 100 см)",
  "catalog.price.under1k": "До $1 000",
  "catalog.price.1k3k": "$1 000 – $3 000",
  "catalog.price.3k6k": "$3 000 – $6 000",
  "catalog.price.over6k": "От $6 000",

  "status.available": "В наличии",
  "status.reserved": "Зарезервирована",
  "status.sold": "Продана",

  "modal.year": "Год",
  "modal.technique": "Техника",
  "modal.size": "Размер",
  "modal.collection": "Коллекция",
  "modal.price": "Цена",
  "modal.buy": "Купить картину",
  "modal.request": "Оставить заявку",
  "modal.story": "История создания",
  "modal.close": "Закрыть",
  "modal.sold": "Эта работа уже нашла своего владельца",

  "artist.eyebrow": "Художник",
  "artist.title": "Обо мне",
  "artist.bio.h1": "Биография",
  "artist.bio.body":
    "Я родился в небольшом городе и начал рисовать раньше, чем писать. После классического художественного образования я открыл собственную мастерскую и выставляюсь с 2018 года. Мои работы вырастают из фигуративной традиции, но дышат пылью современных городов — неоном, рекламой, ночными окнами.",
  "artist.path.h1": "Творческий путь",
  "artist.path.body":
    "Я работаю циклами. Каждая коллекция рождается шесть–восемнадцать месяцев и собрана вокруг одного вопроса — о тишине, памяти или внимании. Работы на этой странице принадлежат четырём таким циклам.",
  "artist.shows.h1": "Избранные выставки",
  "artist.publications.h1": "Публикации и достижения",

  "footer.curating":
    "На пересечении классической техники и современного взгляда.",
  "footer.privacy": "Политика конфиденциальности",
  "footer.terms": "Условия использования",
  "footer.press": "Пресс-кит",
  "footer.contact": "Контакты",
  "footer.rights": "ВСЕ ПРАВА ЗАЩИЩЕНЫ.",

  "common.from": "от",
  "common.cm": "см",
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Lang, Record<TranslationKey, string>> = { en, ru };
