import { motion } from "framer-motion";
import type { Artwork } from "../types";
import { useLang } from "../i18n/LangContext";
import { gridItem } from "../motion";

interface Props {
  artwork: Artwork;
  onOpen: (artwork: Artwork) => void;
  priority?: boolean;
  index: number;
  variant?: "tall" | "wide" | "square";
}

const aspect: Record<NonNullable<Props["variant"]>, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[5/4]",
  square: "aspect-square",
};

export function ArtworkCard({ artwork, onOpen, priority, index, variant = "tall" }: Props) {
  const { lang, t } = useLang();
  const num = String(index + 1).padStart(2, "0");
  const sold = artwork.status === "sold";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(artwork)}
      className="group relative block w-full text-left"
      aria-label={`Open ${artwork.title[lang]}`}
      variants={gridItem}
    >
      <div className="flex items-center justify-between pb-3">
        <span className="font-display text-xl italic text-bone-100/80">{num}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-bone-50/55">
          {artwork.year}
        </span>
      </div>

      <div className={`relative ${aspect[variant]} overflow-hidden bg-ink-800`}>
        <motion.img
          src={artwork.cover}
          alt={artwork.title[lang]}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover duotone-red"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="pointer-events-none absolute inset-0 bg-ink-900/0 transition-colors duration-500 group-hover:bg-ink-900/30" />

        {artwork.status !== "available" && (
          <span
            className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.26em] ${
              sold
                ? "border border-bone-50/40 bg-ink-900/70 text-bone-50/80"
                : "border border-bone-50 bg-bone-50 text-ink-900"
            }`}
          >
            {t(sold ? "status.sold" : "status.reserved")}
          </span>
        )}

        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4"
          initial={false}
        >
          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="bg-bone-50 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-ink-900">
              {lang === "ru" ? "Открыть" : "Open"}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pt-4">
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-bone-50">
          {artwork.title[lang]}
        </h3>
        <div className="mt-1.5 truncate text-[11px] uppercase tracking-[0.24em] text-bone-50/55">
          {artwork.collection[lang]} · {artwork.technique[lang]}
        </div>
      </div>
    </motion.button>
  );
}
