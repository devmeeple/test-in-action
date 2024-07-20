import { Beverage } from '../beverage/beverage';
import { LocalDateTime } from '@js-joda/core';

export class Order {
  constructor(
    private readonly orderDateTime: LocalDateTime,
    private readonly beverages: Beverage[],
  ) {}
}
