import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl">
      <label className="relative block">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Buscar artículos, p.ej. 'deploy', 'Vercel'..."
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>
    </div>
  )
}
