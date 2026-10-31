export function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function clsOf(v) {
  if (typeof v !== 'number') return '';
  return v >= 80 ? 'good' : v >= 50 ? 'warn' : 'bad';
}

export function gradeClassOf(percent) {
  if (percent >= 90) return 'a';
  if (percent >= 75) return 'b';
  if (percent >= 60) return 'c';
  if (percent >= 45) return 'd';
  if (percent >= 30) return 'e';
  return 'f';
}

export function docCard(doc) {
  const card = document.createElement('div');
  card.className = 'security-doc';
  card.innerHTML = `
    <div class="security-doc-title">${escapeHtml(doc.title)}</div>
    ${doc.paragraphs.map(p => `
      <div class="security-doc-block">
        <div class="security-doc-h">${escapeHtml(p.h)}</div>
        <div class="security-doc-t">${escapeHtml(p.t)}</div>
      </div>
    `).join('')}
  `;
  return card;
}

export function bigScoreCard({ title, subtitle, score, scoreMax, percent, grade, stats }) {
  const card = document.createElement('div');
  card.className = 'security-score-card';
  const gradeClass = gradeClassOf(percent);
  const size = 160, stroke = 12, radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const dash = (percent / 100) * circ;

  card.innerHTML = `
    <div class="security-score-head">
      <div>
        <div class="security-score-title">${escapeHtml(title)}</div>
        <div class="security-score-sub">${escapeHtml(subtitle || '')}</div>
      </div>
      <div class="security-score-grade grade-${gradeClass}">${escapeHtml(grade || '—')}</div>
    </div>
    <div class="security-score-body">
      <div class="security-score-big">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="color-mix(in srgb, var(--fg) 10%, transparent)" stroke-width="${stroke}"/>
          <circle cx="${size/2}" cy="${size/2}" r="${radius}" fill="none" stroke="var(--accent)" stroke-width="${stroke}"
            stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${circ / 4}"
            stroke-linecap="round" transform="rotate(-90 ${size/2} ${size/2})"
            style="transition: stroke-dasharray .6s ease"/>
          <text x="50%" y="46%" text-anchor="middle" dominant-baseline="middle" fill="var(--accent)" font-size="36" font-weight="900" font-family="var(--font-heading)">${Number(score).toFixed(2)}</text>
          <text x="50%" y="60%" text-anchor="middle" dominant-baseline="middle" fill="var(--fg-muted)" font-size="12" font-family="var(--font-heading)">из ${scoreMax}.00</text>
          <text x="50%" y="74%" text-anchor="middle" dominant-baseline="middle" fill="var(--accent)" font-size="14" font-weight="700" font-family="var(--font-heading)">${Math.round(percent)}%</text>
        </svg>
      </div>
      <div class="security-score-stats">
        ${(stats || []).map(s => `
          <div class="security-stat ${s.cls || ''}">
            <div class="security-stat-label">${escapeHtml(s.label)}</div>
            <div class="security-stat-value">${escapeHtml(String(s.value))}</div>
            ${s.weight ? `<div class="security-stat-weight">${escapeHtml(s.weight)}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return card;
}

export function ratingTable(currentScore) {
  const wrap = document.createElement('div');
  wrap.className = 'security-rating-table';
  const cur = Math.round(currentScore);
  const rows = [
    { score: 6, emoji: '😹', casual: 'Excellent', prof: 'Excellent', desc: 'Максимальная защита.' },
    { score: 5, emoji: '😻', casual: 'Well done', prof: 'Good', desc: 'Очень хорошая защита.' },
    { score: 4, emoji: '😺', casual: 'Sufficient', prof: 'Sufficient', desc: 'Достаточный уровень.' },
    { score: 3, emoji: '🙀', casual: 'You should do better', prof: 'Insufficient', desc: 'Защита слабая.' },
    { score: 2, emoji: '😿', casual: 'Weak', prof: 'Poor', desc: 'Критически слабая защита.' },
    { score: 1, emoji: '', casual: 'Bogus', prof: 'Bogus', desc: 'Защита отсутствует.' }
  ];
  wrap.innerHTML = `
    <div class="section-title" style="margin-top: 16px;">📊 Рейтинг защиты</div>
    <table class="security-rating-tbl">
      <thead><tr><th>Score</th><th>Emoji</th><th>Casual</th><th>Prof</th><th>Описание</th></tr></thead>
      <tbody>${rows.map(r => `
        <tr class="${r.score === cur ? 'current-score' : ''}">
          <td><b>${r.score}</b></td>
          <td style="font-size: 20px;">${r.emoji}</td>
          <td>${r.casual}</td>
          <td>${r.prof}</td>
          <td class="text-muted">${r.desc}</td>
        </tr>
      `).join('')}</tbody>
    </table>
  `;
  return wrap;
}

export function placeholder(text) {
  const el = document.createElement('div');
  el.className = 'security-empty';
  el.textContent = text;
  return el;
}