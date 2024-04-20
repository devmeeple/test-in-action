export class Franc {
  constructor(private amount: number) {}

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(other: object) {
    return this.amount === (other as Franc).amount;
  }
}
