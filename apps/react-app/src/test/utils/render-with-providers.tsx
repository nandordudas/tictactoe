import type { PreloadedState } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { type PropsWithChildren, type ReactElement, Suspense } from 'react'
import { Provider } from 'react-redux'

import { setupStore } from '~/app/reducer'
import type { AppStore, RootState } from '~/app/type'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export const renderWithProviders = (
  ui: ReactElement,
  renderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...options
  } = renderOptions

  return {
    store,
    ...render(ui, {
      wrapper: ({ children }: PropsWithChildren<typeof ui['props']>) => (
        <Suspense fallback={null}>
          <Provider store={store}>
            {children}
          </Provider>
        </Suspense>
      ),
      ...options,
    }),
  }
}
