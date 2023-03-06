import type { AsyncThunk } from '@reduxjs/toolkit'

export type ThunkArgs<T> = T extends AsyncThunk<infer _Returned, infer ThunkArg, infer _ThunkApiConfig>
  ? ThunkArg
  : never

type ThunkStates = 'fulfilled' | 'pending' | 'rejected'

export const expectThunk = <T extends AsyncThunk<any, any, any>>(
  thunk: T,
  args?: ThunkArgs<T>,
  state: ThunkStates = 'pending',
) =>
  expect.objectContaining({
    ...(args ? { meta: expect.objectContaining({ arg: args }) } : {}),
    type: thunk[state].type,
  })
