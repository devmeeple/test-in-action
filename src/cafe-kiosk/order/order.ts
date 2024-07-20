import { Beverage } from '../beverage/beverage';
import { LocalDateTime } from '@js-joda/core';

export class Order {
  constructor(
    private readonly _orderDateTime: LocalDateTime,
    private readonly _beverages: Beverage[],
  ) {}

  get orderDateTime(): LocalDateTime {
    return this._orderDateTime;
  }

  get beverages(): Beverage[] {
    return this._beverages;
  }
}
