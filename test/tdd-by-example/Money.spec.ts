import { Dollar } from '../../src/tdd-by-example/Dollar';

describe('Money', () => {
  it('같은 값을 가진 객체(VO)는 동등해야 한다', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
