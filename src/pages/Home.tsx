import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArtworkCard } from "../components/ArtworkCard";
import { ArtworkModal } from "../components/ArtworkModal";
import { artworks } from "../data/artworks";
import { exhibitions } from "../data/exhibitions";
import { useLang } from "../i18n/LangContext";
import type { Artwork } from "../types";
import { ease, fade, fadeUp, stagger } from "../motion";

export function Home() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Artwork | null>(null);

  const featured = artworks.filter((a) => a.featured).slice(0, 6);
  const hero = featured[0] ?? artworks[0];
  const heroSide = featured[1] ?? artworks[1] ?? hero;
  const upcoming = exhibitions.slice(0, 2);

  return (
    <>
      {/* HERO — editorial collage */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="container-art relative pb-24">
          {/* scattered labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="pointer-events-none absolute inset-0 hidden md:block"
          >
            <span className="absolute left-0 top-2 text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "это может быть" : "this could be"}
              <br />
              {lang === "ru" ? "раем" : "heaven"}
            </span>
            <span className="absolute right-0 top-2 text-right text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "из своих" : "of our own"}
              <br />
              {lang === "ru" ? "устройств" : "device"}
            </span>
            <span className="absolute left-1/3 top-32 text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "или это может" : "or this could"}
              <br />
              {lang === "ru" ? "быть адом" : "be hell"}
            </span>
            <span className="absolute right-8 bottom-8 text-right text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "такое" : "such a"}
              <br />
              {lang === "ru" ? "милое лицо" : "lovely face"}
            </span>
            <span className="absolute left-0 bottom-8 text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "сладкий летний" : "sweet summer"}
              <br />
              {lang === "ru" ? "пот" : "sweat"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="relative z-10 pt-24 text-center"
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="font-display font-bold uppercase leading-[0.86] tracking-tighter text-balance text-[clamp(3.4rem,12vw,11rem)]"
              variants={fadeUp}
            >
              <span className="block">{lang === "ru" ? "Добро пожаловать" : "Welcome"}</span>
              <span className="relative block">
                <span className="relative z-10">{lang === "ru" ? "в галерею" : "to the gallery"}</span>
              </span>
              <motion.span
                className="-mt-4 block font-display text-crimson-400 italic"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "clamp(3.4rem, 14vw, 13rem)",
                  lineHeight: 0.9,
                }}
                variants={fadeUp}
              >
                Crimson
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Painting collage in the middle, behind type */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 1.2, ease, delay: 0.2 }}
          >
            <div className="relative h-[78%] w-[60%] max-w-3xl">
              <motion.img
                src={hero.cover}
                alt={hero.title[lang]}
                className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity duotone-red"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/10 to-ink-900/70" />
            </div>
          </motion.div>

          {/* Hero footer row */}
          <div className="relative z-10 mt-16 grid items-end gap-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <motion.p
              className="max-w-md text-sm leading-relaxed text-bone-50/80 sm:text-base"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="hidden text-[11px] uppercase tracking-[0.32em] text-bone-50/60 lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="rule mb-3 max-w-[120px]" />
              {lang === "ru" ? "Скролл вниз" : "Scroll to enter"} ↓
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-start gap-3 sm:justify-end"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.7 }}
            >
              <Link to="/catalog" className="btn-primary">
                {t("hero.cta.primary")}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative overflow-hidden border-y border-bone-50/15 bg-bone-50 py-4 text-ink-900">
          <div className="animate-marquee-x flex w-max gap-12 whitespace-nowrap font-display text-2xl italic">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  lang === "ru" ? "оригинальные работы" : "original works",
                  "·",
                  lang === "ru" ? "ручная работа" : "made by hand",
                  "·",
                  lang === "ru" ? "доставка по миру" : "worldwide shipping",
                  "·",
                  lang === "ru" ? "сертификат подлинности" : "certificate of authenticity",
                  "·",
                ].map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO — overlap with painting fragment */}
      <section className="relative py-28">
        <div className="container-art grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="eyebrow" variants={fadeUp}>
              {t("intro.eyebrow")}
            </motion.div>
            <motion.h2
              className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl"
              variants={fadeUp}
            >
              {lang === "ru" ? (
                <>
                  Все мы как будто <br />
                  заехали в L.A. <br />
                  <span className="italic text-crimson-400">ночью</span>
                </>
              ) : (
                <>
                  All of us kind of <br />
                  drove into L.A. <br />
                  <span className="italic text-crimson-400">at night</span>
                </>
              )}
            </motion.h2>
            <motion.p
              className="mt-8 max-w-xl leading-relaxed text-bone-50/75"
              variants={fadeUp}
            >
              {t("intro.body")}
            </motion.p>
            <motion.div className="mt-10" variants={fadeUp}>
              <Link to="/artist" className="btn-ghost">
                {t("intro.cta")}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="grain relative aspect-[4/5] overflow-hidden">
              <img
                src={heroSide.cover}
                alt={heroSide.title[lang]}
                className="h-full w-full object-cover duotone-red"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 via-transparent to-crimson-700/30" />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-bone-50 px-4 py-3 text-ink-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-ink-900/60">
                {heroSide.collection[lang]}
              </div>
              <div className="mt-1 font-display text-xl italic">{heroSide.title[lang]}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORKS — magazine grid */}
      <section className="py-24">
        <div className="container-art">
          <motion.div
            className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-bone-50/15 pb-6"
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div variants={fadeUp}>
              <div className="eyebrow">{t("featured.eyebrow")}</div>
              <h2 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight sm:text-6xl">
                {lang === "ru" ? "Избранные работы" : "Selected Works"}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="text-right">
              <div className="font-display text-3xl italic text-bone-100">
                {String(featured.length).padStart(2, "0")} /{" "}
                {String(artworks.length).padStart(2, "0")}
              </div>
              <Link
                to="/catalog"
                className="mt-2 inline-block text-[11px] uppercase tracking-[0.28em] text-bone-50/70 hover:text-bone-50"
              >
                {t("featured.cta")} →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featured.map((a, idx) => (
              <div
                key={a.id}
                className={
                  idx === 0
                    ? "lg:col-span-2 lg:translate-y-10"
                    : idx === 3
                    ? "lg:-translate-y-8"
                    : ""
                }
              >
                <ArtworkCard
                  artwork={a}
                  onOpen={setActive}
                  index={idx}
                  priority={idx < 3}
                  variant={idx === 0 ? "wide" : idx % 2 === 0 ? "square" : "tall"}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXHIBITIONS */}
      {upcoming.length > 0 && (
        <section className="relative border-t border-bone-50/15 py-24">
          <div className="container-art">
            <motion.div
              className="mb-12 grid items-end gap-6 lg:grid-cols-2"
              variants={stagger(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div variants={fadeUp}>
                <div className="eyebrow">{t("exhibitions.eyebrow")}</div>
                <h2 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight sm:text-6xl">
                  {lang === "ru" ? "Выставки" : "On view"}
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:text-right">
                <Link to="/exhibitions" className="btn-ghost">
                  {t("exhibitions.cta")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.ul
              className="divide-y divide-bone-50/15 border-y border-bone-50/15"
              variants={stagger(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {upcoming.map((ex, i) => (
                <motion.li
                  key={ex.id}
                  variants={fadeUp}
                  className="group grid items-center gap-4 py-8 md:grid-cols-[60px_1fr_1fr_140px] md:gap-8"
                >
                  <span className="font-display text-2xl italic text-bone-100/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-none">
                      {ex.title[lang]}
                    </h3>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.26em] text-bone-50/55">
                      {ex.venue[lang]} · {ex.city[lang]}
                    </div>
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.24em] text-bone-50/70">
                    {new Date(ex.startsOn).toLocaleDateString(lang, { month: "short", day: "numeric" })}
                    {" — "}
                    {new Date(ex.endsOn).toLocaleDateString(lang, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="h-16 w-full overflow-hidden md:h-20 md:w-32">
                    <img
                      src={ex.cover}
                      alt=""
                      className="h-full w-full object-cover duotone-red transition duration-1000 group-hover:scale-110"
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      )}

      {/* CLOSING */}
      <section className="py-32">
        <motion.div
          className="container-art text-center"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="eyebrow mx-auto justify-center" variants={fadeUp}>
            {lang === "ru" ? "Заметка от художника" : "A note from the artist"}
          </motion.div>
          <motion.h2
            className="mx-auto mt-8 max-w-4xl font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-balance sm:text-6xl"
            variants={fadeUp}
          >
            {lang === "ru"
              ? "Каждая работа создаётся вручную, в одном экземпляре."
              : "Each piece is made by hand. One of one."}
          </motion.h2>
          <motion.div className="mt-12" variants={fadeUp}>
            <Link to="/catalog" className="btn-primary">
              {t("hero.cta.primary")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </>
  );
}
