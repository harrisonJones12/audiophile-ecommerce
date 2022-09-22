import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

describe('<Navbar />', () => {

  const hideMobileProductsMenuMock = jest.fn();

  render(<Navbar hideMobileProductsMenu={hideMobileProductsMenuMock} hideMobileProducts isDesktop />)

  it('should load navbar with logo', () => {
    const audiophileLogo = screen.getByTestId('audiophile-logo');
    expect(audiophileLogo).toBeInTheDocument();
  });
})