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

          items: [
            'guia/libro-2/capitulo-1',
            'guia/libro-2/capitulo-2',
            'guia/libro-2/capitulo-3',
            'guia/libro-2/capitulo-4',
            'guia/libro-2/capitulo-5',
            'guia/libro-2/capitulo-6',
            'guia/libro-2/capitulo-7',
            'guia/libro-2/capitulo-8',
          ],
        },

        {
          type: 'category',
          label: '📗 Libro III',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-3/index',
          },

          items: [
            'guia/libro-3/capitulo-1',
            'guia/libro-3/capitulo-2',
            'guia/libro-3/capitulo-3',
            'guia/libro-3/capitulo-4',
            'guia/libro-3/capitulo-5',
            'guia/libro-3/capitulo-6',
            'guia/libro-3/capitulo-7',
            'guia/libro-3/capitulo-8',
          ],
        },

        {
          type: 'category',
          label: '📕 Libro IV',
          collapsed: true,

          link: {
            type: 'doc',
            id: 'guia/libro-4/index',
          },

          items: [
            'guia/libro-4/capitulo-1',
            'guia/libro-4/capitulo-2',
            'guia/libro-4/capitulo-3',
            'guia/libro-4/capitulo-4',
            'guia/libro-4/capitulo-5',
            'guia/libro-4/capitulo-6',
            'guia/libro-4/capitulo-7',
            'guia/libro-4/capitulo-8',
          ],
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