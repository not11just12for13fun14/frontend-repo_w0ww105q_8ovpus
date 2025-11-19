import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="lead">
        <LeadForm />
      </div>
      <CTA />
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Solar for Business • All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default App
