import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const huConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: 'Népszerű játék megoldás.',
  themeConfig: {
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
    },
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Útmutató', link: '/hu/guide/getting-started', activeMatch: '/guide/' },
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
    {
      text: 'Használat',
      collapsed: false,
      items: [
        { text: 'Szerkezet', link: '/hu/guide/usage/structure' },
      ],
    },
  ]
}
