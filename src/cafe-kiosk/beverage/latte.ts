import { Beverage } from './beverage';

export class Latte implements Beverage {
  get name() {
    return '라떼';
  }

  get price() {
    return 4500;
  }
}
