import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Artwork } from "../types";
import { useLang } from "../i18n/LangContext";
import { buildBuyMessage, siteConfig } from "../config";
import { modalBackdrop, modalPanel } from "../motion";

interface Props {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: Props) {
  const { lang, t } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    if (!artwork) return;
    setActiveIdx(0);
    setShowStory(false);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [artwork, onClose]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-50 flex items-stretch justify-center overflow-y-auto bg-ink-900/85 backdrop-blur-sm"
          variants={modalBackdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={artwork.title[lang]}
        >
          <motion.div
            key="modal-panel"
            className="relative my-0 w-full max-w-6xl bg-ink-800/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-bone-50/5 sm:my-8 sm:rounded-sm"
            variants={modalPanel}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalBody
              artwork={artwork}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
              showStory={showStory}
              setShowStory={setShowStory}
              lang={lang}
              t={t}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalBodyProps {
  artwork: Artwork;
  activeIdx: number;
  setActiveIdx: (i: number) => void;
  showStory: boolean;
  setShowStory: (fn: (v: boolean) => boolean) => void;
  lang: "en" | "ru";
  t: (key: Parameters<ReturnType<typeof useLang>["t"]>[0]) => string;
  onClose: () => void;
}

function ModalBody({
  artwork,
  activeIdx,
  setActiveIdx,
  showStory,
  setShowStory,
  lang,
  t,
  onClose,
}: ModalBodyProps) {
  const [copied, setCopied] = useState(false);
  const images = artwork.gallery.length ? artwork.gallery : [artwork.cover];
  const activeImage = images[activeIdx];
  const isSold = artwork.status === "sold";

  const handleBuy = async () => {
    const message = buildBuyMessage({
      title: artwork.title[lang],
      imageUrl: activeImage,
      language: lang,
    });
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard may be unavailable (insecure context) — fall through and just open Telegram
    }
    window.open(siteConfig.buyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        type="button"
        onClick={onClose}
        aria-label={t("modal.close")}
        className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink-900/70 text-bone-50/80 ring-1 ring-bone-50/10 transition hover:bg-crimson-600/90 hover:text-bone-50"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <div className="grid gap-0 md:grid-cols-[1.15fr_1fr]">
        <div className="relative flex flex-col bg-ink-900">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:min-h-[640px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={artwork.title[lang]}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto bg-ink-900/70 p-3 scrollbar-thin">
              {images.map((src, idx) => (
                <button
                  type="button"
                  key={src + idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm ring-1 transition ${
                    idx === activeIdx
                      ? "ring-crimson-400"
                      : "ring-bone-50/10 hover:ring-bone-50/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div
          className="flex max-h-[90vh] flex-col overflow-y-auto p-6 sm:p-10 scrollbar-thin"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">{artwork.collection[lang]}</div>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-bone-50 sm:text-4xl">
            {artwork.title[lang]}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="pill">
              {artwork.status === "available"
                ? t("status.available")
                : artwork.status === "reserved"
                ? t("status.reserved")
                : t("status.sold")}
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-bone-50/45">
              {artwork.year} · {artwork.technique[lang]}
            </span>
          </div>

          <p className="mt-6 leading-relaxed text-bone-50/75">
            {artwork.description[lang]}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-y-4 border-t border-bone-50/5 pt-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-bone-50/40">
                {t("modal.year")}
              </dt>
              <dd className="mt-1 text-bone-50/90">{artwork.year}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-bone-50/40">
                {t("modal.technique")}
              </dt>
              <dd className="mt-1 text-bone-50/90">{artwork.technique[lang]}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-bone-50/40">
                {t("modal.size")}
              </dt>
              <dd className="mt-1 text-bone-50/90">
                {artwork.width} × {artwork.height} {t("common.cm")}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-bone-50/40">
                {t("modal.price")}
              </dt>
              <dd className="mt-1 font-display text-xl text-crimson-300">
                {isSold ? "—" : `$${artwork.price.toLocaleString()}`}
              </dd>
            </div>
          </dl>

          {artwork.story && (
            <div className="mt-6 rounded-sm border border-bone-50/5 bg-ink-900/55 p-4">
              <button
                type="button"
                onClick={() => setShowStory((v) => !v)}
                className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.2em] text-bone-50/80"
              >
                <span>{t("modal.story")}</span>
                <motion.span
                  className="text-crimson-300"
                  animate={{ rotate: showStory ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {showStory && (
                  <motion.p
                    className="mt-3 text-sm leading-relaxed text-bone-50/65"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {artwork.story[lang]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.button
              type="button"
              onClick={handleBuy}
              disabled={isSold}
              whileHover={isSold ? undefined : { scale: 1.02 }}
              whileTap={isSold ? undefined : { scale: 0.98 }}
              className={`btn-primary flex-1 ${
                isSold ? "cursor-not-allowed opacity-40 hover:bg-crimson-600 hover:shadow-none" : ""
              }`}
            >
              {isSold ? t("modal.sold") : t("modal.buy")}
            </motion.button>
            <motion.button
              type="button"
              onClick={handleBuy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost flex-1"
            >
              {t("modal.request")}
            </motion.button>
          </div>

          <AnimatePresence>
            {copied && (
              <motion.div
                key="copied"
                className="mt-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.22em] text-crimson-300/90"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" />
                </svg>
                {lang === "ru"
                  ? "Сообщение скопировано — откройте Telegram и вставьте"
                  : "Message copied — open Telegram and paste"}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
