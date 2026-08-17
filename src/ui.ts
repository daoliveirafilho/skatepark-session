const ui = {
  backLink: 'Eventos/',
  readingTime: (n: number) => `${n} min read`,
  updated: 'Atualizados',
  relatedPosts: 'Destaque',
  allPosts: 'Eventos/',
  postsEyebrow: 'Arquivo',
  postsTitle: 'Eventos/',
  heroTitle: 'Line 1',
  heroTitleLine2: 'Line 2',
  viewAll: 'Eventos/',
  readLink: 'Ver/',
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
