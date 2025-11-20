import { useEffect, useState } from 'react'

export default function Test() {
  const [links, setLinks] = useState({ frontend: null, backend: null })
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    setLinks({
      frontend: '/download-frontend',
      backend: backend ? `${backend}/download-backend` : null,
    })
  }, [backend])

  return (
    <div className="min-h-screen bg-white text-slate-900 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold">Project Downloads</h1>
        <p className="mt-2 text-slate-600">Use the buttons below to download each part as a compressed archive.</p>

        <div className="mt-6 grid gap-4">
          <a href={links.frontend} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Download Frontend (tar.gz)</a>
          {links.backend ? (
            <a href={links.backend} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Download Backend (tar.gz)</a>
          ) : (
            <p className="text-sm text-slate-500">Set VITE_BACKEND_URL to enable backend download.</p>
          )}
        </div>
      </div>
    </div>
  )
}
