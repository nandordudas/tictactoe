import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './counter.state'
import { type CounterSlice, type CounterState, name } from './types'

const _incrementByAmount = (state: CounterState, value: number) => {
  state.value += value
}

export const counterSlice: CounterSlice = createSlice({
  name,
  initialState,
  reducers: {
    decrement(state) {
      _incrementByAmount(state, 1 * -1)
    },
    increment(state) {
      _incrementByAmount(state, 1)
    },
  },
})

export type CounterActions = ReturnType<typeof counterSlice.actions[keyof typeof counterSlice.actions]>

export const counterReducer = counterSlice.reducer
export const { decrement, increment } = counterSlice.actions
