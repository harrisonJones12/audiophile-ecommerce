import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

test('ensures Home container renders', () => {

  render(<Home />)

  const homeContainer = screen.getByTestId('home-container');
  // ASSERT
  expect(homeContainer).toBeInTheDocument();
})