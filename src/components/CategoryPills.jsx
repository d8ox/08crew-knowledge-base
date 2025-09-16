import React from 'react'

export default function CategoryPills({ categories, active, onPick }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onPick(cat)}
          className={`px-3 py-1 rounded-full text-sm ${cat===active ? 'bg-accent text-white' : 'bg-white border'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
