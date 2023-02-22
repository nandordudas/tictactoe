import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

export interface CounterActions extends SliceCaseReducers<CounterState> {
  increment: (state: CounterState) => void
  decrement: (state: CounterState) => void
  set: (state: CounterState, action: PayloadAction<number>) => void
}
