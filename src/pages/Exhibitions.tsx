import { useLang } from "../i18n/LangContext";
import { exhibitions } from "../data/exhibitions";

export function Exhibitions() {
  const { t, lang } = useLang();
  return (
    <section className="pt-28 sm:pt-36">
      <div className="container-art">
        <div className="eyebrow">{t("nav.exhibitions")}</div>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          {t("exhibitions.title")}
        </h1>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {exhibitions.map((ex) => (
            <article key={ex.id} className="group card-frame overflow-hidden">
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={ex.cover}
                  alt={ex.title[lang]}
                  className="h-full w-full object-cover transition duration-[1500ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-crimson-300/80">
                    {new Date(ex.startsOn).toLocaleDateString(lang, { month: "long", day: "numeric" })}
                    {" — "}
                    {new Date(ex.endsOn).toLocaleDateString(lang, { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-semibold leading-tight">
                    {ex.title[lang]}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-bone-50/55">
                  {ex.venue[lang]} · {ex.city[lang]}
                </div>
                <p className="mt-3 leading-relaxed text-bone-50/75">{ex.description[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
