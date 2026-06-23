export type Lang = "en" | "ru";

export type ArtworkStatus = "available" | "reserved" | "sold";

export type Localized = Record<Lang, string>;

export interface Artwork {
  id: string;
  slug: string;
  title: Localized;
  year: number;
  technique: Localized;
  width: number; // cm
  height: number; // cm
  price: number; // USD
  status: ArtworkStatus;
  collection: Localized;
  description: Localized;
  story?: Localized;
  featured?: boolean;
  cover: string;
  gallery: string[];
}

export interface Exhibition {
  id: string;
  title: Localized;
  venue: Localized;
  city: Localized;
  startsOn: string; // ISO date
  endsOn: string;
  cover: string;
  description: Localized;
}
