import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/app/type'

const rootState = (state: RootState) => state.counter

export const selectCount = createSelector(
  rootState,
  state => state.value,
)
