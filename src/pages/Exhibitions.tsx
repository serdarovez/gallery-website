import { motion } from "framer-motion";
import { useLang } from "../i18n/LangContext";
import { exhibitions } from "../data/exhibitions";
import { fadeUp, stagger } from "../motion";

export function Exhibitions() {
  const { t, lang } = useLang();
  return (
    <section className="pt-28 sm:pt-36">
      <div className="container-art">
        <motion.div
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex items-center justify-between" variants={fadeUp}>
            <div className="eyebrow">{t("nav.exhibitions")}</div>
            <div className="font-display text-xl italic text-bone-100/80">
              {String(exhibitions.length).padStart(2, "0")}
            </div>
          </motion.div>
          <motion.h1
            className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-8xl"
            variants={fadeUp}
          >
            {lang === "ru" ? (
              <>
                Где увидеть<br />
                <span className="italic text-crimson-400">работы</span>
              </>
            ) : (
              <>
                Where to<br />
                <span className="italic text-crimson-400">see them</span>
              </>
            )}
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-x-10 gap-y-20 lg:grid-cols-2"
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {exhibitions.map((ex, i) => (
            <motion.article key={ex.id} variants={fadeUp} className="group">
              <div className="flex items-center justify-between pb-3">
                <span className="font-display text-xl italic text-bone-100/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-bone-50/70">
                  {new Date(ex.startsOn).toLocaleDateString(lang, { month: "short", day: "numeric" })}
                  {" — "}
                  {new Date(ex.endsOn).toLocaleDateString(lang, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
                <motion.img
                  src={ex.cover}
                  alt={ex.title[lang]}
                  className="h-full w-full object-cover duotone-red"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/55 via-transparent to-crimson-700/20" />
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1] tracking-tight">
                {ex.title[lang]}
              </h2>
              <div className="mt-3 text-[11px] uppercase tracking-[0.26em] text-bone-50/55">
                {ex.venue[lang]} · {ex.city[lang]}
              </div>
              <p className="mt-5 leading-relaxed text-bone-50/75">{ex.description[lang]}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
