import React, { useEffect, useRef } from 'react'

export default function IndexMip1() {
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
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
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
</ul>
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
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
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
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>PN</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
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
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>` }} />
  )
}
