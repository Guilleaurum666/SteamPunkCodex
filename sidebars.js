const sidebars = {
  tutorialSidebar: [

    {
      type: 'category',
      label: '🚀 Empezar aquí',
      collapsed: false,
      items: [
        'intro',
        'servidor/index',
      ],
    },

    {
      type: 'category',
      label: '📖 Guía',
      collapsed: false,

      link: {
        type: 'doc',
        id: 'guia/index',
      },

      items: [

        {
          type: 'category',
          label: '📘 Libro I',
          collapsed: false,

          link: {
            type: 'doc',
            id: 'guia/libro-1/index',
          },

          items: [
            'guia/libro-1/01-primer-dia',
            'guia/libro-1/recursos-basicos',
            'guia/libro-1/comida',
            'guia/libro-1/primer-refugio',
            'guia/libro-1/herramientas',
            'guia/libro-1/primeras-maquinas',
            'guia/libro-1/preparado-para-libro-2',
          ],
        },

        {
          type: 'category',
          label: '📙 Libro II',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-2/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📗 Libro III',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-3/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📕 Libro IV',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-4/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📓 Libro V',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-5/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📔 Libro VI',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-6/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📒 Libro VII',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-7/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: '📚 Libro VIII',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-8/index',
          },

          items: [],
        },

      ],
    },

    {
      type: 'category',
      label: '🎯 Quiero...',
      collapsed: false,

      link: {
        type: 'doc',
        id: 'quiero/index',
      },

      items: [],
    },

    {
      type: 'category',
      label: '📦 Mods',
      collapsed: false,

      link: {
        type: 'doc',
        id: 'mods/index',
      },

      items: [],
    },

  ],
};

export default sidebars;