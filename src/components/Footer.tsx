import { siteConfig } from "../config";
import { useLang } from "../i18n/LangContext";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-bone-50/5 bg-ink-900/60">
      <div className="container-art grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-lg font-bold tracking-[0.32em] text-bone-50">
            {siteConfig.brand}
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-50/55">
            {t("footer.curating")}
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-bone-50/40">
            Information
          </div>
          <ul className="mt-4 space-y-2 text-sm text-bone-50/70">
            <li><a href="#" className="hover:text-crimson-200">{t("footer.privacy")}</a></li>
            <li><a href="#" className="hover:text-crimson-200">{t("footer.terms")}</a></li>
            <li><a href="#" className="hover:text-crimson-200">{t("footer.press")}</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-bone-50/40">
            {t("footer.contact")}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-bone-50/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-crimson-200">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-crimson-200">Instagram</a>
            </li>
            <li>
              <a href={siteConfig.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-crimson-200">TikTok</a>
            </li>
            <li>
              <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="hover:text-crimson-200">Telegram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone-50/5 py-6">
        <div className="container-art flex flex-col items-start justify-between gap-2 text-[11px] uppercase tracking-[0.3em] text-bone-50/35 sm:flex-row">
          <span>© {year} {siteConfig.brand}. {t("footer.rights")}</span>
          <span>Crafted with quiet attention.</span>
        </div>
      </div>
    </footer>
  );
}
