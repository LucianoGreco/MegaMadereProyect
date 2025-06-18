// src/data/utils/agruparPorCategoria.js

export function agruparPorCategoria(items, categorias) {
  return items.reduce((acc, item) => {
    for (const cat of categorias) {
      if (item.id.startsWith(cat)) {
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        if (!acc.todos) acc.todos = [];
        acc.todos.push(item); // Solo si entra en una categoría válida
        break;
      }
    }
    return acc;
  }, { todos: [] });
}

