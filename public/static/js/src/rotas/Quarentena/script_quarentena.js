/* =============
   HELPERS
   ============= */

// Lê File -> DataURL (base64)
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}

// Reduz/comprime image (opcional) -> recebe File, retorna dataURL
async function resizeImageFileToDataURL(file, maxWidth = 1024, quality = 0.7) {
  if (!file) return '';
  const dataUrl = await readFileAsDataURL(file);
  return await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const ratio = Math.min(1, maxWidth / img.width);
      const w = Math.round(img.width * ratio);
      const h = Math.round(img.height * ratio);
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      // qualidade usada apenas com 'image/jpeg'
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(dataUrl); // fallback para original
    img.src = dataUrl;
  });
}

/* ===========================
   SISTEMA DE GESTÃO DE ESTOQUE
   =========================== */
class StockManager {
  constructor() {
    this.stockItems = JSON.parse(localStorage.getItem('stockItems')) || [];
    this.currentFilter = 'ALL';
    this.currentSearch = '';
    this.editingItemId = null;
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderTable();
    this.updateItemsCount();
    const today = new Date().toISOString().split('T')[0];
    const verEl = document.getElementById('verification-date');
    if (verEl) verEl.value = today;
  }

  bindEvents() {
    const addBtn = document.getElementById('add-item-btn');
    if (addBtn) addBtn.addEventListener('click', (e) => { e.preventDefault(); this.openModal(); });

    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', (e) => { e.preventDefault(); this.closeModal(); });

    const cancelModalBtn = document.getElementById('cancel-modal-btn');
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', (e) => { e.preventDefault(); this.closeModal(); });

    const saveBtn = document.getElementById('save-item-btn');
    if (saveBtn) saveBtn.addEventListener('click', (e) => { e.preventDefault(); this.saveItem(); });

    const clearBtn = document.getElementById('clear-form-btn');
    if (clearBtn) clearBtn.addEventListener('click', (e) => { e.preventDefault(); this.clearForm(); });

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.addEventListener('input', e => {
      this.currentSearch = e.target.value;
      this.renderTable();
    });

    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) statusFilter.addEventListener('change', e => {
      this.currentFilter = e.target.value;
      this.renderTable();
    });

    const itemForm = document.getElementById('item-form');
    if (itemForm) itemForm.addEventListener('input', () => this.validateForm());

    const itemModal = document.getElementById('item-modal');
    if (itemModal) itemModal.addEventListener('click', e => {
      if (e.target.id === 'item-modal') this.closeModal();
    });

    const materialNameInput = document.getElementById('material-name');
    if (materialNameInput) {
      materialNameInput.addEventListener('input', e => {
        const matId = document.getElementById('material-id');
        if (matId && !matId.value && e.target.value) {
          matId.value = `MAT-2024-${Date.now().toString().slice(-6)}`;
        }
      });
    }
  }

  openModal(itemId = null) {
    this.editingItemId = itemId;
    const modal = document.getElementById('item-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (!modal) return;

    if (itemId) {
      if (modalTitle) modalTitle.textContent = 'Editar Item';
      if (modalDescription) modalDescription.textContent = 'Edite as informações do item selecionado.';
      this.loadItemData(itemId);
    } else {
      if (modalTitle) modalTitle.textContent = 'Anotar Novo Registro';
      if (modalDescription) modalDescription.textContent = 'Adicione um novo registro ao estoque preenchendo as informações abaixo.';
      this.clearForm();
      const today = new Date().toISOString().split('T')[0];
      const verEl = document.getElementById('verification-date');
      if (verEl) verEl.value = today;
    }

    modal.classList.add('active');
    this.validateForm();
  }

  closeModal() {
    const modal = document.getElementById('item-modal');
    if (modal) modal.classList.remove('active');
    this.editingItemId = null;
    this.clearForm();
  }

  loadItemData(itemId) {
    const item = this.stockItems.find(i => i.id === itemId);
    if (!item) return;

    const map = {
      'material-name': item.pn,
      'material-id': item.ecode,
      'material-desc': item.descricao,
      'quantity': item.quantidade,
      'status': item.status,
      'location': item.localizacao_no_estoque,
      'discard-reason': item.motivo_de_descarte,
      'verification-date': item.data_de_verificacao,
      'expiry-date': item.data_de_validade,
      'responsible': item.responsavel_pelo_registro
    };

    Object.keys(map).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = map[id] ?? '';
    });

    // Preview do anexo de forma segura
    const preview = document.getElementById('preview');
    if (preview) {
        preview.innerHTML = ''; // Limpa o conteúdo anterior
        if (item.anexo) {
            const img = document.createElement('img');
            img.src = item.anexo;
            img.alt = 'anexo';
            img.style.cssText = "max-width:120px; height:auto; border:1px solid #ddd; padding:4px; border-radius:4px;";
            preview.appendChild(img);
        }
    }

    const imageGroup = document.getElementById('image-upload-group');
    const hasImage = document.getElementById('has-image');
    if (item.anexo) {
        if (imageGroup) imageGroup.style.display = 'block';
        if (hasImage) hasImage.value = 'Sim';
    } else {
        if (imageGroup) imageGroup.style.display = 'none';
        if (hasImage) hasImage.value = 'Não';
    }
  }

  clearForm() {
    const form = document.getElementById('item-form');
    if (form) form.reset();

    const imageInput = document.getElementById('image-upload');
    const preview = document.getElementById('preview');
    const imageGroup = document.getElementById('image-upload-group');
    const hasImage = document.getElementById('has-image');

    if (imageInput) imageInput.value = '';
    if (preview) preview.innerHTML = '';
    if (imageGroup) imageGroup.style.display = 'none';
    if (hasImage) hasImage.value = 'Não';

    this.editingItemId = null;
    this.validateForm();
  }

  validateForm() {
    const saveBtn = document.getElementById('save-item-btn');
    if (!saveBtn) return;

    const requiredFieldIds = [
      'material-name', 'material-id', 'quantity', 'status',
      'location', 'verification-date', 'responsible'
    ];

    const isFormValid = requiredFieldIds.every(id => {
      const field = document.getElementById(id);
      return field && field.value.trim() !== '';
    });

    saveBtn.disabled = !isFormValid;
  }

  async saveItem() {
    const getVal = id => {
      const el = document.getElementById(id);
      return el ? el.value : '';
    };

    let imageData = '';
    const imageInput = document.getElementById('image-upload');
    if (imageInput && imageInput.files && imageInput.files[0]) {
      try {
        imageData = await resizeImageFileToDataURL(imageInput.files[0], 1024, 0.7);
      } catch (err) {
        console.warn('Erro ao processar imagem, usando original:', err);
        imageData = await readFileAsDataURL(imageInput.files[0]).catch(() => '');
      }
    } else if (this.editingItemId) {
        // Mantém a imagem antiga se nenhuma nova for enviada durante a edição
        const currentItem = this.stockItems.find(i => i.id === this.editingItemId);
        imageData = currentItem ? currentItem.anexo : '';
    }

    const formData = {
      pn: getVal('material-name'),
      ecode: getVal('material-id'),
      descricao: getVal('material-desc'),
      quantidade: parseInt(getVal('quantity')) || 0,
      status: getVal('status'),
      localizacao_no_estoque: getVal('location'),
      motivo_de_descarte: getVal('discard-reason'),
      data_de_verificacao: getVal('verification-date'),
      data_de_validade: getVal('expiry-date'),
      responsavel_pelo_registro: getVal('responsible'),
      anexo: imageData
    };

    try {
      if (window.supabase) { // Verifica se a conexão com Supabase existe
        try {
          if (this.editingItemId) {
            await supabase.from("GESTAO_DE_ESTOQUE").update(formData).eq("id", this.editingItemId);
          } else {
            await supabase.from("GESTAO_DE_ESTOQUE").insert([formData]);
          }
        } catch (supErr) {
          console.warn('Falha ao sincronizar com Supabase (ignorado):', supErr?.message ?? supErr);
        }
      }

      if (this.editingItemId) {
        const idx = this.stockItems.findIndex(i => i.id === this.editingItemId);
        if (idx !== -1) {
            // Atualiza o item mantendo o ID original
            this.stockItems[idx] = { ...this.stockItems[idx], ...formData };
        }
      } else {
        const newId = Date.now().toString();
        this.stockItems.push({ id: newId, ...formData });
      }

      localStorage.setItem('stockItems', JSON.stringify(this.stockItems));
      this.renderTable();
      this.closeModal();
      alert('✅ Registro salvo com sucesso!');

    } catch (err) {
      console.error('Erro ao salvar item:', err);
      alert('Erro ao salvar o item.');
    }
  }

  deleteItem(itemId) {
    if (!confirm('Deseja realmente remover este item?')) return;
    this.stockItems = this.stockItems.filter(i => i.id !== itemId);
    localStorage.setItem('stockItems', JSON.stringify(this.stockItems));
    
    if (window.supabase) {
      try {
        supabase.from("GESTAO_DE_ESTOQUE").delete().eq("id", itemId);
      } catch (err) { console.warn("Falha ao deletar no Supabase (ignorado)"); }
    }
    this.renderTable();
    this.updateItemsCount();
  }

  getFilteredItems() {
    let filtered = [...this.stockItems];
    if (this.currentFilter && this.currentFilter !== 'ALL') {
      filtered = filtered.filter(i => i.status === this.currentFilter);
    }
    if (this.currentSearch) {
      const term = this.currentSearch.toLowerCase();
      filtered = filtered.filter(i =>
        (i.pn && i.pn.toLowerCase().includes(term)) ||
        (i.ecode && i.ecode.toLowerCase().includes(term)) ||
        (i.responsavel_pelo_registro && i.responsavel_pelo_registro.toLowerCase().includes(term))
      );
    }
    return filtered;
  }

  renderTable() {
    const tbody = document.getElementById('stock-table-body');
    const noItemsMsg = document.getElementById('no-items-message');
    if (!tbody) return;

    const filtered = this.getFilteredItems();
    tbody.innerHTML = ''; // Limpar a tabela é seguro

    if (!filtered.length) {
        if (noItemsMsg) noItemsMsg.style.display = 'block';
        this.updateItemsCount();
        return;
    }

    if (noItemsMsg) noItemsMsg.style.display = 'none';

    filtered.forEach(item => {
        const row = document.createElement('tr');

        // --- Célula 1: Nome + Miniatura (Segura) ---
        const nomeCell = document.createElement('td');
        const flexContainer = document.createElement('div');
        flexContainer.style.cssText = "display:flex; align-items:center; gap:8px;";

        if (item.anexo) {
            const img = document.createElement('img');
            img.src = item.anexo;
            img.alt = "thumb";
            img.style.cssText = "width:56px; height:40px; object-fit:cover; border-radius:4px; border:1px solid #ddd;";
            flexContainer.appendChild(img);
        }

        const textContainer = document.createElement('div');
        textContainer.style.cssText = "white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:320px;";
        textContainer.textContent = item.pn || '-';
        flexContainer.appendChild(textContainer);
        nomeCell.appendChild(flexContainer);

        // --- Célula 2: Respostas (Segura) ---
        const respostasCell = document.createElement('td');
        respostasCell.style.textAlign = 'center';
        respostasCell.textContent = item.quantidade ?? '-';

        // --- Célula 3: Anexados (Segura) ---
        const anexadosCell = document.createElement('td');
        anexadosCell.style.textAlign = 'center';
        if (item.anexo) {
            const link = document.createElement('a');
            link.href = item.anexo;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.title = 'Abrir anexo';
            
            const icon = document.createElement('i');
            icon.className = 'fas fa-paperclip';
            link.appendChild(icon);
            anexadosCell.appendChild(link);
        } else {
            anexadosCell.textContent = '-';
        }

        row.appendChild(nomeCell);
        row.appendChild(respostasCell);
        row.appendChild(anexadosCell);
        
        row.addEventListener('click', () => this.openModal(item.id));
        row.style.cursor = 'pointer';

        tbody.appendChild(row);
    });

    this.updateItemsCount();
  }

  getStatusClass(status) {
    const classes = { 'OK': 'status-ok', 'EM FALTA': 'status-falta', 'VENCIDO': 'status-vencido', 'EM DESCARTE': 'status-descarte' };
    return classes[status] || '';
  }

  updateItemsCount() {
    const itemsCountEl = document.getElementById('items-count');
    if (itemsCountEl) itemsCountEl.textContent = `Exibindo ${this.getFilteredItems().length} de ${this.stockItems.length} itens`;

    const elReg = document.getElementById("registered-count");
    const elNot = document.getElementById("not-registered-count");
    if (elReg) elReg.textContent = this.stockItems.length;
    if (elNot) elNot.textContent = 0;
  }
}

/* ===========================
   BANCO DE MATERIAIS (dados)
   =========================== */
const materiaisDB = [
  { name: "SOLVE TS 500 LTT", code: "79868", desc: "SOLVENTE PARA LIMPEZA MANUAL DE PEÇ" },
  { name: "MOLYKOTE 111", code: "832780", desc: "VALVE LUBRICANT FOR POTABLE WATER" },
  { name: "SOLVENTE, LIMPADOR CONTATOS ELE", code: "1525689", desc: "SOLVENTE, LIMPADOR CONTATOS ELE" },
  // ... (restante do DB omitido para brevidade)
];

/* ===========================
   INICIALIZAÇÃO APÓS DOM
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  // Popula selects
  ['material-name','material-id','material-desc'].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    materiaisDB.forEach(m => {
      const opt = document.createElement('option');
      if (id === 'material-name') opt.value = m.name;
      else if (id === 'material-id') opt.value = m.code;
      else opt.value = m.desc;
      opt.textContent = opt.value;
      select.appendChild(opt);
    });
  });

  // Sincroniza selects
  const matName = document.getElementById('material-name');
  const matId = document.getElementById('material-id');
  const matDesc = document.getElementById('material-desc');

  if (matName && matId && matDesc) {
    matName.addEventListener('change', () => {
      const match = materiaisDB.find(m => m.name === matName.value);
      if (match) { matId.value = match.code; matDesc.value = match.desc; }
    });
    matId.addEventListener('change', () => {
      const match = materiaisDB.find(m => m.code === matId.value);
      if (match) { matName.value = match.name; matDesc.value = match.desc; }
    });
    matDesc.addEventListener('change', () => {
      const match = materiaisDB.find(m => m.desc === matDesc.value);
      if (match) { matName.value = match.name; matId.value = match.code; }
    });
  }

  // Inicializa StockManager
  window.stockManager = new StockManager();

  // Teste de conexão (silencioso e opcional)
  if (window.supabase) {
    (async () => {
      try {
        const { error } = await supabase.from("GESTAO_DE_ESTOQUE").select("id").limit(1);
        if (error) console.warn("❌ Falha na conexão com Supabase:", error.message);
        else console.log("✅ Conectado ao Supabase com sucesso!");
      } catch (err) {
        console.warn("❌ Falha geral ao testar Supabase (offline/CORS?):", err.message || err);
      }
    })();
  }

  // Controla submenu da sidebar
  document.querySelectorAll('.sidebar-item > .sidebar-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      link.parentElement.classList.toggle('active');
    });
  });

  // Sidebar retrátil
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const closeSidebar = document.querySelector('.sidebar .close-sidebar');

  if (sidebar && menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
      document.body.classList.toggle('sidebar-open');
    });

    if (closeSidebar) {
      closeSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
      });
    }

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
      }
    });
  }

  // Toggle e preview de imagem
  const hasImage = document.getElementById('has-image');
  const imageGroup = document.getElementById('image-upload-group');
  const imageInput = document.getElementById('image-upload');
  const preview = document.getElementById('preview');

  if (hasImage && imageGroup) {
    hasImage.addEventListener('change', () => {
      imageGroup.style.display = hasImage.value === 'Sim' ? 'block' : 'none';
      if (preview) preview.innerHTML = '';
    });
  }

  if (imageInput && preview) {
    imageInput.addEventListener('change', () => {
      const file = imageInput.files && imageInput.files[0];
      if (!file) {
        preview.innerHTML = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        preview.innerHTML = ''; // Limpa antes de adicionar
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.alt = 'preview';
        img.style.cssText = "max-width:100%; height:auto; border:1px solid #ddd; padding:4px; border-radius:4px;";
        preview.appendChild(img);
      };
      reader.onerror = () => {
        console.error("Erro ao ler o arquivo de imagem.");
        preview.innerHTML = '<span>Erro ao carregar imagem</span>';
      };
      reader.readAsDataURL(file);
    });
  }
});