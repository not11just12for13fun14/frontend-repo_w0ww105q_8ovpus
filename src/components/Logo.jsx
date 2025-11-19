import React from 'react'

export default function Logo({ className = 'h-10' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="sunGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="boltGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#sunGrad)" strokeWidth="3" strokeLinecap="round">
          <circle cx="32" cy="32" r="12" fill="url(#sunGrad)" opacity="0.9" />
          <path d="M32 4v10M32 50v10M4 32h10M50 32h10M11.3 11.3l7.1 7.1M45.6 45.6l7.1 7.1M11.3 52.7l7.1-7.1M45.6 18.4l7.1-7.1" opacity="0.8"/>
        </g>
        <path d="M28 26l10 2-6 6 6 2-12 10 4-8-6-2 4-10z" fill="url(#boltGrad)" opacity="0.95"/>
      </svg>
      <div className="leading-tight select-none">
        <div className="text-base sm:text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-emerald-500">
          Solar for Business
        </div>
        <div className="text-[10px] sm:text-xs text-slate-600">
          Clean power. Predictable costs.
        </div>
      </div>
    </div>
  )
}
