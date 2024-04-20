import { Franc } from '../../src/tdd-by-example/Franc';

describe('Franc', () => {
  describe('금액(주가) * 수(주식의 수)의 결과를 반환한다', () => {
    it('5CHF * 2는 10CHF 이다', () => {
      // given
      const franc = new Franc(5);

      // when
      const act = franc.times(2);

      // then
      expect(act).toEqual(new Franc(10));
    });

    it('5CF * 3은 15CHF 이다', () => {
      // given
      const franc = new Franc(5);

      // when
      const act = franc.times(3);

      // then
      expect(act).toEqual(new Franc(15));
    });
  });
});
