type NavItem = {
  label: string;
  href: string;
};

const config = {
  site: {
    url: 'https://skatepark-session.vercel.app',
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: '32',
    logoLabel: 'Skatepark',
    description: 'https://maps.app.goo.gl/a8HMj78BWzGNxNtJA',
    author: 'Galera do Romcy Montese',
    defaultOgImage: '/images/og.png',
  },

  nav: [] as NavItem[],

  footerNav: [
    { label: 'Pesquisa', href: '/search' },
    { label: 'Sobre', href: '/about' },
  ] as NavItem[],

  content: {
    categoryOrder: [
      'Evento',
      'Game',
      'Park',
      'Street',
      'Vertical',
    ],
  },

  behavior: {
    smoothScroll: true,
  },

  comments: {
    // One-line switch after you fill the giscus values:
    // mode: 'off'           -> no comments
    // mode: 'giscus'        -> original giscus theme
    // mode: 'giscus-custom' -> Tone custom giscus theme
    // Local preview can also use PUBLIC_GISCUS_MODE and PUBLIC_GISCUS_* in .env.local.
    mode: 'off',
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      customLightTheme: '/styles/giscus-light.css',
      customDarkTheme: '/styles/giscus-dark.css',
      lang: 'en',
      loading: 'eager',
    },
  },

  social: {
    github: 'https://github.com/daoliveirafilho',
    medium: 'https://medium.com/@da.oliveira.filho',
    openwebui: 'https://openwebui.com/u/daoliveirafilho',
  },

  about: {
    profileImage: '',
    name: 'Galera do Romcy Montese',
    role: 'skateboarding is not a crime.',
    location: 'Fortal CE',
    focus: 'Writing, small tools, and notes worth returning to.',
    lead: 'Galera writes about small product decisions, interface craft, and the notes that make work easier to return to.',
    headline: ['line2', 'line2'],
    statementLabel: '1item',
    statementTitle: 'Notes on making useful things.',
    statement:
      'This page is intentionally spare: a short bio, a few links, and enough context for readers who want to know who is writing.',
    careerLabel: 'Galera',
    career: [
      {
        period: 'skate',
        title: 'nome',
        description:
          'teste de texto completo.',
      },
      {
        period: 'skate',
        title: 'nome',
        description:
          'teste de texto completo.',
      },
      {
        period: 'skate',
        title: 'nome',
        description:
          'teste de texto completo.',
      },
    ],
    interests: [
      'Skate',
      'Skate',
      'Skate',
    ],
    interestsLabel: 'Interesse(s)',
    interestsHeading: 'Sobre o interessem em praticar o esporte',
  },
};

export default config;
