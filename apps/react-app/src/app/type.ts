import type { Action, ThunkAction } from '@reduxjs/toolkit'

import type { store } from './store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, any, Action<string>>
