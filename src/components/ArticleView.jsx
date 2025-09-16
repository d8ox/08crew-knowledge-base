import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ArticleView({ articles }){
  const { id } = useParams()
  const nav = useNavigate()
  const article = articles.find(a=>a.id===id)
  if(!article) return <div className="mt-6">Artículo no encontrado</div>

  return (
    <div className="mt-6">
      <button onClick={()=>nav(-1)} className="text-sm underline">← Volver</button>
      <h2 className="text-2xl font-bold mt-3">{article.title}</h2>
      <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{__html: article.content}} />
    </div>
  )
}
