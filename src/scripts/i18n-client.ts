import { frontmatter as en } from '../i18n/en.md';
import { frontmatter as es } from '../i18n/es.md';
import { md } from '../utils/md';

type Lang = 'en' | 'es';

const translations = { en, es };

/** Reads localStorage → navigator.language → 'en' */
function detectLang(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'es') return stored;
  } catch (_) { /* private browsing */ }
  return /^es/i.test(navigator.language ?? '') ? 'es' : 'en';
}

/** Resolves a dot-notation path inside a translation object. */
function resolve(lang: Lang, path: string): string | undefined {
  const value = path
    .split('.')
    .reduce<unknown>((obj, key) => (obj as Record<string, unknown>)?.[key], translations[lang]);
  return typeof value === 'string' ? value : undefined;
}

/** Applies a language to all translatable elements in the document. */
function applyLang(lang: Lang): void {
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  // Global i18n keys (en.md / es.md)
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const val = resolve(lang, el.dataset.i18n!);
    if (val !== undefined) el.innerHTML = md(val);
  });

  // Per-project text nodes (data-content-en / data-content-es)
  document.querySelectorAll<HTMLElement>('[data-bilingual]').forEach(el => {
    const val = lang === 'en' ? el.dataset.contentEn : el.dataset.contentEs;
    if (val !== undefined) el.innerHTML = md(val);
  });

  // Per-project lists (JSON-encoded string[])
  document.querySelectorAll<HTMLElement>('[data-bilingual-list]').forEach(el => {
    const raw = lang === 'en' ? el.dataset.contentEn : el.dataset.contentEs;
    if (!raw) return;
    try {
      const items: string[] = JSON.parse(raw);
      el.innerHTML = items.map(i => `<li>${md(i)}</li>`).join('');
    } catch (_) {}
  });

  // Per-project tool lists (JSON-encoded {name,reason}[])
  document.querySelectorAll<HTMLElement>('[data-bilingual-tools]').forEach(el => {
    const raw = lang === 'en' ? el.dataset.contentEn : el.dataset.contentEs;
    if (!raw) return;
    try {
      const tools: { name: string; reason: string }[] = JSON.parse(raw);
      el.innerHTML = tools.map(t => `<dt>${md(t.name)}</dt><dd>${md(t.reason)}</dd>`).join('');
    } catch (_) {}
  });
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
const lang = detectLang();
applyLang(lang);
document.body.style.visibility = 'visible';

// After each View Transitions swap the new body is hidden (head style persists).
// Re-apply before the enter animation so text is already translated when it fades in.
document.addEventListener('astro:after-swap', () => {
  applyLang(detectLang());
  document.body.style.visibility = 'visible';
});

// ─── Public API ──────────────────────────────────────────────────────────────
declare global {
  interface Window {
    toggleLang(): void;
  }
}

window.toggleLang = (): void => {
  const current = (document.documentElement.getAttribute('data-lang') ?? 'en') as Lang;
  const next: Lang = current === 'es' ? 'en' : 'es';
  try { localStorage.setItem('lang', next); } catch (_) {}
  applyLang(next);
};
