import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
// No additional code is needed at the placeholder for running the tests.
describe('NavBar Component', () => {
    test('renders the navbar brand', () => {
        render(<NavBar />);
        const brandElement = screen.getByText(/Navbar/i);
        expect(brandElement).toBeInTheDocument();
    });

    test('renders all navigation links', () => {
        render(<NavBar />);
        const homeLink = screen.getByText(/Home/i);
        const featuresLink = screen.getByText(/Features/i);
        const pricingLink = screen.getByText(/Pricing/i);
        const disabledLink = screen.getByText(/Disabled/i);

        expect(homeLink).toBeInTheDocument();
        expect(featuresLink).toBeInTheDocument();
        expect(pricingLink).toBeInTheDocument();
        expect(disabledLink).toBeInTheDocument();
    });

    test('has the correct classes for styling', () => {
        render(<NavBar />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toHaveClass('navbar');
        expect(navElement).toHaveClass('navbar-expand-lg');
        expect(navElement).toHaveClass('custom-navbar');
    });

    test('renders the navbar toggler button', () => {
        render(<NavBar />);
        const togglerButton = screen.getByRole('button');
        expect(togglerButton).toBeInTheDocument();
    });

    test('renders the disabled link with correct aria-disabled attribute', () => {
        render(<NavBar />);
        const disabledLink = screen.getByText(/Disabled/i);
        expect(disabledLink).toHaveAttribute('aria-disabled', 'true');
    });
});