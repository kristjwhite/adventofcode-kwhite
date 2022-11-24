import { main } from '../index';

describe('main test', () => {
  it('increments when val1 is lower than val 2 ', () => {
    const result = main([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]);
    expect(result).toBe(5);
  });
  it('doesnt increment when val1 is higher or equal than val 2 ', () => {
    const result = main([2, 2, 1, 2]);
    expect(result).toBe(0);
  });
});
