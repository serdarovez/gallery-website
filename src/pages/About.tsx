import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { useLang } from "../i18n/LangContext";
import { fadeUp, stagger } from "../motion";

export function About() {
  const { lang, t } = useLang();
  return (
    <section className="pt-28 sm:pt-36">
      <div className="container-art max-w-4xl">
        <motion.div
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div className="eyebrow" variants={fadeUp}>
            {t("nav.about")}
          </motion.div>
          <motion.h1
            className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-8xl"
            variants={fadeUp}
          >
            {lang === "ru" ? (
              <>
                О <span className="italic text-crimson-400">галерее</span>
              </>
            ) : (
              <>
                On the <span className="italic text-crimson-400">gallery</span>
              </>
            )}
          </motion.h1>
          <motion.p
            className="mt-10 text-lg leading-relaxed text-bone-50/75 sm:text-xl"
            variants={fadeUp}
          >
            {lang === "ru"
              ? "Galleria — личная онлайн-галерея, в которой я делюсь собственными работами. Место, где можно медленно рассмотреть каждую картину, прочитать историю её создания и, если работа найдёт отклик, забрать её к себе."
              : "Galleria is a personal online gallery where I share my own paintings. A place to look slowly, read the stories behind each piece, and — if something resonates — take it home."}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 border-t border-bone-50/15 pt-12 sm:grid-cols-2"
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="group block border border-bone-50/15 p-6 transition hover:border-bone-50"
            variants={fadeUp}
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              {lang === "ru" ? "Связь" : "Contact"}
            </div>
            <div className="mt-3 font-display text-3xl italic transition group-hover:text-crimson-300">
              {siteConfig.email}
            </div>
          </motion.a>
          <motion.a
            href={siteConfig.buyUrl}
            target="_blank"
            rel="noreferrer"
            className="group block border border-bone-50/15 p-6 transition hover:border-bone-50"
            variants={fadeUp}
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-bone-50/55">
              Telegram
            </div>
            <div className="mt-3 font-display text-3xl italic transition group-hover:text-crimson-300">
              @serii1177
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
