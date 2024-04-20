export class Money {
  constructor(protected amount: number) {}

  // 값 객체(Value Object) 동등성 비교
  equals(other: object) {
    return this.amount === (other as Money).amount;
  }
}
