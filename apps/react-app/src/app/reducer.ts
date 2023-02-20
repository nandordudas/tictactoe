import { type Middleware, type PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { StoreNames } from './constants'
import counterReducer from './features/counter/counter.slice'

const middlewares: Middleware[] = [thunk]

if (import.meta.env.DEV) {
  const { createLogger } = await import('redux-logger')

  const logger = createLogger({
    collapsed: true,
    timestamp: false,
  })

  middlewares.push(logger)
}

const reducer = combineReducers({
  [StoreNames.Counter]: counterReducer,
})

export const setupStore = (preloadedState: PreloadedState<ReturnType<typeof reducer>> = {}) => {
  return configureStore({
    devTools: import.meta.env.DEV,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
    preloadedState,
    reducer,
  })
}
