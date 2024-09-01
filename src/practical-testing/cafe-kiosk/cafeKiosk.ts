import { Beverage } from './beverage/beverage';
import { Order } from './order/order';
import { LocalDateTime, LocalTime } from '@js-joda/core';

export class CafeKiosk {
  private static readonly SHOP_OPEN_TIME = LocalTime.of(10, 0);
  private static readonly SHOP_CLOSE_TIME = LocalTime.of(22, 0);

  private readonly _beverages: Beverage[] = [];

  get beverages(): Beverage[] {
    return this._beverages;
  }

  add(beverage: Beverage, count: number = 1) {
    if (count <= 0) {
      throw new Error('음료는 1잔 이상 주문할 수 있습니다');
    }

    for (let i = 0; i < count; i++) {
      this._beverages.push(beverage);
    }
  }

  remove(beverage: Beverage) {
    const index = this._beverages.indexOf(beverage);
    if (index > -1) {
      this._beverages.splice(index, 1);
    }
  }

  clear() {
    this._beverages.splice(0);
  }

  calculateTotalPrice() {
    return this._beverages.reduce(
      (totalPrice, beverage) => totalPrice + beverage.price,
      0,
    );
  }

  createOrder(currentDateTime: LocalDateTime) {
    const currentTime = currentDateTime.toLocalTime();
    if (
      currentTime.isBefore(CafeKiosk.SHOP_OPEN_TIME) ||
      currentTime.isAfter(CafeKiosk.SHOP_CLOSE_TIME)
    ) {
      throw new Error(
        '영업시간이 아닙니다. (10:00~22:00) 관리자에게 문의하세요',
      );
    }

    return new Order(currentDateTime, this._beverages);
  }
}
