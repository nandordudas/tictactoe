import { counterReducer, decrement, increment } from '~/app/features/counter/counter.slice'
import { initialState } from '~/app/features/counter/counter.state'
import type { CounterState } from '~/app/features/counter/types'
import { setupStore } from '~/app/reducer'

describe('counter reducer', () => {
  let state: CounterState
  let store: ReturnType<typeof setupStore>

  beforeEach(() => {
    store = setupStore({
      counter: { ...initialState },
    })

    state = store.getState().counter
  })

  it('should handle initial state', () => {
    const expectedState: CounterState = {
      value: 0,
    }

    expect(counterReducer(state, { type: 'unknown' })).toEqual(expectedState)
  })

  it('should handle increment', () => {
    const expectedValue = 1
    const currentValue = counterReducer(state, increment()).value

    expect(currentValue).toEqual(expectedValue)
  })

  it('should handle decrement', () => {
    const expectedValue = -1
    const currentValue = counterReducer(state, decrement()).value

    expect(currentValue).toEqual(expectedValue)
  })
})
