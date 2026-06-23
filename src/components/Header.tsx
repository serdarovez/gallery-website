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
          ? "border-b border-bone-50/5 bg-ink-900/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-art flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-[0.32em] text-bone-50 sm:text-xl"
        >
          {siteConfig.brand}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
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
            className="rounded-full border border-bone-50/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-bone-50/70 transition hover:border-crimson-400/60 hover:text-bone-50"
            aria-label="Toggle language"
          >
            {lang === "en" ? "EN / RU" : "RU / EN"}
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-bone-50/10 text-bone-50/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <>
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 17h16" stroke="currentColor" strokeWidth="1.6" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-bone-50/5 bg-ink-900/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-bone-50" : "text-bone-50/60"}`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
