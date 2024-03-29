import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

describe('<Navbar />', () => {

  const hideMobileProductsMenuMock = jest.fn();
  const { rerender } = render(<Navbar hideMobileProductsMenu={hideMobileProductsMenuMock} hideMobileProducts isDesktop />)


  it('should load navbar with logo', () => {
    const audiophileLogo = screen.getByTestId('audiophile-logo');
    expect(audiophileLogo).toBeInTheDocument();
  });
  //TODO figure out if data-testid is needed
  it('should load navbar with desktop nav items', () => {
    render(<Navbar hideMobileProductsMenu={hideMobileProductsMenuMock} hideMobileProducts isDesktop />)
    const homeDesktopLink = screen.getByText('Home');
    expect(homeDesktopLink).toBeInTheDocument();
  });

  it('should load navbar without desktop nav items', () => {
    rerender(<Navbar hideMobileProductsMenu={hideMobileProductsMenuMock} hideMobileProducts isDesktop={false} />)
    const audiophileLogo = screen.queryByText('Home');
    expect(audiophileLogo).not.toBeInTheDocument();
  });
})