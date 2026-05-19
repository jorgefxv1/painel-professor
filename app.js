/* ===== STATE ===== */
let currentTheme = localStorage.getItem('jgp_theme') || 'dark';
let currentPage = { type: 'home', discId: null, aulaNum: null };
let focusMode = false;
let projectionMode = false;
let searchQuery = '';

const sectionOpen = {};
DISCIPLINAS.forEach(d => sectionOpen[d.id] = false);

/* ===== CONSTANTS ===== */
const TODAY_COL = { 1:'seg', 2:'ter', 3:'qua', 4:'qui', 5:'sex' }[new Date().getDay()] || null;
const SCHED_TO_DISC = { 'DL': 'dev-local', 'UC I': 'uc1', 'UC II': 'uc2', 'UC III': 'uc3' };
const DISC_COLORS   = { 'DL': '#fbbf24', 'UC I': '#818cf8', 'UC II': '#34d399', 'UC III': '#f472b6' };
const DAY_KEYS      = ['seg','ter','qua','qui','sex'];
const DAY_NAMES     = ['Segunda','Terça','Quarta','Quinta','Sexta'];

const SCHEDULE_ROWS = [
  { time: '07:40 – 08:30', label: '1ª', seg: '', ter: '', qua: '', qui: '2º ano B - UC II', sex: '' },
  { time: '08:30 – 09:20', label: '2ª', seg: '', ter: '', qua: '', qui: '', sex: '' },
  { time: '09:30 – 10:20', label: '3ª', seg: '', ter: '2º ano A - UC I', qua: '', qui: '', sex: '2º ano A - UC III' },
  { time: '10:20 – 11:10', label: '4ª', seg: '2º ano A - DL', ter: '', qua: '', qui: '2º ano A - UC I', sex: '' },
  { lunch: true },
  { time: '12:30 – 13:20', label: '5ª', seg: '2º ano A - DL', ter: '2º ano A - UC I', qua: '2º ano B - UC I', qui: '2º ano A - UC II', sex: '2º ano B - UC III' },
  { time: '13:20 – 14:10', label: '6ª', seg: '2º ano B - DL', ter: '2º ano B - UC I', qua: '2º ano B - UC I', qui: '', sex: '' },
  { time: '14:20 – 15:10', label: '7ª', seg: '2º ano B - DL', ter: '2º ano A - UC I', qua: '2º ano B - UC I', qui: '2º ano B - UC II', sex: '2º ano A - UC III' },
  { time: '15:10 – 16:00', label: '8ª', seg: '', ter: '', qua: '', qui: '2º ano A - UC II', sex: '2º ano B - UC III' },
];

const CHECKLIST_ITEMS = [
  'Material/slides preparados',
  'Exercícios revisados',
  'Link da prática verificado',
  'Projetor/quadro testado'
];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIco').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  renderSidebar();
  loadFromHash();
  window.addEventListener('hashchange', loadFromHash);
});

function loadFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const parts = hash.split('/');
  if (parts[0] === 'home') navigate('home');
  else if (parts[1] === 'avaliacao') navigate('avaliacao', parts[0]);
  else if (parts[1] === 'aula' && parts[2]) navigate('aula', parts[0], parseInt(parts[2]));
  else navigate('home');
}

/* ===== NAVIGATION ===== */
function navigate(type, discId = null, aulaNum = null) {
  currentPage = { type, discId, aulaNum };
  const hash = type === 'home' ? 'home'
    : type === 'avaliacao' ? `${discId}/avaliacao`
    : `${discId}/aula/${aulaNum}`;

  if (window.location.hash !== '#' + hash) {
    window.location.hash = hash;
    return;
  }

  if (discId && !sectionOpen[discId]) {
    sectionOpen[discId] = true;
    renderSidebar();
  }

  updateActiveNav();
  renderMain();
  document.querySelector('.main').scrollTop = 0;
  // close sidebar on mobile after navigation
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebar.classList.contains('open')) toggleSidebar();
}

function updateActiveNav() {
  document.querySelectorAll('.nav-inicio, .nav-avaliacao, .nav-aula-item').forEach(el => el.classList.remove('active'));
  if (currentPage.type === 'home') {
    document.querySelector('.nav-inicio')?.classList.add('active');
  } else if (currentPage.type === 'avaliacao') {
    document.querySelector(`[data-nav-av="${currentPage.discId}"]`)?.classList.add('active');
  } else {
    document.querySelector(`[data-nav-aula="${currentPage.discId}-${currentPage.aulaNum}"]`)?.classList.add('active');
  }
}

/* ===== FOCUS MODE ===== */
/* ===== MOBILE SIDEBAR ===== */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', open);
}

function toggleFocus() {
  focusMode = !focusMode;
  document.querySelector('.app').classList.toggle('focus-mode', focusMode);
  const btn = document.getElementById('focus-btn');
  if (btn) btn.textContent = focusMode ? '⊠ Sair do Foco' : '⊡ Modo Foco';
}

/* ===== PROJECTION MODE ===== */
function toggleProjection() {
  projectionMode = !projectionMode;
  document.querySelector('.app').classList.toggle('projection-mode', projectionMode);
  const btn = document.getElementById('proj-btn');
  if (btn) btn.textContent = projectionMode ? '⊠ Sair da Projeção' : '📽️ Projeção';
}

/* ===== STATUS ===== */
function getAulaStatus(discId, aulaNum) {
  return localStorage.getItem(`jgp_status_${discId}_${aulaNum}`) || 'planejada';
}
function setAulaStatus(discId, aulaNum, status) {
  const prev = getAulaStatus(discId, aulaNum);
  localStorage.setItem(`jgp_status_${discId}_${aulaNum}`, status);
  renderSidebar();
  renderMain();
  if (status === 'concluida' && prev !== 'concluida') {
    showReflexaoModal(discId, aulaNum);
  }
}

/* ===== REFLEXÃO ===== */
function showReflexaoModal(discId, aulaNum) {
  document.getElementById('reflexao-modal')?.remove();
  const key = `jgp_ref_${discId}_${aulaNum}`;
  const saved = JSON.parse(localStorage.getItem(key) || '{"funcionou":"","mudaria":""}');
  const el = document.createElement('div');
  el.className = 'ref-overlay';
  el.id = 'reflexao-modal';
  el.innerHTML = `
    <div class="ref-modal">
      <div class="ref-modal-header">
        <span>💬 Reflexão — Aula concluída</span>
        <button class="ref-close" onclick="document.getElementById('reflexao-modal').remove()">✕</button>
      </div>
      <p class="ref-modal-sub">Opcional · Salvo automaticamente</p>
      <div class="ref-field">
        <label class="ref-label">✅ O que funcionou?</label>
        <textarea class="ref-textarea" id="ref-funcionou" placeholder="O que deu certo nessa aula…">${saved.funcionou}</textarea>
      </div>
      <div class="ref-field">
        <label class="ref-label">🔄 O que mudaria?</label>
        <textarea class="ref-textarea" id="ref-mudaria" placeholder="O que faria diferente…">${saved.mudaria}</textarea>
      </div>
      <div class="ref-actions">
        <button class="ref-btn-skip" onclick="document.getElementById('reflexao-modal').remove()">Pular</button>
        <button class="ref-btn-save" onclick="saveReflexao('${discId}',${aulaNum})">Salvar Reflexão</button>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => { if (e.target === el) el.remove(); });
}

function saveReflexao(discId, aulaNum) {
  const key = `jgp_ref_${discId}_${aulaNum}`;
  const funcionou = document.getElementById('ref-funcionou')?.value || '';
  const mudaria   = document.getElementById('ref-mudaria')?.value || '';
  localStorage.setItem(key, JSON.stringify({ funcionou, mudaria }));
  document.getElementById('reflexao-modal')?.remove();
  renderMain();
}

function reflexaoBlock(discId, aulaNum) {
  const key = `jgp_ref_${discId}_${aulaNum}`;
  const saved = JSON.parse(localStorage.getItem(key) || 'null');
  const status = getAulaStatus(discId, aulaNum);
  if (status !== 'concluida') return '';
  const hasSaved = saved && (saved.funcionou || saved.mudaria);
  return `
    <div class="card card-reflexao-saved">
      <div class="ref-saved-header">
        <div class="card-lbl" style="margin:0">💬 Reflexão da Aula</div>
        <button class="ref-edit-btn" onclick="showReflexaoModal('${discId}',${aulaNum})">
          ${hasSaved ? 'Editar' : '+ Adicionar'}
        </button>
      </div>
      ${hasSaved ? `
        ${saved.funcionou ? `<div class="ref-saved-block"><span class="ref-saved-label">✅ Funcionou</span><p>${saved.funcionou}</p></div>` : ''}
        ${saved.mudaria   ? `<div class="ref-saved-block"><span class="ref-saved-label">🔄 Mudaria</span><p>${saved.mudaria}</p></div>` : ''}
      ` : '<p style="font-size:.82rem;color:var(--text-muted)">Nenhuma reflexão registrada ainda.</p>'}
    </div>`;
}

/* ===== PROGRESS ===== */
function getDiscProgress(disc) {
  const total = disc.aulas.length;
  const done  = disc.aulas.filter(a => getAulaStatus(disc.id, a.num) === 'concluida').length;
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}
function getTotalProgress() {
  const total = DISCIPLINAS.reduce((s, d) => s + d.aulas.length, 0);
  const done  = DISCIPLINAS.reduce((s, d) => s + d.aulas.filter(a => getAulaStatus(d.id, a.num) === 'concluida').length, 0);
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

/* ===== BIMESTRE STATS (semana + pace) ===== */
function getBimestreStats() {
  const allAulas = DISCIPLINAS.flatMap(d => d.aulas.map(a => ({ ...a, discId: d.id })));
  const totalWeeks = Math.max(...allAulas.map(a => a.semana));
  const done = allAulas.filter(a => getAulaStatus(a.discId, a.num) === 'concluida');
  const currentWeek = done.length > 0 ? Math.max(...done.map(a => a.semana)) : 0;
  const total = allAulas.length;
  const doneCount = done.length;
  const expected = currentWeek > 0 ? Math.round((currentWeek / totalWeeks) * total) : 0;
  const delta = doneCount - expected;
  return { currentWeek, totalWeeks, doneCount, total, delta };
}

/* ===== TODAY'S CLASSES ===== */
function getTodayClasses() {
  if (!TODAY_COL) return [];
  return SCHEDULE_ROWS
    .filter(r => !r.lunch && r[TODAY_COL])
    .map(r => {
      const text = r[TODAY_COL];
      const [turma, discKey] = text.split(' - ').map(s => s.trim());
      const disc = getDisc(SCHED_TO_DISC[discKey]);
      const nextAula = disc ? disc.aulas.find(a => getAulaStatus(disc.id, a.num) !== 'concluida') : null;
      const color = DISC_COLORS[discKey] || '#818cf8';
      return { time: r.time, turma, discKey, disc, nextAula, color };
    });
}

/* ===== CHECKLIST ===== */
function getChecklist(discId, aulaNum) {
  const saved = localStorage.getItem(`jgp_check_${discId}_${aulaNum}`);
  return saved ? JSON.parse(saved) : new Array(CHECKLIST_ITEMS.length).fill(false);
}
function toggleCheck(discId, aulaNum, idx) {
  const checks = getChecklist(discId, aulaNum);
  checks[idx] = !checks[idx];
  localStorage.setItem(`jgp_check_${discId}_${aulaNum}`, JSON.stringify(checks));
  const el = document.getElementById(`chk-${discId}-${aulaNum}-${idx}`);
  if (el) el.classList.toggle('checked', checks[idx]);
  const counter = document.getElementById(`chk-count-${discId}-${aulaNum}`);
  if (counter) counter.textContent = `${checks.filter(Boolean).length}/${CHECKLIST_ITEMS.length}`;
}
function checklistBlock(discId, aulaNum) {
  const checks = getChecklist(discId, aulaNum);
  return `
    <div class="card card-checklist">
      <div class="checklist-header">
        <div class="card-lbl" style="margin:0">✅ Checklist de Preparação</div>
        <span class="checklist-count" id="chk-count-${discId}-${aulaNum}">${checks.filter(Boolean).length}/${CHECKLIST_ITEMS.length}</span>
      </div>
      <div class="check-list">
        ${CHECKLIST_ITEMS.map((item, i) => `
          <div class="check-item ${checks[i] ? 'checked' : ''}" id="chk-${discId}-${aulaNum}-${i}"
               onclick="toggleCheck('${discId}',${aulaNum},${i})">
            <span class="check-box"></span>
            <span class="check-label">${item}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ===== PRINT ===== */
function printAula() { window.print(); }

/* ===== SEARCH ===== */
function filterNav(q) {
  searchQuery = q;
  renderSidebar();
}

/* ===== SIDEBAR ===== */
function toggleSection(discId) {
  sectionOpen[discId] = !sectionOpen[discId];
  const list    = document.getElementById('slist-' + discId);
  const chevron = document.getElementById('chev-' + discId);
  if (!list || !chevron) return;
  list.style.display = sectionOpen[discId] ? 'block' : 'none';
  chevron.className  = 'disc-chevron' + (sectionOpen[discId] ? ' open' : '');
}

function renderSidebar() {
  const q = searchQuery.toLowerCase().trim();
  document.getElementById('nav-discs').innerHTML = DISCIPLINAS.map(disc => {
    const aulas = q
      ? disc.aulas.filter(a => a.titulo.toLowerCase().includes(q) || `aula ${pad(a.num)}`.includes(q))
      : disc.aulas;
    if (q && aulas.length === 0) return '';
    const isOpen = q ? true : sectionOpen[disc.id];
    return `
      <div class="nav-disc">
        <div class="nav-disc-header" onclick="toggleSection('${disc.id}')">
          <span class="disc-dot" style="background:${disc.cor}"></span>
          <span class="disc-header-label">${disc.label}</span>
          <span class="disc-chevron${isOpen ? ' open' : ''}" id="chev-${disc.id}">›</span>
        </div>
        <div class="nav-disc-list" id="slist-${disc.id}" style="display:${isOpen ? 'block' : 'none'}">
          ${!q ? `<div class="nav-avaliacao" data-nav-av="${disc.id}" onclick="navigate('avaliacao','${disc.id}')">
            <span>📋</span> Avaliação &amp; Cronograma
          </div>` : ''}
          ${aulas.map(a => {
            const status = getAulaStatus(disc.id, a.num);
            return `
              <div class="nav-aula-item ${a.isOficina ? 'is-oficina' : ''} ${status === 'concluida' ? 'is-done' : ''}"
                   data-nav-aula="${disc.id}-${a.num}"
                   onclick="navigate('aula','${disc.id}',${a.num})">
                <span class="aula-ico">${a.emoji}</span>
                <span class="aula-txt">Aula ${pad(a.num)} · ${a.titulo}</span>
                ${status === 'concluida' ? '<span class="aula-status-dot concluida"></span>'
                  : status === 'dada'    ? '<span class="aula-status-dot dada"></span>' : ''}
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }).join('');
  updateActiveNav();
}

/* ===== MAIN RENDER ===== */
function renderMain() {
  const el = document.getElementById('page-content');
  if (currentPage.type === 'home') { el.innerHTML = renderHome(); return; }
  const disc = getDisc(currentPage.discId);
  if (!disc) { el.innerHTML = '<p style="color:var(--text-muted);padding:40px">Página não encontrada.</p>'; return; }
  if (currentPage.type === 'avaliacao') el.innerHTML = renderAvaliacao(disc);
  else {
    const aula = disc.aulas.find(a => a.num === currentPage.aulaNum);
    el.innerHTML = aula ? renderAula(disc, aula) : '<p style="color:var(--text-muted);padding:40px">Aula não encontrada.</p>';
  }
}

function getDisc(id) { return DISCIPLINAS.find(d => d.id === id); }
function pad(n) { return String(n).padStart(2, '0'); }

/* ===== HELPERS ===== */
function discStyle(disc) { return `--disc-accent:${disc.cor}`; }

function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ===== NOTES ===== */
function noteKey(discId, sub) { return `jgp_note_${discId}_${sub}`; }
function loadNote(key) { return localStorage.getItem(key) || ''; }
function saveNote(key) {
  const ta = document.getElementById('ta-' + key);
  if (!ta) return;
  localStorage.setItem(key, ta.value);
  const badge = document.getElementById('badge-' + key);
  if (badge) { badge.style.opacity = '1'; setTimeout(() => { badge.style.opacity = '0'; }, 2000); }
}
function notesBlock(discId, sub) {
  const key   = noteKey(discId, sub);
  const saved = loadNote(key);
  return `
    <div class="sec-divider">
      <span class="sec-divider-txt">Minhas Anotações</span>
      <div class="sec-divider-line"></div>
    </div>
    <div class="card card-notes">
      <div class="notes-header">
        <div class="card-lbl" style="margin:0">📝 Anotações — salvas automaticamente</div>
        <span class="save-badge" id="badge-${key}">✓ Salvo</span>
      </div>
      <textarea class="notes-textarea" id="ta-${key}"
                placeholder="Digite suas anotações aqui…"
                oninput="saveNote('${key}')">${saved}</textarea>
    </div>`;
}

/* ===== SCHEDULE TABLE ===== */
function schedCell(text, isToday) {
  const tdClass = `sched-td${isToday ? ' col-today' : ''}${!text ? ' sched-empty' : ''}`;
  if (!text) return `<td class="${tdClass}"></td>`;
  const match = Object.keys(DISC_COLORS).find(k => text.includes(k));
  const color = match ? DISC_COLORS[match] : '#9899a6';
  const turma = text.split(' - ')[0].trim();
  const disc  = text.split(' - ')[1]?.trim() || '';
  return `<td class="${tdClass}">
    <div class="sched-cell" style="--sched-c:${color}">
      <span class="sched-turma">${turma}</span>
      <span class="sched-disc">${disc}</span>
    </div>
  </td>`;
}

function renderScheduleRows() {
  return SCHEDULE_ROWS.map(r => {
    if (r.lunch) return `<tr><td colspan="6" class="sched-lunch">☀️ Almoço</td></tr>`;
    return `<tr>
      <td class="sched-td sched-time">
        <span class="sched-num">${r.label}ª</span>
        <span class="sched-hour">${r.time}</span>
      </td>
      ${DAY_KEYS.map(d => schedCell(r[d], d === TODAY_COL)).join('')}
    </tr>`;
  }).join('');
}

/* ===== HOME ===== */
function renderHome() {
  const { total, done, pct } = getTotalProgress();
  const stats       = getBimestreStats();
  const todayItems  = getTodayClasses();
  const dayName     = { seg:'Segunda',ter:'Terça',qua:'Quarta',qui:'Quinta',sex:'Sexta' }[TODAY_COL] || null;

  const paceColor = stats.delta >= 0 ? '#34d399' : '#f87171';
  const paceIcon  = stats.delta >= 0 ? '✓' : '⚠️';
  const paceText  = stats.delta === 0 ? 'No ritmo' : stats.delta > 0
    ? `${stats.delta} aula${stats.delta>1?'s':''} adiantado`
    : `${Math.abs(stats.delta)} aula${Math.abs(stats.delta)>1?'s':''} atrasado`;

  return `
    <div style="${discStyle({cor:'#818cf8'})}">
      <p class="page-title">Olá, Professor Jorge 👋</p>
      <p class="page-sub">2º Ano Integral · JGP · 1º Bimestre 2026 · 10 aulas/semana em 4 disciplinas</p>

      ${todayItems.length > 0 ? `
        <div class="today-card">
          <div class="today-card-header">
            <span class="today-card-title">📅 Aulas de Hoje — ${dayName}</span>
            <span class="today-card-count">${todayItems.length} aulas</span>
          </div>
          <div class="today-list">
            ${todayItems.map(item => `
              <div class="today-item" style="--tc:${item.color}"
                   onclick="${item.disc && item.nextAula ? `navigate('aula','${item.disc.id}',${item.nextAula.num})` : ''}">
                <span class="today-time">${item.time}</span>
                <div class="today-info">
                  <span class="today-turma">${item.turma}</span>
                  <span class="today-disc" style="color:${item.color}">${item.discKey}</span>
                </div>
                ${item.nextAula ? `
                  <div class="today-next">
                    <span class="today-next-label">Próxima aula</span>
                    <span class="today-next-titulo">${item.nextAula.emoji} ${item.nextAula.titulo}</span>
                  </div>
                ` : '<span class="today-done-tag">✓ Concluída</span>'}
              </div>`).join('')}
          </div>
        </div>` : ''}

      <div class="global-progress-card">
        <div class="global-progress-top">
          <span class="global-progress-label">Progresso do Bimestre</span>
          <div style="display:flex;align-items:center;gap:14px">
            ${stats.currentWeek > 0 ? `
              <span class="pace-badge" style="color:${paceColor};background:${hexToRgba(paceColor,0.1)};border-color:${hexToRgba(paceColor,0.25)}">
                ${paceIcon} Semana ${stats.currentWeek}/${stats.totalWeeks} · ${paceText}
              </span>` : ''}
            <span class="global-progress-count">${done} <span style="color:var(--text-muted);font-weight:400">de</span> ${total} · <strong>${pct}%</strong></span>
          </div>
        </div>
        <div class="global-progress-track">
          <div class="global-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>

      <div class="disc-grid">
        ${DISCIPLINAS.map(disc => {
          const dp = getDiscProgress(disc);
          return `
            <div class="disc-card" style="--c:${disc.cor}" onclick="navigate('avaliacao','${disc.id}')">
              <div class="disc-card-top">
                <span class="disc-ico">${disc.emoji}</span>
                <span class="disc-tag" style="color:${disc.cor}">${disc.label}</span>
              </div>
              <div class="disc-name">${disc.nome}</div>
              <div class="disc-desc">${disc.descricao}</div>
              <div class="disc-prog-track">
                <div class="disc-prog-fill" style="width:${dp.pct}%;background:${disc.cor}"></div>
              </div>
              <div class="disc-bottom">
                <span class="disc-carga">${disc.carga}</span>
                <span class="disc-count" style="color:${disc.cor};background:${hexToRgba(disc.cor,0.1)}">${dp.done}/${dp.total} feitas</span>
              </div>
            </div>`;
        }).join('')}
      </div>

      <div class="sec-divider">
        <span class="sec-divider-txt">Carga Semanal</span>
        <div class="sec-divider-line"></div>
      </div>
      <div class="card">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin-top:6px">
          ${DISCIPLINAS.map(d => `
            <div style="padding:12px 14px;background:var(--bg-card-2);border-radius:9px;border:1px solid var(--border-card)">
              <div style="font-size:.68rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">${d.label}</div>
              <div style="font-size:1.05rem;font-weight:800;color:${d.cor}">${d.carga.split(' · ')[0]}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="sec-divider">
        <span class="sec-divider-txt">Horário Semanal</span>
        ${TODAY_COL ? '<span class="today-hint">· hoje destacado</span>' : ''}
        <div class="sec-divider-line"></div>
      </div>
      <div class="card" style="padding:0;overflow:hidden">
        <div class="schedule-legend">
          ${DISCIPLINAS.map(d => `<span class="sched-leg-item"><span class="sched-leg-dot" style="background:${d.cor}"></span>${d.label}</span>`).join('')}
        </div>
        <div class="schedule-wrap">
          <table class="schedule-table">
            <thead>
              <tr>
                <th class="sched-th sched-time-col">Horário</th>
                ${DAY_KEYS.map((d, i) => `
                  <th class="sched-th${d === TODAY_COL ? ' is-today' : ''}">
                    ${DAY_NAMES[i]}
                    ${d === TODAY_COL ? '<span class="today-badge">hoje</span>' : ''}
                  </th>`).join('')}
              </tr>
            </thead>
            <tbody>${renderScheduleRows()}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

/* ===== AVALIAÇÃO ===== */
function renderAvaliacao(disc) {
  const av = disc.avaliacao;
  return `
    <div style="${discStyle(disc)}">
      <div class="hero">
        <div class="hero-bg" style="background:linear-gradient(135deg,${hexToRgba(disc.cor,0.22)},transparent 70%)"></div>
        <div class="hero-content">
          <div class="hero-crumb">${disc.label} · 1º Bimestre 2026</div>
          <div class="hero-title"><span>${disc.emoji}</span>${disc.nome}</div>
          <div class="hero-desc">${disc.descricao}</div>
          <div class="hero-tags">
            <span class="hero-tag">📚 ${disc.carga}</span>
            <span class="hero-tag">📖 ${disc.referencia}</span>
          </div>
        </div>
      </div>

      ${disc.nota ? `<div class="card card-reflexao" style="margin-bottom:14px"><div class="card-lbl">⚠️ Atenção</div><div class="card-body">${disc.nota}</div></div>` : ''}

      ${notesBlock(disc.id, 'geral')}

      <div class="card">
        <div class="card-lbl">📋 Sistema de Avaliação</div>
        <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:16px">${av.subtitulo}</p>
        <div class="provas-list">
          ${av.provas.map(p => `
            <div class="prova-row">
              <div class="prova-badge ${p.id==='rec'?'rec':''}">${p.label}</div>
              <div>
                <div class="prova-title">${p.titulo}</div>
                <div class="prova-desc">${p.descricao}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-lbl">⭐ Critérios Avaliados</div>
        <ul class="criterios">${av.criterios.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>

      <div class="sec-divider">
        <span class="sec-divider-txt">Aulas do Bimestre</span>
        <div class="sec-divider-line"></div>
      </div>
      <div class="card">
        <div class="card-lbl">📅 Cronograma</div>
        <div class="mini-grid">
          ${disc.aulas.map(a => {
            const status = getAulaStatus(disc.id, a.num);
            return `
              <div class="mini-card ${a.isOficina?'is-oficina':''} ${status==='concluida'?'is-done':''}"
                   onclick="navigate('aula','${disc.id}',${a.num})">
                <span class="mini-num">Aula ${pad(a.num)}</span>
                <span class="mini-ico">${a.emoji}</span>
                <span class="mini-lbl">${a.titulo}</span>
                ${status==='concluida' ? '<span class="mini-status done">✓</span>'
                  : status==='dada'   ? '<span class="mini-status dada">▶</span>' : ''}
              </div>`;
          }).join('')}
        </div>
      </div>
    </div>`;
}

/* ===== AULA ===== */
function renderAula(disc, aula) {
  const idx    = disc.aulas.indexOf(aula);
  const prev   = disc.aulas[idx - 1];
  const next   = disc.aulas[idx + 1];
  const status = getAulaStatus(disc.id, aula.num);

  return `
    <div style="${discStyle(disc)}">

      <div class="aula-toolbar">
        <div class="status-group">
          ${[['planejada','📋 Planejada'],['dada','▶ Dada'],['concluida','✓ Concluída']].map(([s, lbl]) => `
            <button class="status-btn ${s}${status===s?' active':''}"
                    onclick="setAulaStatus('${disc.id}',${aula.num},'${s}')">
              ${lbl}
            </button>`).join('')}
        </div>
        <div class="aula-actions">
          <button class="action-btn" id="focus-btn" onclick="toggleFocus()">⊡ Modo Foco</button>
          <button class="action-btn" id="proj-btn"  onclick="toggleProjection()">📽️ Projeção</button>
          <button class="action-btn" onclick="printAula()">🖨️ Imprimir</button>
        </div>
      </div>

      <div class="hero">
        <div class="hero-bg" style="background:linear-gradient(135deg,${hexToRgba(disc.cor,0.22)},transparent 70%)"></div>
        <div class="hero-content">
          <div class="hero-crumb">${disc.label} · Aula ${pad(aula.num)} · Semana ${aula.semana}</div>
          <div class="hero-title"><span>${aula.emoji}</span>${aula.titulo}</div>
          <div class="hero-desc">${aula.subtitulo}</div>
          <div class="hero-tags">
            ${aula.isOficina ? '<span class="hero-tag oficina-tag">🤖 Oficina de IA</span>' : ''}
            <span class="hero-tag">📆 Semana ${aula.semana}</span>
          </div>
        </div>
      </div>

      ${checklistBlock(disc.id, aula.num)}
      ${reflexaoBlock(disc.id, aula.num)}

      ${aula.videoId ? videoBlock(aula.videoId) : ''}
      ${aula.sections.map(s => renderSection(s)).join('')}

      ${notesBlock(disc.id, `aula${aula.num}`)}

      <div class="nav-arrows">
        ${prev ? `<button class="nav-arrow" onclick="navigate('aula','${disc.id}',${prev.num})">← Aula ${prev.num} · ${prev.titulo}</button>` : '<div></div>'}
        ${next ? `<button class="nav-arrow" style="margin-left:auto" onclick="navigate('aula','${disc.id}',${next.num})">Aula ${next.num} · ${next.titulo} →</button>` : '<div></div>'}
      </div>
    </div>`;
}

/* ===== SECTION RENDERER ===== */
function renderSection(s) {
  switch (s.type) {
    case 'assunto':    return card('📌 Assunto', s.content, '', true);
    case 'explicacao': return card(s.label || 'Explicação', s.content);
    case 'exercicio':  return card(`📓 ${s.label || 'Exercício (Caderno)'}`, s.content, 'card-exercicio');
    case 'pratica':    return card('💻 Prática', s.content, 'card-pratica');
    case 'contexto':   return card('🎯 Contexto da Oficina', s.content, 'card-oficina', true);
    case 'reflexao':   return card(`💭 ${s.label || 'Reflexão'}`, s.content, 'card-reflexao');
    case 'abertura':   return card('🎬 Abertura', s.content, 'card-abertura');
    case 'dinamica':   return card('🎮 Dinâmica', s.content, 'card-dinamica');
    case 'atividade':
      return `
        <div class="card card-atividade">
          <div class="ativ-num">${s.num}</div>
          <div class="ativ-body">
            <div class="ativ-title">${s.titulo}</div>
            <div class="card-body">${s.content}</div>
          </div>
        </div>`;
    case 'ferramentas':
      return `
        <div class="card card-ferramentas collapsible sec-open">
          <div class="card-lbl card-toggle" onclick="this.parentElement.classList.toggle('sec-open')">
            <span class="sec-chevron"></span>🛠️ Ferramentas
          </div>
          <div class="tools-list">${s.items.map(t => `<span class="tool-chip">${t}</span>`).join('')}</div>
        </div>`;
    default:
      return card(s.label || s.type, s.content || '');
  }
}

function videoBlock(videoId) {
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const url   = `https://www.youtube.com/watch?v=${videoId}`;
  return `
    <div class="card collapsible sec-open">
      <div class="card-lbl card-toggle" onclick="this.parentElement.classList.toggle('sec-open')">
        <span class="sec-chevron"></span>Vídeo de Referência
      </div>
      <div class="card-body card-body--video">
        <a class="video-thumb" href="${url}" target="_blank" rel="noopener">
          <img src="${thumb}" alt="Thumbnail do vídeo" loading="lazy">
          <div class="video-play-btn">▶</div>
        </a>
      </div>
    </div>`;
}

function card(label, body, extra = '', defaultOpen = false) {
  const openClass = defaultOpen ? ' sec-open' : '';
  return `
    <div class="card collapsible ${extra}${openClass}">
      <div class="card-lbl card-toggle" onclick="this.parentElement.classList.toggle('sec-open')">
        <span class="sec-chevron"></span>${label}
      </div>
      <div class="card-body">${body}</div>
    </div>`;
}

/* ===== THEME ===== */
function toggleTheme() {
  document.documentElement.classList.add('theme-transitioning');
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('jgp_theme', currentTheme);
  document.getElementById('themeIco').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 400);
}
