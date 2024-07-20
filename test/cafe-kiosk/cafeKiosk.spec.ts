import { CafeKiosk } from '../../src/cafe-kiosk/cafeKiosk';
import { Latte } from '../../src/cafe-kiosk/beverage/latte';
import { Americano } from '../../src/cafe-kiosk/beverage/americano';

describe('CafeKiosk', () => {
  it('음료를 추가하면 주문 음료수에 추가된다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();

    // when
    cafeKiosk.add(americano);

    // then
    expect(cafeKiosk.beverages).toHaveLength(1);
    expect(cafeKiosk.beverages[0].name).toBe('아메리카노');
  });

  it('주문한 상품을 취소한다', () => {
    // given
    const cafeKiosk = new CafeKiosk();
    const americano = new Americano();
    cafeKiosk.add(americano);

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
    cafeKiosk.add(americano);
    cafeKiosk.add(latte);

    // when
    cafeKiosk.clear();

    // then
    expect(cafeKiosk.beverages).toHaveLength(0);
  });
});
