import { Dollar } from './dollar';

describe('1. 다중통화구현', () => {
  it('곱셈', () => {
    // given
    const five = new Dollar(5);

    // when
    five.times(2);

    // then
    expect(five.amount).toBe(10);
  });
});