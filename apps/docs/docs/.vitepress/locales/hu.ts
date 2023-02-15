import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const huConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: 'Népszerű játék megoldás.',
  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/logo.webp' }],
    ['meta', { name: 'theme-color', content: '#876d3c' }],
  ],

  themeConfig: {
    logo: '/logo.webp',

    outline: {
      label: 'Ezen az oldalon',
    },

    docFooter: {
      next: 'Következő oldal',
      prev: 'Előző oldal',
    },

    returnToTopLabel: 'Vissza a tetejére',

    sidebarMenuLabel: 'Menü',

    lastUpdatedText: 'Utolsó frissítés',

    nav: nav(),

    sidebar: {
      '/hu/guide/': sidebarGuide(),
      '/hu/usage/': sidebarUsage(),
    },
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Útmutató', link: '/hu/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Használat', link: '/hu/usage/structure', activeMatch: '/usage/' },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bevezetés',
      collapsed: false,
      items: [
        { text: 'Kezdő lépések', link: '/hu/guide/getting-started' },
        { text: 'Konfiguráció', link: '/hu/guide/configuration' },
        { text: 'Devcontainers használata', link: '/hu/guide/using-devcontainers' },
      ],
    },
  ]
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Használat',
      collapsed: false,
      items: [
        { text: 'Szerkezet', link: '/hu/usage/structure' },
      ],
    },
  ]
}
