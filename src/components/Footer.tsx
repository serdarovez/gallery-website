import { siteConfig } from "../config";
import { useLang } from "../i18n/LangContext";

export function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-bone-50/15">
      <div className="container-art py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-bone-50/15 pb-10">
          <h2 className="font-display text-6xl font-semibold uppercase leading-none tracking-tight sm:text-8xl">
            {lang === "ru" ? (
              <>
                Стой <span className="italic text-crimson-400">рядом</span>
              </>
            ) : (
              <>
                Stay <span className="italic text-crimson-400">close</span>
              </>
            )}
          </h2>
          <a href={siteConfig.buyUrl} target="_blank" rel="noreferrer" className="btn-primary">
            {lang === "ru" ? "Написать в Telegram" : "Message on Telegram"}
          </a>
        </div>

        <div className="grid gap-10 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-bold uppercase tracking-[0.24em] text-bone-50">
              {siteConfig.brand}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-50/65">
              {t("footer.curating")}
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-bone-50/45">
              {lang === "ru" ? "Информация" : "Information"}
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-bone-50/80">
              <li><a href="#" className="hover:text-bone-50">{t("footer.privacy")}</a></li>
              <li><a href="#" className="hover:text-bone-50">{t("footer.terms")}</a></li>
              <li><a href="#" className="hover:text-bone-50">{t("footer.press")}</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-bone-50/45">
              {t("footer.contact")}
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-bone-50/80">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-bone-50">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-bone-50">Instagram</a>
              </li>
              <li>
                <a href={siteConfig.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-bone-50">TikTok</a>
              </li>
              <li>
                <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="hover:text-bone-50">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-bone-50/15 py-6">
        <div className="container-art flex flex-col items-start justify-between gap-2 text-[11px] uppercase tracking-[0.32em] text-bone-50/45 sm:flex-row">
          <span>© {year} {siteConfig.brand}. {t("footer.rights")}</span>
          <span>{lang === "ru" ? "Сделано с тишиной" : "Made with quiet attention"}</span>
        </div>
      </div>
    </footer>
  );
}
