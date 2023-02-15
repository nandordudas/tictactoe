import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: 'Popular game solution.',
  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/logo.webp' }],
    ['meta', { name: 'theme-color', content: '#876d3c' }],
  ],

  themeConfig: {
    logo: '/logo.webp',

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/usage/': sidebarUsage(),
    },
  },
}

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
