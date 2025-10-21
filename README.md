
# Converted React (Vite) Project

Este projeto foi gerado automaticamente a partir do zip enviado (`testes-de-testes-main.zip`).

## O que foi feito
- Estrutura criada com **Vite + React + React Router**.
- Todas as páginas `.html` do site original viraram componentes em `src/pages/*.jsx` usando `dangerouslySetInnerHTML` (conteúdo do `<body>`).
- Arquivos **CSS** foram copiados para `src/legacy_css/**` e agregados em `src/legacy.css`, que já é importado em `src/main.jsx`.
- Arquivos **JS** foram copiados para `public/static/js/**` (não executam automaticamente dentro do React). Se você ainda precisa deles globalmente, inclua `<script src="/static/js/SEU_ARQUIVO.js"></script>` em `index.html`.
- **Assets** (imagens, fontes, etc.) foram copiados para `public/**` preservando caminhos.

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie em desenvolvimento:
   ```bash
   npm run dev
   ```
3. Build de produção:
   ```bash
   npm run build
   npm run preview
   ```

## Rotas
Para cada HTML original, criamos uma rota no `react-router`. A página `index.html` vira `/`.
Veja `src/routes.js`.

## Importante sobre JS legado
O React não executa `<script>` embutido via `dangerouslySetInnerHTML`.
Se seu site dependia de scripts, há 3 caminhos:
1. **Global (rápido):** Adicione scripts necessários em `index.html` (na pasta raiz) com `<script src="/static/js/arquivo.js"></script>`.
2. **Hook (ideal):** Migre a lógica para React (ex.: `useEffect`) e importe os módulos JS diretamente em componentes.
3. **Misto:** Mantenha somente bibliotecas globais no `index.html` e mova scripts de páginas específicas para seus respectivos componentes.

## Ajustes comuns
- Caminhos de imagens/arquivos no HTML inserido devem funcionar, pois copiamos os assets para `public/`.
- CSS global já está sendo aplicado via `src/legacy.css`. Se necessário, mova regras específicas para componentes.
- Se houver erros de CSP (Content Security Policy) no projeto antigo, ajuste suas meta tags ou remova-as (normalmente Vite cuida disto).

Boa sorte! Qualquer página específica que você queira “reactificar” de verdade (sem `dangerouslySetInnerHTML`), a gente pode refatorar depois.
