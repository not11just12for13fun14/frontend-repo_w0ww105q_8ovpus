export default function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-400/10 via-yellow-300/10 to-sky-300/10 p-8 sm:p-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
          </div>
          <div className="relative grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to cut your energy costs?</h3>
              <p className="mt-2 text-slate-600">Get a free, no-obligation solar savings proposal tailored to your building.</p>
            </div>
            <div className="sm:text-right">
              <a href="#lead" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Get My Free Proposal
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
