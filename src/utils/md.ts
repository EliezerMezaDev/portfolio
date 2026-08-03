/** Convierte un subconjunto de markdown (negrita, cursiva) a HTML seguro. */
export function md(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
