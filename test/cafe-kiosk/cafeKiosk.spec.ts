import { CafeKiosk } from '../../src/cafe-kiosk/cafeKiosk';
import { Latte } from '../../src/cafe-kiosk/beverage/latte';
import { Americano } from '../../src/cafe-kiosk/beverage/americano';

describe('CafeKiosk', () => {
  it('음료를 추가하면 주문 음료수에 추가된다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when
    cafeKiosk.add(americano, 1);

    // then
    expect(cafeKiosk.beverages).toHaveLength(1);
    expect(cafeKiosk.beverages[0].name).toBe('아메리카노');
  });

  it('음료를 여러잔 주문한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when
    cafeKiosk.add(americano, 2);

    // then
    expect(cafeKiosk.beverages[0]).toBe(americano);
    expect(cafeKiosk.beverages[1]).toBe(americano);
  });

  it('음료를 한 잔도 주문하지 않으면 에러가 발생한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when

    // then
    expect(() => cafeKiosk.add(americano, 0)).toThrow(
      new Error('음료는 1잔 이상 주문할 수 있습니다'),
    );
  });

  it('주문한 상품을 취소한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();
    cafeKiosk.add(americano, 1);

    // when
    cafeKiosk.remove(americano);

    // then
    expect(cafeKiosk.beverages).toHaveLength(0);
  });

  it('주문한 상품 전체를 취소한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();
    const latte = new Latte();
    cafeKiosk.add(americano, 1);
    cafeKiosk.add(latte, 1);

    // when
    cafeKiosk.clear();

    // then
    expect(cafeKiosk.beverages).toHaveLength(0);
  });
});
