import { Link } from "react-router-dom";

const moduleIcons = [
  <>
    <path d="M4 6h16" />
    <path d="M4 12h10" />
    <path d="M4 18h7" />
    <path d="M14 14l2 2l4-4" />
  </>,
  <>
    <circle cx="7" cy="7" r="2" />
    <circle cx="17" cy="9" r="2" />
    <circle cx="10" cy="17" r="2" />
    <path d="M9 9l6 2" />
    <path d="M9 13l2 2" />
  </>,
  <>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="9" y="14" width="6" height="6" rx="1" />
    <path d="M10 10l2 4" />
    <path d="M14 10l-2 4" />
  </>,
  <>
    <path d="M6 4v16" />
    <path d="M12 4v16" />
    <path d="M18 4v16" />
    <path d="M6 8h12" />
    <path d="M6 12h12" />
    <path d="M6 16h12" />
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

const modules = [
  {
    title: "Optional Course",
    desc: "Linear algebra, calculus, probability, and optimization basics.",
    tag: "Week 1-2",
    link: "/phitron-ai-ml/optional-course",
  },
  {
    title: "Supervised learning",
    desc: "Regression, classification, metrics, and model debugging.",
    tag: "Week 3-4",
  },
  {
    title: "Unsupervised learning",
    desc: "Clustering, dimensionality reduction, and anomaly signals.",
    tag: "Week 5-6",
  },
  {
    title: "Deep learning",
    desc: "Neural nets, backprop, CNNs, and training stacks.",
    tag: "Week 7-8",
  },
  {
    title: "NLP and sequences",
    desc: "RNNs, attention, transformers, and prompt patterns.",
    tag: "Week 9-10",
  },
  {
    title: "Computer vision",
    desc: "Detection, segmentation, and image augmentation labs.",
    tag: "Week 11-12",
  },
];

function PhitronPage() {
  return (
    <div className="min-h-screen bg-[#070b18] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141a3a] via-[#0b1227] to-[#0a0f1f] px-6 py-8 shadow-[0_30px_80px_rgba(5,10,30,0.65)] sm:px-8 sm:py-10 md:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.28),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(251,191,36,0.18),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 animate-[scan_9s_ease-in-out_infinite] bg-[linear-gradient(110deg,transparent_0%,rgba(250,204,21,0.22)_50%,transparent_100%)] -translate-x-full" />
          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200/70 sm:text-xs">
                Phitron AI/ML Track
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-5xl">
                Concept Dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-xs text-slate-200/80 sm:text-sm md:text-base">
                A dedicated space for the Phitron AI/ML roadmap, sessions, and
                hands-on milestones.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
                  12-week sprint
                </span>
                <span className="rounded-full border border-amber-300/40 bg-amber-400/15 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/90">
                  6 projects
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/80">
                  Live labs
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/toc"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-white"
              >
                Back to TOC
              </Link>
              <Link
                to="/"
                aria-label="Go to home"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/40 bg-amber-400/10 text-amber-200 transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-white"
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
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const card = (
              <>
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-300/20" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">
                    {module.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300/60">
                    Module
                  </span>
                </div>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-400/10 text-emerald-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {moduleIcons[index % moduleIcons.length]}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {module.title}
                </h3>
                <p className="mt-2 text-xs text-slate-200/70 sm:text-sm">
                  {module.desc}
                </p>
                <span className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                  Track notes
                </span>
              </>
            );

            if (module.link) {
              return (
                <Link
                  key={module.title}
                  to={module.link}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-300/40 bg-emerald-400/10 p-5 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-300/15"
                >
                  {card}
                </Link>
              );
            }

            return (
              <article
                key={module.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-white/10"
              >
                {card}
              </article>
            );
          })}
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-emerald-200/70 sm:text-xs sm:tracking-[0.2em]">
          <Link to="/toc" className="hover:text-white">
            Back to Table of Contents
          </Link>
          <span>neural-notes.ai/phitron</span>
        </div>
      </div>
    </div>
  );
}

export default PhitronPage;
