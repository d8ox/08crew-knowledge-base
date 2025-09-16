import React from 'react'

export default function ArticleCard({ article, onOpen }) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold">{article.title}</h3>
      <p className="text-sm text-slate-600 mt-2">{article.summary}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs px-2 py-1 bg-slate-100 rounded">{article.category}</span>
        <button onClick={onOpen} className="text-sm underline">Leer</button>
      </div>
    </article>
  )
}
