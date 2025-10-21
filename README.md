
# Converted React (Vite) Project — Sidebar corrigida

- Sidebar com CSS robusto em `src/app-shell.css` (evita conflitos com CSS legado).
- Layout estruturado em `.app-shell` → `aside.sidebar` + `main.main`.
- HTMLs originais viraram páginas em `src/pages`, CSS legado agregado em `src/legacy.css`, JS legado em `public/static/js`.

## Rodar
npm install
npm run dev

Se um script global for necessário, adicione em `index.html`:
<script src="/static/js/SEU_ARQUIVO.js"></script>
