// ==========================
// SISTEMA DE GESTÃO DE ESTOQUE
// ==========================
class SimpleFormManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("REGISTROS_LIMPEZA")) || [];
        this.tableBody = document.getElementById("stock-table-body");
        this.noItemsMsg = document.getElementById("no-items-message");
        this.modal = document.getElementById("item-modal");
        this.init();
    }

    init() {
        // Botão principal de abrir o modal (Anotar Registro)
        const openModalBtn = document.getElementById("add-item-btn");
        if (openModalBtn) openModalBtn.addEventListener("click", () => this.openModal());

        // Botões de fechar/cancelar/salvar
        const saveBtn = document.getElementById("save-item-btn");
        const cancelBtn = document.getElementById("cancel-modal-btn");
        const closeBtn = document.getElementById("close-modal-btn");

        if (saveBtn) saveBtn.addEventListener("click", () => this.saveItem());
        if (cancelBtn) cancelBtn.addEventListener("click", () => this.closeModal());
        if (closeBtn) closeBtn.addEventListener("click", () => this.closeModal());

        // Clique fora do modal fecha também
        if (this.modal) {
            this.modal.addEventListener("click", e => {
                if (e.target.id === "item-modal") this.closeModal();
            });
        }

        this.renderTable();
    }

    openModal() {
        if (this.modal) {
            this.modal.classList.add("active");
            const today = new Date().toISOString().split("T")[0];
            const verificationDate = document.getElementById("verification-date");
            if (verificationDate) verificationDate.value = today;
        }
    }

    closeModal() {
        if (this.modal) this.modal.classList.remove("active");
        this.clearForm();
    }

    getFormData() {
        return {
            id: Date.now().toString(),
            clean: document.getElementById("clean").value,
            ponto: document.getElementById("ponto").value,
            verificationDate: document.getElementById("verification-date").value,
            observation: document.getElementById("observation").value.trim()
        };
    }

    saveItem() {
        const data = this.getFormData();

        if (!data.clean || !data.ponto || !data.verificationDate) {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        this.items.push(data);
        this.updateLocalStorage();
        this.renderTable();
        this.closeModal();
        alert("✅ Registro salvo com sucesso!");
    }

    deleteItem(id) {
        if (!confirm("Deseja realmente remover este registro?")) return;
        this.items = this.items.filter(i => i.id !== id);
        this.updateLocalStorage();
        this.renderTable();
    }

    updateLocalStorage() {
        localStorage.setItem("REGISTROS_LIMPEZA", JSON.stringify(this.items));
    }

    clearForm() {
        document.getElementById("item-form").reset();
    }

    renderTable() {
    if (!this.tableBody || !this.noItemsMsg) return;

    // Limpa a tabela antes de renderizar
    this.tableBody.innerHTML = ""; 

    if (this.items.length === 0) {
        this.noItemsMsg.style.display = "block";
        return;
    }

    this.noItemsMsg.style.display = "none";

    this.items.forEach(item => {
        const tr = document.createElement("tr");

        // Função auxiliar para criar células de forma segura
        const createCell = (text, className = "") => {
            const td = document.createElement("td");
            td.textContent = text || "-";
            if (className) {
                td.className = className;
            }
            return td;
        };

        // Formata a data para o padrão brasileiro
        const formattedDate = new Date(item.verificationDate + 'T00:00:00').toLocaleDateString("pt-BR");

        tr.appendChild(createCell(item.clean));
        tr.appendChild(createCell(item.ponto, "center-column"));
        tr.appendChild(createCell(formattedDate, "center-column"));
        tr.appendChild(createCell(item.observation, "right-column"));

        // Cria a célula de exclusão com o link e o evento
        const deleteCell = document.createElement("td");
        const deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.className = "delete-link";
        deleteLink.textContent = "Excluir";
        deleteLink.dataset.id = item.id;
        deleteLink.addEventListener("click", (e) => {
            e.preventDefault();
            this.deleteItem(item.id);
        });

        deleteCell.appendChild(deleteLink);
        tr.appendChild(deleteCell);

        this.tableBody.appendChild(tr);
    });
}
}

// Inicializa o sistema
document.addEventListener("DOMContentLoaded", () => {
    new SimpleFormManager();
});
// Banco de Materiais
const materiaisDB = [
    { name: "SOLVE TS 500 LTT", code: "79868", desc: "SOLVENTE PARA LIMPEZA MANUAL DE PEÇ" },
    { name: "MOLYKOTE 111", code: "832780", desc: "VALVE LUBRICANT FOR POTABLE WATER" },
    { name: "SOLVENTE, LIMPADOR CONTATOS ELE", code: "1525689", desc: "SOLVENTE, LIMPADOR CONTATOS ELE" },
    // ... restante do array permanece igual ...
];

// Popula selects
['material-name','material-id','material-desc'].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    materiaisDB.forEach(m => {
        const opt = document.createElement('option');
        if (id==='material-name') opt.value = m.name;
        if (id==='material-id') opt.value = m.code;
        if (id==='material-desc') opt.value = m.desc;
        opt.textContent = opt.value;
        select.appendChild(opt);
    });
});

// Sincroniza selects
const syncSelects = (sourceId, targetMap) => {
    const el = document.getElementById(sourceId);
    if (!el) return;
    el.addEventListener('change', () => {
        const match = materiaisDB.find(m => m[sourceId.split('-')[1]] === el.value);
        if (!match) return;
        for (const [tid, key] of Object.entries(targetMap)) {
            const tEl = document.getElementById(tid);
            if (tEl) tEl.value = match[key];
        }
    });
};

syncSelects('material-name', { 'material-id':'code', 'material-desc':'desc' });
syncSelects('material-id', { 'material-name':'name', 'material-desc':'desc' });
syncSelects('material-desc', { 'material-name':'name', 'material-id':'code' });

// Testa conexão Supabase
(async () => {
  const { data, error } = await supabase.from("GESTAO_DE_ESTOQUE").select("*").limit(1);
  if (error) console.error("❌ Erro ao conectar com Supabase:", error.message);
  else console.log("✅ Conectado ao Supabase com sucesso!");
})();

// Controla submenu da sidebar
document.querySelectorAll('.sidebar-item > .sidebar-link').forEach(link => {
  link.addEventListener('click', () => link.parentElement.classList.toggle('active'));
});

// Sidebar retrátil
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', e => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
  });
  document.addEventListener('click', e => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    }
  });
}

const closeSidebar = document.querySelector('.sidebar .close-sidebar');
if (closeSidebar && sidebar) {
  closeSidebar.addEventListener('click', e => {
    e.stopPropagation();
    sidebar.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  });
}