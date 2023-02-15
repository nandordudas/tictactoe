import type { PreloadedState } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { type PropsWithChildren, type ReactElement, Suspense } from 'react'
import { Provider } from 'react-redux'

import { type PreloadedStore, setupStore } from '~/app/reducer'
import type { RootState } from '~/app/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: PreloadedStore
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const rtlRenderOptions = {
    wrapper: ({ children }: PropsWithChildren<typeof ui['props']>) => (
      <Suspense fallback={null}>
        <Provider store={store}>
          {children}
        </Provider>
      </Suspense>
    ),
    ...renderOptions,
  }

  return {
    store,
    ...render(ui, rtlRenderOptions),
  }
}
