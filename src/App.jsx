import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './routes.js'
import './app-shell.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <h2>Páginas</h2>
          <nav>
            <ul className="nav-list">
              {routes.map(r => (
                <li key={r.path}>
                  <Link to={r.path}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="main">
          <Routes>
            {routes.map(r => <Route key={r.path} path={r.path} element={<r.Component />} />)}
            <Route path="*" element={<div>Selecione uma página no menu.</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
