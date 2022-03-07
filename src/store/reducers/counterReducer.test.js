import counterReducer, { decrement, increment } from './counterReducer';

describe('getCounterVlaue', () => {
  test('increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  test('decrement', () => {
    expect(counterReducer({ value: 1 }, decrement())).toEqual({ value: 0 });
  });

  test('with empty state', () => {
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
