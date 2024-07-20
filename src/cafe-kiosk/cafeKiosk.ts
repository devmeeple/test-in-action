import { Beverage } from './beverage/beverage';
import { Order } from './order/order';
import { LocalDateTime } from '@js-joda/core';

export class CafeKiosk {
  private readonly _beverages: Beverage[] = [];

  get beverages(): Beverage[] {
    return this._beverages;
  }

  add(beverage: Beverage, count: number) {
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
    let totalPrice = 0;
    for (const beverage of this._beverages) {
      totalPrice += beverage.price;
    }
    return totalPrice;
  }

  createOrder() {
    return new Order(LocalDateTime.now(), this._beverages);
  }
}
