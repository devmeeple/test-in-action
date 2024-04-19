import { Dollar } from '../../src/tdd-by-example/Dollar';

describe('Money', () => {
  it('금액(주가) * 수(주식의 수)의 결과를 반환한다', () => {
    // given
    const dollar = new Dollar(5);

    // when
    const product = dollar.times(2);

    // then
    expect(product.amount).toBe(10);
  });

  it('같은 값을 가진 객체(VO)는 동등해야 한다', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
