import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 sm:py-12">
        <header className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b1224]/95 shadow-[0_35px_90px_rgba(5,10,30,0.65)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.28),transparent_45%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.22),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-50 animate-[scan_10s_ease-in-out_infinite] bg-[linear-gradient(120deg,transparent_0%,rgba(34,211,238,0.22)_50%,transparent_100%)] -translate-x-full" />
          <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:p-12">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.4),transparent_60%)]" />
                  <svg
                    viewBox="0 0 24 24"
                    className="relative h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 7h6" />
                    <path d="M6 12h9" />
                    <path d="M6 17h4" />
                    <path d="M16 6l2 2l-4 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/60 sm:text-xs sm:tracking-[0.32em]">
                    Neural Notes
                  </p>
                  <p className="text-xs text-slate-200/70">
                    Personal Research Log
                  </p>
                </div>
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-6xl">
                Neural Notes
                <span className="block text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                  Knowledge Journal
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-200/80 sm:text-base md:text-lg">
                A focused notebook for neural experiments, learning tracks, and
                model insights.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/toc"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(6,182,212,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300/30 hover:shadow-[0_18px_28px_rgba(6,182,212,0.35)] sm:px-5 sm:text-xs sm:tracking-[0.2em]"
                >
                  Open Table of Contents
                </Link>
                <span className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/60 sm:text-xs sm:tracking-[0.2em]">
                  Research Edition
                </span>
              </div>
            </div>
            <div
              className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0f172a] via-[#0b1327] to-[#0a1122] sm:h-72"
              aria-hidden="true"
            >
              <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-sky-400/20 blur-2xl animate-[pulse_7s_ease-in-out_infinite]" />
              <div className="absolute inset-0 opacity-50 transform-[perspective(700px)_rotateX(60deg)_translateY(40px)] bg-[linear-gradient(rgba(34,211,238,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.25)_1px,transparent_1px)] bg-size-[26px_26px] animate-[drift_12s_linear_infinite]" />
              <div className="absolute left-12 top-20 h-3 w-3 rounded-full bg-cyan-100/90 shadow-[0_0_18px_rgba(34,211,238,0.7)] animate-[float_6s_ease-in-out_infinite]" />
              <div className="absolute left-40 top-36 h-2 w-2 rounded-full bg-cyan-100/80 shadow-[0_0_16px_rgba(34,211,238,0.6)] animate-[float_6s_ease-in-out_infinite] [animation-delay:1.5s]" />
              <div className="absolute left-56 top-16 h-2.5 w-2.5 rounded-full bg-cyan-100/80 shadow-[0_0_16px_rgba(34,211,238,0.6)] animate-[float_6s_ease-in-out_infinite] [animation-delay:3s]" />
              <div className="absolute inset-6 rounded-2xl border border-dashed border-cyan-300/50 opacity-70 animate-[flicker_4s_linear_infinite]" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.25),transparent_70%)]" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default CoverPage;

