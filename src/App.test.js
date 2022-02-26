import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// describe('TEST APP', () => {
//   test('renders learn react link', () => {
//     render(<App />);
//     const helloWorldEl = screen.getByText(/Hello world/i);
//     const btn = screen.getByRole('button');
//     const input = screen.getByPlaceholderText(/input value/i);
//     expect(helloWorldEl).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toMatchSnapshot();
//   });

//   test('renders learn react link 2', async () => {
//     render(<App />);
//     // const helloWorldEl = screen.queryByText(/hello2/i);
//     // expect(helloWorldEl).toBeNull();
//     const helloWorldEl = await screen.findByText(/data/i);
//     expect(helloWorldEl).toBeInTheDocument();
//     expect(helloWorldEl).toHaveStyle({ color: 'red' });
//   });

//   test('CLICK EVENT', () => {
//     render(<App />);
//     const btn = screen.getByTestId('toggle-btn');

//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//   });

//   test('INPUT EVENT', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/input value/i);

//     expect(screen.queryByTestId('value-elem')).toContainHTML('');
//     // fireEvent.input(input, {
//     //   target: { value: '123123' },
//     // });
//     userEvent.type(input, '123123');
//     expect(screen.getByTestId('value-elem')).toContainHTML('123123');
//   });
// });
