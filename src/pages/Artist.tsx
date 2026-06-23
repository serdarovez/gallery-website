import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "../i18n/LangContext";
import { exhibitions } from "../data/exhibitions";
import { ease, fadeUp, stagger } from "../motion";

export function Artist() {
  const { t, lang } = useLang();
  return (
    <>
      <section className="pt-28 sm:pt-36">
        <div className="container-art grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.div
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div className="eyebrow" variants={fadeUp}>
              {t("artist.eyebrow")}
            </motion.div>
            <motion.h1
              className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-8xl"
              variants={fadeUp}
            >
              {lang === "ru" ? (
                <>
                  Я <span className="italic text-crimson-400">пишу</span><br />
                  тишину.
                </>
              ) : (
                <>
                  I paint<br />
                  the <span className="italic text-crimson-400">silence</span>.
                </>
              )}
            </motion.h1>
            <motion.p className="mt-8 max-w-xl leading-relaxed text-bone-50/75 sm:text-lg" variants={fadeUp}>
              {t("artist.bio.body")}
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
              <Link to="/catalog" className="btn-primary">
                {t("hero.cta.primary")}
              </Link>
              <a href="mailto:hello@example.com" className="btn-ghost">
                {lang === "ru" ? "Связаться" : "Get in touch"}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            <div className="grain relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
                alt="Artist portrait"
                className="h-full w-full object-cover duotone-red"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/50 via-transparent to-crimson-700/30" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-bone-50 px-4 py-3 text-ink-900">
              <div className="text-[10px] uppercase tracking-[0.32em] text-ink-900/60">
                {lang === "ru" ? "Художник" : "Artist"}
              </div>
              <div className="mt-1 font-display text-xl italic">Author</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-art grid gap-16 border-y border-bone-50/15 py-16 lg:grid-cols-2">
          <article>
            <div className="font-display text-2xl italic text-bone-100/70">01</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight">
              {t("artist.bio.h1")}
            </h2>
            <p className="mt-6 leading-relaxed text-bone-50/75">{t("artist.bio.body")}</p>
          </article>
          <article>
            <div className="font-display text-2xl italic text-bone-100/70">02</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight">
              {t("artist.path.h1")}
            </h2>
            <p className="mt-6 leading-relaxed text-bone-50/75">{t("artist.path.body")}</p>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="container-art">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-bone-50/15 pb-6">
            <div>
              <div className="eyebrow">{t("artist.shows.h1")}</div>
              <h2 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight">
                {t("artist.shows.h1")}
              </h2>
            </div>
            <div className="font-display text-xl italic text-bone-100/70">
              {String(exhibitions.length).padStart(2, "0")}
            </div>
          </div>
          <ul className="divide-y divide-bone-50/15">
            {exhibitions.map((ex, i) => (
              <li
                key={ex.id}
                className="group grid items-baseline gap-3 py-8 md:grid-cols-[60px_140px_1fr_1fr] md:gap-8"
              >
                <span className="font-display text-2xl italic text-bone-100/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[12px] uppercase tracking-[0.28em] text-bone-50/70">
                  {new Date(ex.startsOn).getFullYear()}
                </span>
                <span className="font-display text-2xl text-bone-50 transition group-hover:italic group-hover:text-crimson-300">
                  {ex.title[lang]}
                </span>
                <span className="text-sm text-bone-50/60">
                  {ex.venue[lang]} · {ex.city[lang]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="container-art">
          <div className="mb-10 border-b border-bone-50/15 pb-6">
            <div className="eyebrow">{t("artist.publications.h1")}</div>
            <h2 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight">
              {t("artist.publications.h1")}
            </h2>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="border border-bone-50/15 p-6">
                <div className="font-display text-xl italic text-bone-100/70">
                  {String(n).padStart(2, "0")}
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
                  2024 · Press
                </div>
                <h3 className="mt-3 font-display text-2xl">
                  {lang === "ru" ? "Журнал об искусстве" : "Art Magazine"} #{n}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-50/65">
                  {lang === "ru"
                    ? "Интервью о творческой практике, тишине в студии и роли цвета."
                    : "A conversation about studio practice, silence, and the role of color."}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
