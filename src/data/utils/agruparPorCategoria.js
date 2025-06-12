// Agrupa elementos por categoría basada en el prefijo del ID
export function agruparPorCategoria(items, categorias) {
  return items.reduce((acc, item) => {
    for (const cat of categorias) {
      if (item.id.startsWith(cat)) {
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        break; // Asumimos una única categoría por item
      }
    }
    acc.todos.push(item); // Lista completa
    return acc;
  }, { todos: [] });
}
