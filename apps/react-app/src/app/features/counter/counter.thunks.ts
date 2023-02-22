import axios from 'axios'

import { createAppAsyncThunk, createAppThunk } from '~/app/utils'

import { selectCount } from './counter.selectors'
import { increment, set } from './counter.slice'

const baseUrl = 'http://localhost:3333/count/'

export const fetchCountThunk = createAppAsyncThunk(
  'counter/fetchCountThunk',
  async () => {
    const { data } = await axios.get<{ value: number }>(baseUrl)

    set(data.value)
  },
)

const isNumberEven = (value: number) => (value & 1) === 0

export const incrementIfOdd = createAppThunk((dispatch, getState) => {
  const currentValue = selectCount(getState())

  if (isNumberEven(currentValue))
    return

  dispatch(increment())
})
