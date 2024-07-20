import { Beverage } from './beverage';

export class Americano implements Beverage {
  get name() {
    return '아메리카노';
  }

  get price() {
    return 4000;
  }
}
