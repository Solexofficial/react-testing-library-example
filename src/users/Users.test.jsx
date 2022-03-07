import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { renderTestApp } from '../tests/helpers/renderTestApp';
import Users from './Users';

jest.mock('axios');

describe('USERS TEST', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render users', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });

  test('test redirect to details page', async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Users />);
    const users = await screen.findAllByTestId('user-item');
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
