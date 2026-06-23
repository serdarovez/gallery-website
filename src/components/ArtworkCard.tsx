import { motion } from "framer-motion";
import type { Artwork } from "../types";
import { useLang } from "../i18n/LangContext";
import { gridItem } from "../motion";

interface Props {
  artwork: Artwork;
  onOpen: (artwork: Artwork) => void;
  priority?: boolean;
}

export function ArtworkCard({ artwork, onOpen, priority }: Props) {
  const { lang, t } = useLang();
  const sold = artwork.status === "sold";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(artwork)}
      className="group card-frame text-left"
      aria-label={`Open ${artwork.title[lang]}`}
      variants={gridItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
        <motion.img
          src={artwork.cover}
          alt={artwork.title[lang]}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/0 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {artwork.status !== "available" && (
          <span
            className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] backdrop-blur ${
              sold
                ? "bg-ink-900/70 text-bone-50/70 ring-1 ring-bone-50/15"
                : "bg-crimson-600/85 text-bone-50 ring-1 ring-crimson-300/30"
            }`}
          >
            {t(sold ? "status.sold" : "status.reserved")}
          </span>
        )}

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-bone-50">
          <div className="min-w-0">
            <div className="truncate font-display text-lg font-semibold tracking-tight">
              {artwork.title[lang]}
            </div>
            <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-bone-50/55">
              {(lang === "ru" ? "Автор" : "Artist")} · {artwork.year}
            </div>
          </div>
          <div className="shrink-0 rounded-full bg-ink-900/55 px-3 py-1 text-sm font-medium text-bone-50 ring-1 ring-bone-50/10">
            {sold ? "—" : `$${artwork.price.toLocaleString()}`}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
