import { siteConfig } from "../config";
import { useLang } from "../i18n/LangContext";

export function About() {
  const { lang, t } = useLang();
  return (
    <section className="pt-28 sm:pt-36">
      <div className="container-art max-w-3xl">
        <div className="eyebrow">{t("nav.about")}</div>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          {lang === "ru" ? "О галерее" : "About the gallery"}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-bone-50/70">
          {lang === "ru"
            ? "Galleria — личная онлайн-галерея, в которой я делюсь собственными работами. Это место, где можно медленно рассмотреть каждую картину, прочитать историю её создания и, если работа найдёт отклик, забрать её к себе."
            : "Galleria is a personal online gallery where I share my own paintings. It is a place to look slowly, read the stories behind each piece, and — if something resonates — take it home."}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-sm border border-bone-50/5 bg-ink-800/40 p-6 transition hover:border-crimson-400/40"
          >
            <div className="text-[11px] uppercase tracking-[0.24em] text-crimson-300/70">
              {lang === "ru" ? "Связь" : "Contact"}
            </div>
            <div className="mt-2 font-display text-2xl">{siteConfig.email}</div>
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-bone-50/5 bg-ink-800/40 p-6 transition hover:border-crimson-400/40"
          >
            <div className="text-[11px] uppercase tracking-[0.24em] text-crimson-300/70">
              {lang === "ru" ? "Соцсети" : "Follow"}
            </div>
            <div className="mt-2 font-display text-2xl">@galleria</div>
          </a>
        </div>
      </div>
    </section>
  );
}
