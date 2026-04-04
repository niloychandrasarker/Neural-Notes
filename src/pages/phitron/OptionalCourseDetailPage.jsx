import { Link, useParams } from "react-router-dom";

const subConcepts = [
  {
    slug: "intro-python-for-ml",
    title: "Introduction to Python for Machine Learning",
    pdf: "/Phitron%20Ai-ML/Optional-course/python_for_ml.pdf",
    pdfTitle: "Python for ML PDF",
  },
  {
    slug: "math-for-ml",
    title: "Mathematics for Machine Learning",
  },
];

function OptionalCourseDetailPage() {
  const { slug } = useParams();
  const concept = subConcepts.find((item) => item.slug === slug);

  if (!concept) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
          <h1 className="text-3xl font-semibold">Subconcept not found</h1>
          <p className="mt-3 text-blue-100/70">
            We could not find that item. Return to the list.
          </p>
          <Link
            to="/phitron-ai-ml/optional-course"
            className="mt-6 inline-flex rounded-full border border-emerald-400/60 bg-emerald-500/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100"
          >
            Back to Optional Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/phitron-ai-ml/optional-course"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
          >
            Back to Optional Course
          </Link>
          <Link
            to="/phitron-ai-ml"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
          >
            Phitron AI/ML
          </Link>
          <Link
            to="/"
            aria-label="Go to home"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/10 text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-white"
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

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(5,10,30,0.45)] sm:mt-10 sm:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-200/70 sm:text-xs sm:tracking-[0.3em]">
            Optional Course
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            {concept.title}
          </h1>

          {concept.pdf ? (
            <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title={concept.pdfTitle || concept.title}
                src={concept.pdf}
                className="mt-4 h-[55vh] min-h-90 w-full rounded-xl border border-white/10 sm:h-130"
              />
              <a
                href={concept.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <p className="mt-3 text-xs text-slate-200/70 sm:text-sm">
                PDF coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OptionalCourseDetailPage;
