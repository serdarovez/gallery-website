import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { siteConfig } from "../config";
import { useLang } from "../i18n/LangContext";

const links = [
  { to: "/catalog", key: "nav.catalog" as const },
  { to: "/artist", key: "nav.artist" as const },
  { to: "/exhibitions", key: "nav.exhibitions" as const },
  { to: "/about", key: "nav.about" as const },
];

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-bone-50/15 bg-ink-900/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-art flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link to="/" className="flex items-end gap-3">
          <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-bone-50">
            {siteConfig.brand}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.32em] text-bone-50/55 sm:inline">
            {lang === "ru" ? "выпуск 01" : "issue 01"}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-[11px] uppercase tracking-[0.28em] text-bone-50/80 transition hover:text-bone-50"
            aria-label="Toggle language"
          >
            {lang === "en" ? "EN" : "RU"}
            <span className="text-bone-50/30"> / </span>
            <span className="text-bone-50/30">{lang === "en" ? "RU" : "EN"}</span>
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center text-bone-50/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <>
                  <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 17h18" stroke="currentColor" strokeWidth="1.6" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-bone-50/15 bg-ink-900/95 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 font-display text-3xl uppercase tracking-tight ${
                    isActive ? "text-crimson-400 italic" : "text-bone-50"
                  }`
                }
              >
                <span className="text-sm italic text-bone-50/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(l.key)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
