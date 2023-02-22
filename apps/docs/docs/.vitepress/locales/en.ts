import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: 'Popular game solution.',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
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
    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Structure', link: '/guide/usage/structure' },
      ],
    },
  ]
}
