import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArtworkCard } from "../components/ArtworkCard";
import { ArtworkModal } from "../components/ArtworkModal";
import { Filters, type FilterState } from "../components/Filters";
import { artworks } from "../data/artworks";
import { useLang } from "../i18n/LangContext";
import type { Artwork } from "../types";
import { fadeUp, stagger } from "../motion";

const INITIAL: FilterState = {
  year: "all",
  size: "all",
  status: "all",
  collection: "all",
};

const PAGE_SIZE = 9;

function matchesSize(a: Artwork, bucket: FilterState["size"]) {
  const max = Math.max(a.width, a.height);
  switch (bucket) {
    case "small":
      return max < 50;
    case "medium":
      return max >= 50 && max <= 100;
    case "large":
      return max > 100;
    default:
      return true;
  }
}

export function Catalog() {
  const { t, lang } = useLang();
  const [filters, setFilters] = useState<FilterState>(INITIAL);
  const [active, setActive] = useState<Artwork | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const years = useMemo(
    () => Array.from(new Set(artworks.map((a) => a.year))).sort((a, b) => b - a),
    []
  );
  const collections = useMemo(
    () => Array.from(new Set(artworks.map((a) => a.collection[lang]))),
    [lang]
  );

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      if (filters.year !== "all" && a.year !== filters.year) return false;
      if (!matchesSize(a, filters.size)) return false;
      if (filters.status !== "all" && a.status !== filters.status) return false;
      if (filters.collection !== "all" && a.collection[lang] !== filters.collection) return false;
      return true;
    });
  }, [filters, lang]);

  const shown = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;
  const gridKey = `${filters.year}-${filters.size}-${filters.status}-${filters.collection}-${lang}`;

  return (
    <>
      <section className="pt-28 sm:pt-36">
        <div className="container-art">
          <motion.div
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div className="flex items-center justify-between" variants={fadeUp}>
              <div className="eyebrow">{t("nav.catalog")}</div>
              <div className="font-display text-xl italic text-bone-100/80">
                {String(filtered.length).padStart(2, "0")}
              </div>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-8xl"
              variants={fadeUp}
            >
              {lang === "ru" ? (
                <>
                  Каталог<br />
                  <span className="italic text-crimson-400">работ</span>
                </>
              ) : (
                <>
                  The<br />
                  <span className="italic text-crimson-400">Catalog</span>
                </>
              )}
            </motion.h1>

            <motion.p className="mt-5 max-w-2xl text-bone-50/70" variants={fadeUp}>
              {t("catalog.subtitle")}
            </motion.p>

            <motion.div className="mt-12 border-y border-bone-50/15 py-5" variants={fadeUp}>
              <Filters
                years={years}
                collections={collections}
                state={filters}
                onChange={(next) => {
                  setFilters(next);
                  setVisible(PAGE_SIZE);
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-art">
          <AnimatePresence mode="wait">
            {shown.length === 0 ? (
              <motion.div
                key="empty"
                className="border border-bone-50/15 p-20 text-center text-bone-50/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t("catalog.empty")}
              </motion.div>
            ) : (
              <motion.div
                key={gridKey}
                className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                variants={stagger(0.04, 0.08)}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
              >
                {shown.map((a, idx) => (
                  <ArtworkCard
                    key={a.id}
                    artwork={a}
                    onOpen={setActive}
                    index={idx}
                    priority={idx < 6}
                    variant="tall"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {canLoadMore && (
            <div className="mt-24 flex justify-center">
              <motion.button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("catalog.loadMore")}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </>
  );
}
