import { CafeKiosk } from './cafeKiosk';
import { Americano } from './beverage/americano';
import { Latte } from './beverage/latte';

export class CafeKioskRunner {
  static main() {
    const cafeKiosk = new CafeKiosk();
    cafeKiosk.add(new Americano());
    console.log('>>> 아메리카노 추가');
    cafeKiosk.add(new Latte());
    console.log('>>> 라떼 추가');

    const totalPrice = cafeKiosk.calculateTotalPrice();
    console.log(`총 주문 가격 : ${totalPrice}`);
  }
}

CafeKioskRunner.main();
