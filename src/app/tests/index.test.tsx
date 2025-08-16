import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders the homepage', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})