import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  /* eslint-disable max-len */
  shortcuts: [
    ['btn', 'px-4 py-2 rounded inline-block cursor-pointer disabled:(cursor-default bg-gray-600 opacity-50 pointer-events-none)'],
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 dark:text-${c}-800 hover:(bg-${c}-800 text-${c}-300)`],
  ],
  /* eslint-enable max-len */
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
