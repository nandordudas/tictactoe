import type { PreloadedState } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './features/counter/counter.slice'
import type { RootState } from './store'

export const reducer = combineReducers({
  counter: counterSlice.reducer,
})

export const setupStore = (preloadedState: PreloadedState<RootState> = {}) => (
  configureStore({
    reducer,
    preloadedState,
  })
)

export type PreloadedStore = ReturnType<typeof setupStore>
