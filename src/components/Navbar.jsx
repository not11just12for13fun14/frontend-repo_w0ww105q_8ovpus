import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-9" />
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#lead" className="text-slate-600 hover:text-slate-900 transition">Get proposal</a>
          <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition">Benefits</a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
        </div>
        <a href="#lead" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-semibold shadow hover:shadow-md transition">
          Get Started
        </a>
      </div>
    </nav>
  )
}
