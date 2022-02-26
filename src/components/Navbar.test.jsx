import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('Navbar test', () => {
  test('test about link', async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  test('test main link', async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
  });
  test('test user link', async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId('users-link');
    userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
