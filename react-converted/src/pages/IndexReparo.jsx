import React, { useEffect, useRef } from 'react'

export default function IndexReparo() {
  const containerRef = useRef(null)
  useEffect(() => {
    // Se scripts do site original dependerem do DOM, você pode inicializá-los aqui.
    // Scripts originais foram copiados para /public/static/js (adicione-os em index.html se necessário).
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
<!-- Botão principal -->
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
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
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
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 50%;">Rota</th>
<th style="width: 25%; text-align: center;">Respostas</th>
<th style="width: 25%; text-align: center;">Anexados</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
          Nenhum item encontrado
        </div>
</div>
</div>
<!-- Paginação -->
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
<!-- Modal -->
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
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="form-group" id="image-upload-group" style="display:none;">
<label for="image-upload">Anexar imagem</label>
<input accept="image/*" id="image-upload" type="file"/>
<div id="preview" style="margin-top:10px;"></div>
</div>
</div>
</form>
</div>
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
