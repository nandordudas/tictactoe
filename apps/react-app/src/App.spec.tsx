import App from './App'
import { screen } from './test/utils'
import { renderWithProviders } from './test/utils/render-with-providers'

describe('App', () => {
  it('should display application component', () => {
    const title = 'Vite + React'

    renderWithProviders(<App title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
