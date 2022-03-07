import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { renderWithRedux } from './tests/helpers/renderWithRedux';

describe('TEST APP', () => {
  test('Router test', () => {
    renderWithRedux(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-link')).toBeInTheDocument();
  });

  test('Not found page', () => {
    renderWithRedux(
      <MemoryRouter initialEntries={['/asdasdasda']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
