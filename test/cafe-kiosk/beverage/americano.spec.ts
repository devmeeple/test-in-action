import { Americano } from '../../../src/cafe-kiosk/beverage/americano';

describe('Americano', () => {
  it('상품명을 조회한다', () => {
    // given
    const americano = new Americano();

    // when
    const sut = americano.name;

    // then
    expect(sut).toBe('아메리카노');
  });

  it('금액을 조회한다', () => {
    // given
    const americano = new Americano();

    // when
    const sut = americano.price;

    // then
    expect(sut).toBe(4000);
  });
});
