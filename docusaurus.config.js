// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SteamPunk Codex',
  tagline: 'La guía definitiva de SteamPunk [LPS] v19',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'SteamPunkCodex',
  projectName: 'SteamPunkCodex',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'SteamPunk Codex',

        logo: {
          alt: 'SteamPunk Codex',
          src: 'img/logo.jpg',
        },

        items: [],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: '© 2026 SteamPunk Codex',
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;