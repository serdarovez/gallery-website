import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { exhibitions } from "../data/exhibitions";

export function Artist() {
  const { t, lang } = useLang();
  return (
    <>
      <section className="pt-28 sm:pt-36">
        <div className="container-art grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="eyebrow">{t("artist.eyebrow")}</div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {t("artist.title")}
            </h1>
            <p className="mt-8 max-w-xl text-bone-50/65 sm:text-lg">{t("artist.bio.body")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/catalog" className="btn-primary">
                {t("hero.cta.primary")}
              </Link>
              <a href="mailto:hello@example.com" className="btn-ghost">
                {lang === "ru" ? "Связаться" : "Get in touch"}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grain relative overflow-hidden rounded-sm ring-1 ring-bone-50/5">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
                  alt="Artist portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 hidden h-24 w-24 border border-crimson-700/40 sm:block" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-art grid gap-16 lg:grid-cols-2">
          <article>
            <div className="eyebrow">{t("artist.bio.h1")}</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">{t("artist.bio.h1")}</h2>
            <p className="mt-5 leading-relaxed text-bone-50/70">{t("artist.bio.body")}</p>
          </article>
          <article>
            <div className="eyebrow">{t("artist.path.h1")}</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">{t("artist.path.h1")}</h2>
            <p className="mt-5 leading-relaxed text-bone-50/70">{t("artist.path.body")}</p>
          </article>
        </div>
      </section>

      <section className="border-t border-bone-50/5 bg-ink-900/40 py-20">
        <div className="container-art">
          <div className="eyebrow">{t("artist.shows.h1")}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">{t("artist.shows.h1")}</h2>
          <ul className="mt-10 divide-y divide-bone-50/5">
            {exhibitions.map((ex) => (
              <li key={ex.id} className="grid gap-2 py-6 md:grid-cols-[160px_1fr_1fr] md:items-baseline">
                <span className="text-[11px] uppercase tracking-[0.24em] text-crimson-300/80">
                  {new Date(ex.startsOn).getFullYear()}
                </span>
                <span className="font-display text-xl text-bone-50">{ex.title[lang]}</span>
                <span className="text-bone-50/55">{ex.venue[lang]} · {ex.city[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-art">
          <div className="eyebrow">{t("artist.publications.h1")}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">
            {t("artist.publications.h1")}
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="rounded-sm border border-bone-50/5 bg-ink-800/40 p-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-crimson-300/70">
                  2024 · Press
                </div>
                <h3 className="mt-3 font-display text-xl">
                  {lang === "ru" ? "Журнал об искусстве" : "Art Magazine"} #{n}
                </h3>
                <p className="mt-3 text-sm text-bone-50/55">
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
