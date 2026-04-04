import { Link } from "react-router-dom";

const subConcepts = [
  {
    title: "Introduction to Python for Machine Learning",
    desc: "Foundations, workflows, and how to think in ML terms.",
    tag: "Core intro",
    slug: "intro-python-for-ml",
    pdf: "/Phitron%20Ai-ML/Optional-course/python_for_ml.pdf",
    pdfTitle: "Python for ML PDF",
    icon: (
      <>
        <path d="M6 5h9a3 3 0 0 1 0 6H6z" />
        <path d="M6 11h10a3 3 0 0 1 0 6H6z" />
        <path d="M6 5v12" />
      </>
    ),
  },
  {
    title: "Mathematics for Machine Learning",
    desc: "Linear algebra, calculus, and probability essentials.",
    tag: "Math base",
    slug: "math-for-ml",
    icon: (
      <>
        <path d="M4 6h16" />
        <path d="M8 6l-2 12" />
        <path d="M16 6l-2 12" />
        <path d="M7 12h10" />
      </>
    ),
  },
];

function OptionalCoursePage() {
  return (
    <div className="min-h-screen bg-[#070b18] text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-6 sm:py-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#131a32] via-[#0b1227] to-[#0a0f1f] px-6 py-8 shadow-[0_26px_70px_rgba(5,10,30,0.6)] sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.28),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_45%)]" />
          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200/70 sm:text-xs">
                Phitron AI/ML
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Optional Course
              </h1>
              <p className="mt-2 text-xs text-slate-200/80 sm:text-sm">
                Start with fundamentals before the main track.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/phitron-ai-ml"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-white"
              >
                Back to Phitron
              </Link>
              <Link
                to="/"
                aria-label="Go to home"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-blue-400/10 text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-white"
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

        <section className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
          {subConcepts.map((item) => (
            <Link
              key={item.title}
              to={`/phitron-ai-ml/optional-course/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-300/20" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">
                  {item.tag}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300/60">
                  Subconcept
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
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-200/70 sm:text-sm">
                {item.desc}
              </p>
              <span className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                Open
              </span>
            </Link>
          ))}
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-emerald-200/70 sm:text-xs sm:tracking-[0.2em]">
          <Link to="/toc" className="hover:text-white">
            Back to Table of Contents
          </Link>
          <span>neural-notes.ai/optional-course</span>
        </div>
      </div>
    </div>
  );
}

export default OptionalCoursePage;
