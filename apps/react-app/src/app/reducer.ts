import { type Middleware, type PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { StoreNames } from './constants'
import counterReducer from './features/counter/counter.slice'

const middlewares: Middleware[] = [thunk]

/* c8 ignore start */
const isMetaEnvModeAvailable = ['development'].includes(import.meta.env.MODE)

if (isMetaEnvModeAvailable) {
  const { createLogger } = await import('redux-logger')

  const logger = createLogger({
    collapsed: true,
    timestamp: false,
  })

  middlewares.push(logger)
}
/* c8 ignore stop */

const reducer = combineReducers({
  [StoreNames.Counter]: counterReducer,
})

export const setupStore = (preloadedState: PreloadedState<ReturnType<typeof reducer>> = {}) => {
  return configureStore({
    devTools: isMetaEnvModeAvailable,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
    preloadedState,
    reducer,
  })
}
