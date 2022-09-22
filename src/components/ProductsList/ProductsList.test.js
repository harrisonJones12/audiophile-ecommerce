import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Productslist from './Productslist'

test('ensures product lists renders', () => {

  render(<Productslist />)

  const productsList = screen.getByTestId('products-list');
  // ASSERT
  expect(productsList).toBeInTheDocument();
})