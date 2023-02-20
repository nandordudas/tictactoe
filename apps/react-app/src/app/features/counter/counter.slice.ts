import { type Slice, createSlice } from '@reduxjs/toolkit'

import { StoreNames } from '~/app/constants'

import { initialCounterState } from './counter.state'
import { type CounterActions, type CounterState } from './types'

type CounterSlice = Slice<CounterState, CounterActions, StoreNames.Counter>

const incrementByAmount = (state: CounterState, value: number) => {
  state.value += value
}

const counterSlice: CounterSlice = createSlice({
  name: StoreNames.Counter,
  initialState: initialCounterState,
  reducers: {
    decrement(state) {
      incrementByAmount(state, -1)
    },
    increment(state) {
      incrementByAmount(state, 1)
    },
  },
})

export const {
  decrement,
  increment,
} = counterSlice.actions

// INFO: don't like default export
export default counterSlice.reducer
