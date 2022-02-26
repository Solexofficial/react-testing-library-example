import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('Router test', () => {
    render(<App />);
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-link')).toBeInTheDocument();
  });
});
