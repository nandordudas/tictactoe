import type { SliceCaseReducers } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

export interface CounterActions extends SliceCaseReducers<CounterState> {
  increment: (state: CounterState) => void
  decrement: (state: CounterState) => void
}
