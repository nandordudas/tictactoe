import UnoCSS from '@unocss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '~': root,
    },
  },
  plugins: [
    react(),
    UnoCSS(),
  ],
})
