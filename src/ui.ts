const ui = {
  backLink: '/Eventos',
  readingTime: (n: number) => `${n} min read`,
  updated: '/Atualizados',
  relatedPosts: '/Destaque',
  allPosts: '/Eventos',
  postsEyebrow: '/Arquivo',
  postsTitle: '/Eventos',
  heroTitle: 'Line 1',
  heroTitleLine2: 'Line 2',
  viewAll: '/Eventos',
  readLink: '/Ler',
  postFeed: {
    all: '/Todos',
    filterLabel: 'Filtrar por categoria',
    previousCategories: 'Categorias anteriores',
    nextCategories: 'Categorias posteriores',
    searchLabel: 'Pesquisar em eventos',
    empty: 'Sem eventos relacionados.',
    more: '/Mais',
    read: '/Ler',
  },
};

export function getUiText() {
  return ui;
}
