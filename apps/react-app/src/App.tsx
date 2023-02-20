import { isUndefined } from '@workspace/utils'

import { Counter } from './app/features/counter/components/counter'

interface Props {
  title?: string
}

const App = ({ title }: Props) => {
  // INFO: yes, we can use default parameter value or null coalescing operator, but not for know
  title = isUndefined(title) ? 'Vite + React' : title

  return (
    <div className="grid grid-rows-2 place-items-center h-screen">
      <h1>{title}</h1>
      <Counter />
    </div>
  )
}

export default App
