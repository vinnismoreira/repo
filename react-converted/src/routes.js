import React from 'react'
import Index from './pages/Index.jsx'
import IndexFreezer2 from './pages/IndexFreezer2.jsx'
import IndexFreezer3 from './pages/IndexFreezer3.jsx'
import Login from './pages/Login.jsx'
import IndexMip1 from './pages/IndexMip1.jsx'
import IndexMip2 from './pages/IndexMip2.jsx'
import IndexMip3 from './pages/IndexMip3.jsx'
import IndexMip4 from './pages/IndexMip4.jsx'
import Index163 from './pages/Index163.jsx'
import Index164 from './pages/Index164.jsx'
import Index165 from './pages/Index165.jsx'
import IndexDm from './pages/IndexDm.jsx'
import IndexQuarentena from './pages/IndexQuarentena.jsx'
import IndexReparo from './pages/IndexReparo.jsx'
import IndexSc from './pages/IndexSc.jsx'
import IndexSucata from './pages/IndexSucata.jsx'

const routes = [
  { path: '/', Component: Index, label: 'index.html' },
  { path: '/src/freezer/freezer_2/index_freezer_2', Component: IndexFreezer2, label: 'index_freezer_2.html' },
  { path: '/src/freezer/freezer_3/index_freezer_3', Component: IndexFreezer3, label: 'index_freezer_3.html' },
  { path: '/src/login/login', Component: Login, label: 'login.html' },
  { path: '/src/mip/mip_1/index_mip_1', Component: IndexMip1, label: 'index_mip_1.html' },
  { path: '/src/mip/mip_2/index_mip_2', Component: IndexMip2, label: 'index_mip_2.html' },
  { path: '/src/mip/mip_3/index_mip_3', Component: IndexMip3, label: 'index_mip_3.html' },
  { path: '/src/mip/mip_4/index_mip_4', Component: IndexMip4, label: 'index_mip_4.html' },
  { path: '/src/pontos/163/index_163', Component: Index163, label: 'index_163.html' },
  { path: '/src/pontos/164/index_164', Component: Index164, label: 'index_164.html' },
  { path: '/src/pontos/165/index_165', Component: Index165, label: 'index_165.html' },
  { path: '/src/rotas/DM/index_dm', Component: IndexDm, label: 'index_dm.html' },
  { path: '/src/rotas/Quarentena/index_quarentena', Component: IndexQuarentena, label: 'index_quarentena.html' },
  { path: '/src/rotas/Reparo/index_reparo', Component: IndexReparo, label: 'index_reparo.html' },
  { path: '/src/rotas/Sala-climatizada/index_sc', Component: IndexSc, label: 'index_sc.html' },
  { path: '/src/rotas/Sucata/index_sucata', Component: IndexSucata, label: 'index_sucata.html' },
]

export default routes
