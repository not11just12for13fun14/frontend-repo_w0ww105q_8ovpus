import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })

    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, company: form.company })
      })

      if (!res.ok) throw new Error('Request failed')
      await res.json()
      setStatus({ state: 'success', message: 'Thanks! We\'ll be in touch shortly.' })
      setForm({ name: '', phone: '', email: '', company: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Get Your Free Solar Proposal</h2>
            <p className="mt-2 text-white/70">No obligation. Quick assessment for commercial properties.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(555) 123-4567" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Company (optional)</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" />
              </div>

              <button type="submit" disabled={status.state==='loading'} className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-400 to-emerald-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 transition duration-200 disabled:opacity-70">
                <span>Get My Free Proposal</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              {status.state !== 'idle' && (
                <p className={`text-sm mt-2 ${status.state==='success' ? 'text-emerald-300' : status.state==='error' ? 'text-rose-300' : 'text-white/70'}`}>{status.message}</p>
              )}
            </form>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-center">
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Lower your operating expenses immediately with cheaper power.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-300"/>We handle design, permits, installation and maintenance.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400"/>Performance guaranteed with 24/7 monitoring.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-400"/>Ideal for warehouses, retail, logistics and office buildings.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
