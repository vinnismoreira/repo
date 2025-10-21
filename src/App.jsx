import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './routes.js'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', minHeight: '100vh'}}>
        <aside style={{width: 260, borderRight: '1px solid #eee', padding: 16}}>
          <h2 style={{marginTop: 0}}>Páginas</h2>
          <nav>
            <ul style={{listStyle:'none', padding:0, margin:0}}>
              {routes.map(r => (
                <li key={r.path} style={{marginBottom: 8}}>
                  <Link to={r.path}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main style={{flex: 1, padding: 16}}>
          <Routes>
            {routes.map(r => <Route key={r.path} path={r.path} element={<r.Component />} />)}
            <Route path="*" element={<div>Selecione uma página no menu.</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
