import type { PreloadedState } from '@reduxjs/toolkit'

import counterReducer, { decrement, increment } from '~/app/features/counter/counter.slice'
import { initialCounterState } from '~/app/features/counter/counter.state'
import type { CounterState } from '~/app/features/counter/types'
import type { RootState } from '~/app/type'

describe('counter reducer', () => {
  let preloadedState: PreloadedState<RootState>

  beforeEach(() => {
    preloadedState = {
      counter: { ...initialCounterState },
    }
  })

  it('should handle initial state', () => {
    const expectedState: CounterState = {
      value: 0,
    }

    expect(counterReducer(preloadedState.counter, { type: 'unknown' })).toEqual(expectedState)
  })

  it('should handle increment', () => {
    const expectedValue = 1
    const { value: currentValue } = counterReducer(preloadedState.counter, increment())

    expect(currentValue).toEqual(expectedValue)
  })

  it('should handle decrement', () => {
    const expectedValue = -1
    const { value: currentValue } = counterReducer(preloadedState.counter, decrement())

    expect(currentValue).toEqual(expectedValue)
  })
})
