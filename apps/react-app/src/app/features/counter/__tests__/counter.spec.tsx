import type { PreloadedState } from '@reduxjs/toolkit'

import { Counter } from '~/app/features/counter/components/counter/counter'
import { CounterTestIds } from '~/app/features/counter/components/counter/counter.constants'
import { initialState } from '~/app/features/counter/counter.state'
import type { RootState } from '~/app/store'
import { screen, userEvent } from '~/test/utils'
import { renderWithProviders } from '~/test/utils/render-with-providers'

describe('Counter', () => {
  let preloadedState: PreloadedState<RootState>

  beforeEach(() => {
    preloadedState = {
      counter: { ...initialState },
    }
  })

  it('should display counter component', () => {
    const expectedValue = 0

    renderWithProviders(<Counter />, { preloadedState })

    expect(screen.getByText(expectedValue)).toBeInTheDocument()
  })

  it('should increment counter', async () => {
    const expectedValue = 1

    renderWithProviders(<Counter />, { preloadedState })

    const incrementButton = await screen.findByTestId(CounterTestIds.increment)

    await userEvent.click(incrementButton)

    expect(screen.getByText(expectedValue)).toBeInTheDocument()
  })

  it('should decrement counter', async () => {
    const expectedValue = -1

    renderWithProviders(<Counter />, { preloadedState })

    const decrementButton = await screen.findByTestId(CounterTestIds.decrement)

    await userEvent.click(decrementButton)

    expect(screen.getByText(expectedValue)).toBeInTheDocument()
  })
})
