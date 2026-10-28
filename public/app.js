const state = { statuses: [], filter: 'all' };

const els = {
  name: document.getElementById('app-name'),
  version: document.getElementById('app-version'),
  counters: document.getElementById('counters'),
  filters: document.getElementById('filters'),
  body: document.getElementById('leads-body'),
  message: document.getElementById('message')
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
}

function showMessage(text) {
  els.message.textContent = text;
  els.message.hidden = !text;
}

async function fetchJson(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Error de red');
  return data;
}

function renderCounters(allLeads) {
  els.counters.innerHTML = '';
  state.statuses.forEach((status) => {
    const total = allLeads.filter((l) => l.status === status).length;
    const card = document.createElement('div');
    card.className = 'counter';
    card.innerHTML = `<div class="count">${total}</div><div class="label">${status}</div>`;
    els.counters.appendChild(card);
  });
}

function renderFilters() {
  els.filters.innerHTML = '';
  ['all', ...state.statuses].forEach((status) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = status === 'all' ? 'todos' : status;
    btn.className = status === state.filter ? 'active' : '';
    btn.addEventListener('click', () => {
      state.filter = status;
      renderFilters();
      loadLeads();
    });
    els.filters.appendChild(btn);
  });
}

function renderLeads(list) {
  els.body.innerHTML = '';
  list.forEach((lead) => {
    const tr = document.createElement('tr');
    [lead.name, lead.company, lead.email].forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    const statusCell = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = `badge ${lead.status}`;
    badge.textContent = lead.status;
    statusCell.appendChild(badge);
    tr.appendChild(statusCell);
    const dateCell = document.createElement('td');
    dateCell.textContent = formatDate(lead.createdAt);
    tr.appendChild(dateCell);
    els.body.appendChild(tr);
  });
  showMessage(list.length === 0 ? 'No hay leads para este estado.' : '');
}

async function loadLeads() {
  try {
    const url = state.filter === 'all' ? '/api/leads' : `/api/leads?status=${encodeURIComponent(state.filter)}`;
    renderLeads(await fetchJson(url));
  } catch (err) {
    showMessage(`No se pudieron cargar los leads: ${err.message}`);
  }
}

async function init() {
  try {
    const cfg = await fetchJson('/api/config');
    state.statuses = cfg.statuses;
    els.name.textContent = cfg.appName;
    els.version.textContent = `v${cfg.version}`;
    document.title = cfg.appName;
    renderFilters();
    renderCounters(await fetchJson('/api/leads'));
    await loadLeads();
  } catch (err) {
    showMessage(`No se pudo iniciar la aplicación: ${err.message}`);
  }
}

init();
