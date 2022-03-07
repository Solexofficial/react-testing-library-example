import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import Counter from './Counter';

describe('Counter test', () => {
  test('Test router', async () => {
    renderWithRedux(<Counter />, {
      counter: {
        value: 10,
      },
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
});
