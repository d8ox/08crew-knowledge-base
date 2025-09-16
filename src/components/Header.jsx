import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-white font-bold">08</div>
          <div>
            <h1 className="text-lg font-semibold">08 Crew</h1>
            <p className="text-xs text-slate-500">Knowledge Base</p>
          </div>
        </Link>
        <nav className="hidden sm:flex gap-4 items-center">
          <Link to="/" className="text-sm hover:underline">Artículos</Link>
          <a target="_blank" rel="noreferrer" href="https://github.com/" className="text-sm hover:underline">Repo</a>
        </nav>
      </div>
    </header>
  )
}
