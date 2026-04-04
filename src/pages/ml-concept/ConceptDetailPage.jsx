import { Link, useParams } from "react-router-dom";
import { concepts } from "../../data/concepts";

function ConceptDetailPage() {
  const { slug } = useParams();
  const concept = concepts.find((item) => item.slug === slug);

  if (!concept) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
          <h1 className="text-3xl font-semibold">Concept not found</h1>
          <p className="mt-3 text-blue-100/70">
            We could not find that module. Return to the list.
          </p>
          <Link
            to="/concepts"
            className="mt-6 inline-flex rounded-full border border-blue-400/60 bg-blue-500/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100"
          >
            Back to Concepts
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
            to="/concepts"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
          >
            Back to Concepts
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
          <Link
            to="/toc"
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
          >
            Table of Contents
          </Link>
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(5,10,30,0.45)] sm:mt-10 sm:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70 sm:text-xs sm:tracking-[0.3em]">
            Concept Module
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            {concept.title}
          </h1>
          {concept.slug === "supervised-learning" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Supervised Learning PDF"
                src="/ML%20concept/supervised%20learning.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/supervised%20learning.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "unsupervised-learning" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Unsupervised Learning PDF"
                src="/ML%20concept/unsupervised_learning.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/unsupervised_learning.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "reinforcement-learning" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Reinforcement Learning PDF"
                src="/ML%20concept/reinforcement_learning.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/reinforcement_learning.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}

          {concept.slug === "deep-learning" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Deep Learning PDF"
                src="/ML%20concept/deep_learning.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/deep_learning.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "nlp" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="NLP PDF"
                src="/ML%20concept/nlp.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/nlp.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "computer-vision" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Computer Vision PDF"
                src="/ML%20concept/computer_vision.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/computer_vision.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "gans" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Generative AI PDF"
                src="/ML%20concept/generative_ai.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/generative_ai.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "dimensionality-reduction" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Signal Decomposition PDF"
                src="/ML%20concept/signal_decomposition.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/signal_decomposition.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "clustering-algorithms" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Clustering Algorithms PDF"
                src="/ML%20concept/clustering_algorithms.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/clustering_algorithms.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "bayesian-inference" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Bayesian Inference PDF"
                src="/ML%20concept/bayesian_inference.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/bayesian_inference.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "time-series-analysis" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Time Series Analysis PDF"
                src="/ML%20concept/time_series_analysis.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/time_series_analysis.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
          {concept.slug === "self-supervised-learning" && (
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-slate-950/60 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.2em]">
                Reference PDF
              </p>
              <iframe
                title="Self-Supervised Learning PDF"
                src="/ML%20concept/self_supervised_learning.pdf"
                className="mt-4 h-[55vh] min-h-[360px] w-full rounded-xl border border-white/10 sm:h-[520px]"
              />
              <a
                href="/ML%20concept/self_supervised_learning.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/80 hover:text-white sm:text-xs sm:tracking-[0.2em]"
              >
                Open PDF in new tab
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConceptDetailPage;
