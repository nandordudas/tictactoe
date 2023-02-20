import App from './App'
import { renderWithProviders, screen } from './test/utils'

describe('App', () => {
  const title = 'Vite + React'

  it('should display application component with title', () => {
    renderWithProviders(<App title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should display application component without title', () => {
    renderWithProviders(<App />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
