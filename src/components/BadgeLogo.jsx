import React from 'react'

export default function BadgeLogo({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm ${className}`}>
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
        <defs>
          <linearGradient id="miniSun" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="12" fill="url(#miniSun)" />
      </svg>
      <span className="text-xs font-medium text-slate-700">Solar for Business</span>
    </div>
  )
}
