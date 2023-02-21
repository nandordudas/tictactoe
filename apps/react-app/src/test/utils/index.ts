import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export * from './render-with-providers'
