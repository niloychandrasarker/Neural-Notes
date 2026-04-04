import { Link } from "react-router-dom";
import { tocItems } from "../data/tocItems";

const iconSet = [
  <>
    <path d="M4 6h16" />
    <path d="M4 12h10" />
    <path d="M4 18h7" />
  </>,
  <>
    <circle cx="7" cy="7" r="2" />
    <circle cx="17" cy="9" r="2" />
    <circle cx="10" cy="17" r="2" />
    <path d="M9 9l6 2" />
  </>,
  <>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="9" y="14" width="6" height="6" rx="1" />
  </>,
  <>
    <path d="M6 4v16" />
    <path d="M12 4v16" />
    <path d="M18 4v16" />
  </>,
  <>
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
  </>,
  <>
    <path d="M4 12s3-6 8-6s8 6 8 6s-3 6-8 6s-8-6-8-6z" />
    <circle cx="12" cy="12" r="2.5" />
  </>,
];

const subtitleSet = [
  "Curated notes, experiments, and study checkpoints.",
  "Roadmap, lectures, and project notes from Phitron.",
  "Curated notes, experiments, and study checkpoints.",
  "Curated notes, experiments, and study checkpoints.",
  "Curated notes, experiments, and study checkpoints.",
  "Curated notes, experiments, and study checkpoints.",
];

function TocPage() {
  const baseCardClass =
    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10";

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b1224]/90 p-6 shadow-[0_30px_80px_rgba(5,10,30,0.6)] sm:p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.12),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 animate-[scan_8s_ease-in-out_infinite] bg-[linear-gradient(120deg,transparent_0%,rgba(34,211,238,0.18)_50%,transparent_100%)] -translate-x-full" />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/60 sm:text-xs sm:tracking-[0.32em]">
                Neural Notes Index
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl md:text-4xl">
                Table of Contents
              </h2>
              <p className="mt-2 text-xs text-slate-200/70 sm:text-sm md:text-base">
                Structured chapters, experiment logs, and references.
              </p>
            </div>
            <Link
              to="/"
              aria-label="Go to home"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11l9-7l9 7" />
                <path d="M5 10v10h14V10" />
                <path d="M9 20v-6h6v6" />
              </svg>
            </Link>
          </div>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tocItems.map((item, index) => {
              const icon = iconSet[index % iconSet.length];
              const subtitle = subtitleSet[index % subtitleSet.length];
              const isPhitron = index === 1;
              const aiMlIcon = (
                <>
                  <path d="M12 3c-2.2 0-4 1.8-4 4v3" />
                  <path d="M12 3c2.2 0 4 1.8 4 4v3" />
                  <path d="M8 10H6a2 2 0 0 0-2 2v1" />
                  <path d="M16 10h2a2 2 0 0 1 2 2v1" />
                  <path d="M6 13v3a4 4 0 0 0 8 0v-1" />
                  <path d="M10 17h4" />
                  <path d="M9 7h.01" />
                  <path d="M15 7h.01" />
                </>
              );
              const card = (
                <>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-300/20" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/60">
                      Chapter
                    </span>
                  </div>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 transition group-hover:scale-105 group-hover:border-cyan-300 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {isPhitron ? aiMlIcon : icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {item}
                  </h3>
                  <p className="mt-2 text-xs text-slate-200/70">{subtitle}</p>
                  <span className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                    Open
                  </span>
                </>
              );

              if (index === 0) {
                return (
                  <Link
                    key={item}
                    to="/concepts"
                    className={`${baseCardClass} border-cyan-400/40 bg-cyan-400/10 shadow-[0_12px_24px_rgba(8,145,178,0.2)] hover:bg-cyan-300/15`}
                  >
                    {card}
                  </Link>
                );
              }

              if (index === 1) {
                return (
                  <Link
                    key={item}
                    to="/phitron-ai-ml"
                    className={`${baseCardClass} border-emerald-300/40 bg-emerald-400/10 shadow-[0_12px_24px_rgba(16,185,129,0.2)] hover:border-emerald-200 hover:bg-emerald-300/15`}
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <li key={item} className={baseCardClass}>
                  {card}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TocPage;
