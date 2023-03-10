import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'

import { enConfig } from './locales/en'
import { huConfig } from './locales/hu'

const config = defineConfig({
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
  },
})

export default withPwa(config)
