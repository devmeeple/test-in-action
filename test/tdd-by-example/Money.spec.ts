import { Dollar } from '../../src/tdd-by-example/Dollar';

describe('Money', () => {
  describe('금액(주가) * 수(주식의 수)의 결과를 반환한다', () => {
    it('5 * 2 의 결과는 10과 같다', () => {
      // given
      const dollar = new Dollar(5);

      // when
      const product = dollar.times(2);

      // then
      expect(new Dollar(10)).toEqual(product);
    });

    it('5 * 3 의 결과는 15와 같다', () => {
      // given
      const dollar = new Dollar(5);

      // when
      const product = dollar.times(3);

      // then
      expect(new Dollar(15)).toEqual(product);
    });
  });

  it('같은 값을 가진 객체(VO)는 동등해야 한다', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
