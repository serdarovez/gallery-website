import type { Exhibition } from "../types";

export const exhibitions: Exhibition[] = [
  {
    id: "e1",
    title: { en: "Inner Light — Solo Show", ru: "Внутренний свет — персональная выставка" },
    venue: { en: "Crimson Logic Gallery", ru: "Галерея Crimson Logic" },
    city: { en: "Berlin", ru: "Берлин" },
    startsOn: "2026-09-12",
    endsOn: "2026-11-04",
    cover:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=1600&q=85",
    description: {
      en: "A presentation of fourteen new oil paintings, exploring how light folds into matter.",
      ru: "Представление четырнадцати новых работ маслом — о том, как свет складывается в материю.",
    },
  },
  {
    id: "e2",
    title: { en: "Geometry of Memory", ru: "Геометрия памяти" },
    venue: { en: "Maison d'Art Contemporain", ru: "Maison d'Art Contemporain" },
    city: { en: "Paris", ru: "Париж" },
    startsOn: "2026-03-22",
    endsOn: "2026-05-10",
    cover:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1600&q=85",
    description: {
      en: "Group show alongside seven contemporary painters, curated around the question of memory and form.",
      ru: "Групповая выставка с семью современными художниками, кураторская тема — память и форма.",
    },
  },
];
