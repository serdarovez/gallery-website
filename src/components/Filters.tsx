import type { ArtworkStatus } from "../types";
import { useLang } from "../i18n/LangContext";

export type SizeBucket = "all" | "small" | "medium" | "large";
export type PriceBucket = "all" | "under1k" | "1k3k" | "3k6k" | "over6k";
export type StatusFilter = "all" | ArtworkStatus;

export interface FilterState {
  year: number | "all";
  size: SizeBucket;
  price: PriceBucket;
  status: StatusFilter;
  collection: string | "all";
}

interface Props {
  years: number[];
  collections: string[];
  state: FilterState;
  onChange: (next: FilterState) => void;
}

export function Filters({ years, collections, state, onChange }: Props) {
  const { t } = useLang();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[11px] uppercase tracking-[0.3em] text-bone-50/45">
        {t("catalog.filters")}
      </span>

      <Select
        label={t("catalog.filter.year")}
        value={String(state.year)}
        onChange={(v) => onChange({ ...state, year: v === "all" ? "all" : Number(v) })}
        options={[
          { value: "all", label: t("catalog.filter.all") },
          ...years.map((y) => ({ value: String(y), label: String(y) })),
        ]}
      />

      <Select
        label={t("catalog.filter.size")}
        value={state.size}
        onChange={(v) => onChange({ ...state, size: v as SizeBucket })}
        options={[
          { value: "all", label: t("catalog.filter.all") },
          { value: "small", label: t("catalog.size.small") },
          { value: "medium", label: t("catalog.size.medium") },
          { value: "large", label: t("catalog.size.large") },
        ]}
      />

      <Select
        label={t("catalog.filter.price")}
        value={state.price}
        onChange={(v) => onChange({ ...state, price: v as PriceBucket })}
        options={[
          { value: "all", label: t("catalog.filter.all") },
          { value: "under1k", label: t("catalog.price.under1k") },
          { value: "1k3k", label: t("catalog.price.1k3k") },
          { value: "3k6k", label: t("catalog.price.3k6k") },
          { value: "over6k", label: t("catalog.price.over6k") },
        ]}
      />

      <Select
        label={t("catalog.filter.status")}
        value={state.status}
        onChange={(v) => onChange({ ...state, status: v as StatusFilter })}
        options={[
          { value: "all", label: t("catalog.filter.all") },
          { value: "available", label: t("status.available") },
          { value: "reserved", label: t("status.reserved") },
          { value: "sold", label: t("status.sold") },
        ]}
      />

      <Select
        label={t("catalog.filter.collection")}
        value={state.collection}
        onChange={(v) => onChange({ ...state, collection: v })}
        options={[
          { value: "all", label: t("catalog.filter.all") },
          ...collections.map((c) => ({ value: c, label: c })),
        ]}
      />

      <button
        type="button"
        onClick={() =>
          onChange({ year: "all", size: "all", price: "all", status: "all", collection: "all" })
        }
        className="ml-1 rounded-full border border-bone-50/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-bone-50/55 transition hover:border-crimson-400/60 hover:text-bone-50"
      >
        Reset
      </button>
    </div>
  );
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <label className="group relative inline-flex items-center gap-2 rounded-full border border-bone-50/10 bg-ink-800/60 px-3 py-1.5 text-xs text-bone-50/85 transition hover:border-crimson-400/40">
      <span className="text-[10px] uppercase tracking-[0.22em] text-bone-50/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent pr-4 text-xs text-bone-50/90 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-ink-800 text-bone-50">
            {o.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none -ml-2 text-bone-50/45 transition group-hover:text-crimson-300"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </label>
  );
}
