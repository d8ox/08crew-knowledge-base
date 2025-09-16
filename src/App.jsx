import React, { useState, useMemo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryPills from './components/CategoryPills'
import ArticleCard from './components/ArticleCard'
import ArticleView from './components/ArticleView'
import articlesData from './data/articles.json'

export default function App(){
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('All')
  const navigate = useNavigate()

  const categories = useMemo(()=>['All', ...Array.from(new Set(articlesData.map(a=>a.category)))] ,[])

  const filtered = articlesData.filter(a=>{
    const q = query.toLowerCase().trim()
    const inQuery = !q || (a.title+a.summary+a.content).toLowerCase().includes(q)
    const inCat = activeCat === 'All' || a.category === activeCat
    return inQuery && inCat
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Knowledge Base</h2>
            <p className="text-sm text-slate-600">Documentación y guías — 08 Crew</p>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-4">
          <CategoryPills categories={categories} active={activeCat} onPick={setActiveCat} />
        </div>

        <Routes>
          <Route path="/" element={
            <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map(a=> <ArticleCard key={a.id} article={a} onOpen={()=>navigate('/article/'+a.id)} />)}
            </section>
          } />
          <Route path="/article/:id" element={<ArticleView articles={articlesData} />} />
        </Routes>
      </main>
    </div>
  )
}
