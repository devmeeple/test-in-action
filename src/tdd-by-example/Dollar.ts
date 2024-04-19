export class Dollar {
  constructor(private amount: number) {}

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  // 값 객체(Value Object) 동등성 비교
  equals(other: object) {
    return this.amount === (other as Dollar).amount;
  }
}
