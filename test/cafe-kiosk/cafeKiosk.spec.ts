import { CafeKiosk } from '../../src/cafe-kiosk/cafeKiosk';
import { Latte } from '../../src/cafe-kiosk/beverage/latte';
import { Americano } from '../../src/cafe-kiosk/beverage/americano';
import { LocalDateTime } from '@js-joda/core';

describe('CafeKiosk', () => {
  it('음료를 추가하면 음료 목록에 추가된다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when
    cafeKiosk.add(americano);

    // then
    expect(cafeKiosk.beverages).toHaveLength(1);
    expect(cafeKiosk.beverages[0].name).toBe('아메리카노');
  });

  it('음료를 여러잔 추가한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when
    cafeKiosk.add(americano, 2);

    // then
    expect(cafeKiosk.beverages[0]).toBe(americano);
    expect(cafeKiosk.beverages[1]).toBe(americano);
  });

  it('음료를 한 잔도 추가하지 않으면 에러가 발생한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when

    // then
    expect(() => cafeKiosk.add(americano, 0)).toThrow(
      new Error('음료는 1잔 이상 주문할 수 있습니다'),
    );
  });

  it('추가한 음료를 제거한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();
    cafeKiosk.add(americano);

    // when
    cafeKiosk.remove(americano);

    // then
    expect(cafeKiosk.beverages).toHaveLength(0);
  });

  it('추가한 음료 전체를 제거한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();
    const latte = new Latte();
    cafeKiosk.add(americano);
    cafeKiosk.add(latte);

    // when
    cafeKiosk.clear();

    // then
    expect(cafeKiosk.beverages).toHaveLength(0);
  });

  describe('createOrder', () => {
    it('주문을 만든다', () => {
      // given
      const cafeKiosk = new CafeKiosk();
      const americano = new Americano();
      cafeKiosk.add(americano);

      // when
      const sut = cafeKiosk.createOrder(LocalDateTime.of(2024, 7, 21, 10, 0));

      // then
      expect(sut.beverages).toHaveLength(1);
      expect(sut.beverages[0].name).toBe('아메리카노');
    });

    it('영업시간 외에 주문할 수 없다', () => {
      // given
      const cafeKiosk = new CafeKiosk();
      const americano = new Americano();
      cafeKiosk.add(americano);

      // when

      // then
      expect(() =>
        cafeKiosk.createOrder(LocalDateTime.of(2024, 7, 21, 9, 59)),
      ).toThrow(
        new Error('영업시간이 아닙니다. (10:00~22:00) 관리자에게 문의하세요'),
      );
    });
  });
});
