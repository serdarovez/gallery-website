import type { Artwork } from "../types";

// SAMPLE DATA — replace `cover` and `gallery` with your own painting image URLs.
// You can also drop files into `public/artworks/` and reference them as `/artworks/your-file.jpg`.
export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "echoes-of-silence",
    title: { en: "Echoes of Silence", ru: "Эхо тишины" },
    year: 2023,
    technique: { en: "Oil on canvas", ru: "Масло, холст" },
    width: 80,
    height: 120,
    price: 4500,
    status: "available",
    collection: { en: "Inner Light", ru: "Внутренний свет" },
    description: {
      en: "A study in restraint — folded fabric, dark paint, and a single thread of crimson running across the field. The viewer becomes aware of their own breathing.",
      ru: "Этюд о сдержанности — складки ткани, тёмная краска и единственная багровая нить через всё полотно. Зритель начинает слышать собственное дыхание.",
    },
    story: {
      en: "Painted over four weeks in the winter of 2023, after a period of silence in the studio. The red line was added last — almost an afterthought, but it became the painting.",
      ru: "Писалось четыре недели зимой 2023 года, после долгой паузы в студии. Красная линия появилась в самом конце — почти случайно, но именно она стала картиной.",
    },
    featured: true,
    cover:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "2",
    slug: "intersection-ii",
    title: { en: "Intersection II", ru: "Пересечение II" },
    year: 2024,
    technique: { en: "Acrylic and ink on paper", ru: "Акрил, тушь, бумага" },
    width: 60,
    height: 60,
    price: 3200,
    status: "available",
    collection: { en: "Geometry of Memory", ru: "Геометрия памяти" },
    description: {
      en: "Two shapes meet and refuse to merge. The painting is about the patient negotiation between forms — and between people.",
      ru: "Две формы встречаются и отказываются сливаться. Эта работа — о терпеливом разговоре между формами и между людьми.",
    },
    featured: true,
    cover:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "3",
    slug: "folded-light",
    title: { en: "Folded Light", ru: "Сложенный свет" },
    year: 2023,
    technique: { en: "Oil on linen", ru: "Масло, лён" },
    width: 100,
    height: 100,
    price: 6800,
    status: "available",
    collection: { en: "Inner Light", ru: "Внутренний свет" },
    description: {
      en: "A relief-like surface built from dozens of small painted facets, each catching a slightly different light.",
      ru: "Поверхность-рельеф из десятков маленьких граней, каждая ловит свой свет.",
    },
    featured: true,
    cover:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "4",
    slug: "persona-04",
    title: { en: "Persona 04", ru: "Персона 04" },
    year: 2024,
    technique: { en: "Oil on canvas", ru: "Масло, холст" },
    width: 70,
    height: 90,
    price: 5100,
    status: "available",
    collection: { en: "Portraits", ru: "Портреты" },
    description: {
      en: "Fourth in a series of imagined portraits. The model does not exist; the gaze does.",
      ru: "Четвёртый из серии вымышленных портретов. Модели нет; взгляд есть.",
    },
    story: {
      en: "I started Persona 04 from a smudge of paint that looked like a cheekbone. Three weeks later, a face was looking back.",
      ru: "Я начал «Персону 04» с пятна краски, похожего на скулу. Через три недели на меня смотрело лицо.",
    },
    featured: true,
    cover:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "5",
    slug: "syntax-error",
    title: { en: "Syntax Error", ru: "Синтаксическая ошибка" },
    year: 2021,
    technique: { en: "Screenprint and oil", ru: "Шелкография, масло" },
    width: 50,
    height: 70,
    price: 2900,
    status: "reserved",
    collection: { en: "Type Studies", ru: "Типографика" },
    description: {
      en: "Glyphs collapsing into each other. A love letter to letterforms that refuse to behave.",
      ru: "Глифы, проваливающиеся друг в друга. Письмо в любви буквам, которые отказываются себя вести.",
    },
    featured: true,
    cover:
      "https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "6",
    slug: "ethereal-geometry",
    title: { en: "Ethereal Geometry", ru: "Эфирная геометрия" },
    year: 2023,
    technique: { en: "Mixed media", ru: "Смешанная техника" },
    width: 90,
    height: 130,
    price: 7400,
    status: "available",
    collection: { en: "Geometry of Memory", ru: "Геометрия памяти" },
    description: {
      en: "Light receding into infinite tunnels — a meditation on perspective and absence.",
      ru: "Свет, уходящий в бесконечные тоннели — размышление о перспективе и отсутствии.",
    },
    cover:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "7",
    slug: "vertical-displacement",
    title: { en: "Vertical Displacement", ru: "Вертикальное смещение" },
    year: 2022,
    technique: { en: "Oil, sculpture base", ru: "Масло, скульптурный постамент" },
    width: 40,
    height: 180,
    price: 8200,
    status: "available",
    collection: { en: "Sculpture Series", ru: "Скульптурная серия" },
    description: {
      en: "A tall, narrow form rising from the floor — the painting works as object and image at once.",
      ru: "Высокая узкая форма, поднимающаяся от пола — работа существует как объект и как изображение.",
    },
    cover:
      "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "8",
    slug: "texture-of-silence",
    title: { en: "The Texture of Silence", ru: "Текстура тишины" },
    year: 2021,
    technique: { en: "Oil on canvas", ru: "Масло, холст" },
    width: 70,
    height: 70,
    price: 3800,
    status: "sold",
    collection: { en: "Inner Light", ru: "Внутренний свет" },
    description: {
      en: "An exploration of negative space and how absence creates its own distinct visual narrative.",
      ru: "Размышление о пустом пространстве и о том, как отсутствие создаёт собственный визуальный нарратив.",
    },
    cover:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "9",
    slug: "morning-fragments",
    title: { en: "Morning Fragments", ru: "Утренние осколки" },
    year: 2024,
    technique: { en: "Watercolor and ink", ru: "Акварель, тушь" },
    width: 30,
    height: 40,
    price: 950,
    status: "available",
    collection: { en: "Studies", ru: "Этюды" },
    description: {
      en: "A series of small morning studies — light hitting cups, sheets, the side of a face.",
      ru: "Серия маленьких утренних этюдов — свет на кружках, простынях, скуле.",
    },
    cover:
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1600&q=85",
    ],
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}
