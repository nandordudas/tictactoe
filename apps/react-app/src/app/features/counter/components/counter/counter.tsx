import { selectCount } from '~/app/features/counter/counter.selectors'
import { decrement, increment } from '~/app/features/counter/counter.slice'
import { useAppDispatch, useAppSelector } from '~/app/hooks'

import { CounterTestIds } from './counter.constants'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div className="grid place-items-center">
      <span>{count}</span>
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
      </div>
    </div>
  )
}
