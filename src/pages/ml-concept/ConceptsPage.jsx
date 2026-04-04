import { Link } from "react-router-dom";
import { concepts } from "../../data/concepts";

const iconMap = {
  supervised: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h7" />
      <path d="M14 14l2 2l4-4" />
    </>
  ),
  unsupervised: (
    <>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="9" r="2" />
      <circle cx="10" cy="17" r="2" />
      <path d="M9 9l6 2" />
      <path d="M9 13l2 2" />
    </>
  ),
  reinforcement: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M10 10l2 4" />
      <path d="M14 10l-2 4" />
    </>
  ),
  deep: (
    <>
      <path d="M6 4v16" />
      <path d="M12 4v16" />
      <path d="M18 4v16" />
      <path d="M6 8h12" />
      <path d="M6 12h12" />
      <path d="M6 16h12" />
    </>
  ),
  nlp: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </>
  ),
  vision: (
    <>
      <path d="M4 12s3-6 8-6s8 6 8 6s-3 6-8 6s-8-6-8-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  gans: (
    <>
      <path d="M5 5h6v6H5z" />
      <path d="M13 13h6v6h-6z" />
      <path d="M11 9l2 2" />
      <path d="M9 11l2 2" />
    </>
  ),
  reduction: (
    <>
      <path d="M4 6h16" />
      <path d="M6 10h12" />
      <path d="M8 14h8" />
      <path d="M10 18h4" />
    </>
  ),
  clustering: (
    <>
      <circle cx="7" cy="8" r="2" />
      <circle cx="17" cy="8" r="2" />
      <circle cx="12" cy="16" r="2" />
      <path d="M7 10l5 4" />
      <path d="M17 10l-5 4" />
    </>
  ),
  bayesian: (
    <>
      <path d="M6 4h6a3 3 0 0 1 0 6H6z" />
      <path d="M6 10h7a3 3 0 0 1 0 6H6z" />
      <path d="M6 4v12" />
    </>
  ),
  timeseries: (
    <>
      <path d="M4 18h16" />
      <path d="M6 14l4-4l3 3l5-6" />
      <circle cx="10" cy="10" r="1.2" />
      <circle cx="13" cy="13" r="1.2" />
    </>
  ),
  selfsupervised: (
    <>
      <path d="M12 4a8 8 0 1 1-7 4" />
      <path d="M4 4v5h5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
};

function ConceptsPage() {
  return (
    <div className="min-h-screen bg-[#070b18] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#0d1b3f] via-[#0b1430] to-[#070b1a] px-6 py-8 shadow-[0_30px_80px_rgba(5,10,30,0.6)] sm:px-8 sm:py-10 md:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(251,191,36,0.15),transparent_40%)]" />
          <Link
            to="/"
            aria-label="Go to home"
            className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-white"
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
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80 sm:text-sm sm:tracking-[0.28em]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/50 bg-blue-500/20 sm:h-10 sm:w-10">
                AI
              </span>
              Phitron AI/ML
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-yellow-300 sm:text-3xl md:text-5xl">
              AI & ML Deep Dive
            </h1>
            <p className="text-xs text-slate-200/80 sm:text-sm md:text-base">
              12 Days, 12 Core Concepts
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.slug}
              to={`/concepts/${concept.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-yellow-300/70 hover:bg-white/10 sm:p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/10 text-cyan-100 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconMap[concept.iconType]}
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white sm:text-base">
                {concept.title}
              </h3>
              <p className="mt-2 text-xs text-slate-200/70 sm:text-sm">
                {concept.summary}
              </p>
              <span className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300/90 sm:text-xs sm:tracking-[0.2em]">
                Open
              </span>
            </Link>
          ))}
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-cyan-200/70 sm:mt-10 sm:text-xs sm:tracking-[0.2em]">
          <Link to="/toc" className="hover:text-white">
            Back to Table of Contents
          </Link>
          <span>neural-notes.ai/ml-course</span>
        </div>
      </div>
    </div>
  );
}

export default ConceptsPage;

