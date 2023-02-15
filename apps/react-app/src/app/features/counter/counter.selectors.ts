import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store'

const _rootSelector = (state: RootState) => state.counter

export const selectCount = createSelector(
  _rootSelector,
  state => state.value,
)
