import { createAsyncThunk } from '@reduxjs/toolkit'

import type { AppDispatch, AppThunk, RootState } from './type'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: string
  state: RootState
}>()

export const createAppThunk = <ReturnType>(thunk: AppThunk<ReturnType>) => () => thunk
