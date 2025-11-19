import { useMemo } from 'react'

export default function Hero() {
  const gradient = useMemo(
    () => 'bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(250,204,21,0.25),transparent_60%),radial-gradient(800px_400px_at_80%_10%,rgba(34,197,94,0.18),transparent_60%)]',
    []
  )

  return (
    <header className={`relative overflow-hidden ${gradient} bg-white`}>      
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl bg-yellow-300/25" />
        <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl bg-green-300/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10 sm:pt-28 sm:pb-16">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Limited Founders Offer: £0 upfront solar for commercial roofs
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Go Solar For £0 Upfront. Cut Energy Costs From Day One.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-xl">
              We design, install and maintain your commercial solar system with no capital expense. You pay less for power from day one and lock in predictable rates.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>£0 upfront capex</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-yellow-400"/>Guaranteed savings</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400"/>Turnkey install</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"/>Monitoring & maintenance</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-300/40 via-emerald-300/40 to-sky-300/40 blur-xl" />
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-emerald-400" />
                <div>
                  <p className="text-slate-900 font-semibold leading-tight">Free Solar Assessment</p>
                  <p className="text-slate-600 text-sm">Find out your savings in 48 hours</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-slate-900">30%+</p>
                  <p className="text-xs text-slate-600">Avg. bill reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">24-48h</p>
                  <p className="text-xs text-slate-600">Savings proposal</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">£0</p>
                  <p className="text-xs text-slate-600">Upfront cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
