import type { ArtworkStatus } from "../types";
import { useLang } from "../i18n/LangContext";

export type SizeBucket = "all" | "small" | "medium" | "large";
export type StatusFilter = "all" | ArtworkStatus;

export interface FilterState {
  year: number | "all";
  size: SizeBucket;
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
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      <span className="text-[11px] uppercase tracking-[0.32em] text-bone-50/55">
        {t("catalog.filters")} /
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
          onChange({ year: "all", size: "all", status: "all", collection: "all" })
        }
        className="ml-auto text-[11px] uppercase tracking-[0.28em] text-bone-50/55 hover:text-bone-50"
      >
        Reset ×
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
    <label className="group flex items-baseline gap-2 text-bone-50/85">
      <span className="text-[10px] uppercase tracking-[0.28em] text-bone-50/45">{label}</span>
      <span className="relative inline-flex items-baseline gap-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none border-0 border-b border-transparent bg-transparent pr-3 font-display text-base italic text-bone-50 transition focus:border-bone-50 focus:outline-none group-hover:border-bone-50/40"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-ink-900 font-sans not-italic text-bone-50">
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none -ml-2 text-bone-50/50 transition group-hover:text-bone-50"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    </label>
  );
}
