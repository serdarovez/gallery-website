import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArtworkCard } from "../components/ArtworkCard";
import { ArtworkModal } from "../components/ArtworkModal";
import { artworks } from "../data/artworks";
import { exhibitions } from "../data/exhibitions";
import { useLang } from "../i18n/LangContext";
import type { Artwork } from "../types";
import { siteConfig } from "../config";
import { ease, fade, fadeUp, stagger } from "../motion";

export function Home() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Artwork | null>(null);

  const featured = artworks.filter((a) => a.featured).slice(0, 6);
  const heroPiece = featured[0] ?? artworks[0];
  const upcoming = exhibitions.slice(0, 2);

  return (
    <>
      <section className="relative pt-28 sm:pt-36">
        <div className="container-art grid items-end gap-12 pb-20 lg:grid-cols-[1fr_1.05fr]">
          <motion.div
            variants={stagger(0.1, 0.12)}
            initial="hidden"
            animate="show"
          >
            <motion.div className="eyebrow" variants={fadeUp}>
              {t("hero.eyebrow")}
            </motion.div>
            <motion.h1
              className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[5.2rem]"
              variants={fadeUp}
            >
              {t("hero.title.l1")}{" "}
              <em className="font-display italic text-crimson-400">
                {t("hero.title.accent")}
              </em>{" "}
              {t("hero.title.l2")}
            </motion.h1>
            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-bone-50/65 sm:text-lg"
              variants={fadeUp}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
              <Link to="/catalog" className="btn-primary">
                {t("hero.cta.primary")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </Link>
              <Link to="/artist" className="btn-ghost">
                {t("hero.cta.secondary")}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 1.0, ease, delay: 0.2 }}
          >
            <div className="grain relative overflow-hidden rounded-sm ring-1 ring-bone-50/5">
              <div className="aspect-[5/6]">
                <motion.img
                  src={heroPiece.cover}
                  alt={heroPiece.title[lang]}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease }}
                />
              </div>
              <motion.div
                className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink-900/90 to-transparent p-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.9 }}
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-bone-50/55">
                    {heroPiece.collection[lang]}
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold text-bone-50">
                    {heroPiece.title[lang]}
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={() => setActive(heroPiece)}
                  className="rounded-full border border-bone-50/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-bone-50 backdrop-blur transition hover:border-crimson-300 hover:text-crimson-200"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-8 -left-6 hidden h-32 w-32 rotate-3 border border-crimson-700/40 sm:block"
              initial={{ opacity: 0, x: -20, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
            />
            <motion.div
              className="absolute -top-8 -right-6 hidden h-20 w-20 -rotate-6 border border-crimson-700/30 sm:block"
              initial={{ opacity: 0, x: 20, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.9, ease, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-bone-50/5 bg-ink-900/40 py-20">
        <motion.div
          className="container-art grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center"
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow">{t("intro.eyebrow")}</div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              {t("intro.title")}
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-base leading-relaxed text-bone-50/70 sm:text-lg">
              {t("intro.body")}
            </p>
            <Link
              to="/artist"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-crimson-300 hover:text-crimson-200"
            >
              {t("intro.cta")}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="container-art">
          <motion.div
            className="mb-12 flex flex-wrap items-end justify-between gap-6"
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div variants={fadeUp}>
              <div className="eyebrow">{t("featured.eyebrow")}</div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {t("featured.title")}
              </h2>
              <p className="mt-3 max-w-xl text-bone-50/55">{t("featured.subtitle")}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/catalog" className="btn-ghost">
                {t("featured.cta")}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featured.map((a, idx) => (
              <ArtworkCard key={a.id} artwork={a} onOpen={setActive} priority={idx < 3} />
            ))}
          </motion.div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="border-t border-bone-50/5 bg-ink-900/40 py-20">
          <div className="container-art">
            <motion.div
              className="mb-10 flex flex-wrap items-end justify-between gap-6"
              variants={stagger(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div variants={fadeUp}>
                <div className="eyebrow">{t("exhibitions.eyebrow")}</div>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t("exhibitions.title")}
                </h2>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/exhibitions" className="btn-ghost">
                  {t("exhibitions.cta")}
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={stagger(0.05, 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {upcoming.map((ex) => (
                <motion.article
                  key={ex.id}
                  className="group card-frame grid grid-cols-[2fr_3fr] items-stretch overflow-hidden"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={ex.cover}
                      alt={ex.title[lang]}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.0, ease }}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2 p-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-crimson-300/80">
                      {new Date(ex.startsOn).toLocaleDateString(lang, { month: "long", day: "numeric" })}
                      {" — "}
                      {new Date(ex.endsOn).toLocaleDateString(lang, { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-bone-50">
                      {ex.title[lang]}
                    </h3>
                    <div className="text-sm text-bone-50/60">
                      {ex.venue[lang]} · {ex.city[lang]}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-art divider-art mb-12">
          <span>{siteConfig.brand}</span>
        </div>
        <motion.div
          className="container-art grid gap-12 text-center"
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl"
            variants={fadeUp}
          >
            {lang === "ru"
              ? "Каждая работа создаётся вручную, в одном экземпляре."
              : "Each piece is made by hand, in a single edition."}
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link to="/catalog" className="btn-primary mx-auto">
              {t("hero.cta.primary")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </>
  );
}
