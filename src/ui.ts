const ui = {
  backLink: 'Todos os artigos',
  readingTime: (n: number) => `${n} min read`,
  updated: 'Atualizados',
  relatedPosts: 'Destaque',
  allPosts: 'Todos os artigos',
  postsEyebrow: 'Arquivo',
  postsTitle: 'Todos os artigos',
  heroTitle: 'Line 1',
  heroTitleLine2: 'Line 2',
  viewAll: 'Todos os artigos',
  readLink: 'Ler mais',
  postFeed: {
    all: 'Todos',
    filterLabel: 'Filtrar por categoria',
    previousCategories: 'Scroll categories left',
    nextCategories: 'Scroll categories right',
    searchLabel: 'Pesquisar artigos',
    empty: 'Sem artigos relacionados.',
    more: 'Mais',
    read: 'Ler',
  },
};

export function getUiText() {
  return ui;
}
