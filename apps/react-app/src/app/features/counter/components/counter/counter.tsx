import { selectCount } from '~/app/features/counter/counter.selectors'
import { decrement, increment } from '~/app/features/counter/counter.slice'
import { fetchCountThunk, incrementIfOdd } from '~/app/features/counter/counter.thunks'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import { CounterTestIds } from './counter.constants'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div className="grid place-items-center">
      <span data-testid={CounterTestIds.value}>{count}</span>
      <div className="flex gap-2">
        <button
          data-testid={CounterTestIds.increment}
          type="button"
          className="btn btn-blue"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          data-testid={CounterTestIds.decrement}
          type="button"
          className="btn btn-orange"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          data-testid={CounterTestIds.fetchCountAsyncThunk}
          type="button"
          className="btn btn-green"
          onClick={() => dispatch(fetchCountThunk())}
        >
          fetch count
        </button>
        <button
          data-testid={CounterTestIds.incrementIfOddThunk}
          type="button"
          className="btn btn-red"
          onClick={() => dispatch(incrementIfOdd())}
        >
          increment if number is odd
        </button>
      </div>
    </div>
  )
}
