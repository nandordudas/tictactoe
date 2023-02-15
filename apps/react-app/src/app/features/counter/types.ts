import type { Slice, SliceCaseReducers } from '@reduxjs/toolkit'

export const name = 'counter'

export interface CounterState {
  value: number
}

interface _CounterReducers extends SliceCaseReducers<CounterState> {
  increment: (state: CounterState) => void
  decrement: (state: CounterState) => void
}

export type CounterSlice = Slice<CounterState, _CounterReducers, typeof name>
