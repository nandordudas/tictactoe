import { withPwa } from '@vite-pwa/vitepress'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

import { enConfig } from './locales/en'
import { huConfig } from './locales/hu'

export default withPwa(defineConfig({
  title: 'Tic tac toe',

  lastUpdated: true,
  cleanUrls: true,

  appearance: 'dark',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      ...enConfig,
    },
    hu: {
      label: 'Magyar',
      lang: 'hu-HU',
      link: '/hu/',
      ...huConfig,
    },
  },

  markdown: {
    headers: {
      level: [0, 0],
    },
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/logo.webp' }],
    ['meta', { name: 'theme-color', content: '#876d3c' }],
  ],

  themeConfig: {
    logo: '/logo.webp',
    outline: [2, 3],

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/usage/': sidebarUsage(),
    },
  },
}))

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Usage', link: '/usage/structure', activeMatch: '/usage/' },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Using Devcontainers', link: '/guide/using-devcontainers' },
      ],
    },
  ]
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Structure', link: '/usage/structure' },
      ],
    },
  ]
}
