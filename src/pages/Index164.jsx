import React, { useEffect, useRef } from 'react'

export default function Index164() {
  const containerRef = useRef(null)
  useEffect(() => {
    // Inicializações JS específicas da página podem ir aqui.
  }, [])

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: `
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
                </a>
</li>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                    <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">ENVIADOS</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela Simplificada -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Limpo</th>
<th class="center-column">Ponto</th>
<th class="center-column">Data da Verificação</th>
<th class="right-column">Observação</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
                    Adicione um novo registro ao estoque preenchendo as informações abaixo.
                </p>
<form id="item-form">
<div class="form-section">
<h4>Informações do Registro</h4>
<div class="form-grid">
<div class="form-group">
<label for="clean">Limpo</label>
<select class="form-control" id="clean" required="">
<option value="">Selecione</option>
<option value="Sim">Sim</option>
<option value="Não">Não</option>
</select>
</div>
<div class="form-group">
<label for="ponto">Ponto</label>
<select class="form-control" id="ponto" required="">
<option value="">Selecione o ponto</option>
<option value="163">163</option>
<option value="164">164</option>
<option value="165">165</option>
</select>
</div>
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input class="form-control" id="verification-date" required="" type="date"/>
</div>
<div class="form-group form-group-full">
<label for="observation">Observação</label>
<textarea class="form-control" id="observation" placeholder="Digite uma observação..." rows="3"></textarea>
</div>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
                    </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
                    </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
` }} />
  )
}
