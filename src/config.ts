export const siteConfig = {
  brand: "GALLERIA",
  artistName: "Author",

  // Where the "Buy" / "Request" buttons redirect.
  // Telegram chat with the artist — opens t.me/serii1177 in a new tab.
  buyUrl: "https://t.me/serii1177",

  // Telegram doesn't support pre-filling chat input via URL params,
  // so when the user clicks Buy we copy this message to the clipboard
  // so they can paste it into the chat with a single Ctrl+V / Cmd+V.
  buyMessage: {
    en: (title: string, imageUrl: string) =>
      `Hi! I wanted to buy this painting:\n\n${title}\n${imageUrl}`,
    ru: (title: string, imageUrl: string) =>
      `Здравствуйте! Я хочу купить эту картину:\n\n${title}\n${imageUrl}`,
  },

  socials: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    telegram: "https://t.me/serii1177",
  },

  email: "hello@example.com",
};

export function buildBuyMessage(opts: {
  title: string;
  imageUrl: string;
  language: "en" | "ru";
}): string {
  return siteConfig.buyMessage[opts.language](opts.title, opts.imageUrl);
}
