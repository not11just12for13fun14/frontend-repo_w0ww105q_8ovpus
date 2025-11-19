import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <div id="lead">
        <LeadForm />
      </div>
      <CTA />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Solar for Business • All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default App
