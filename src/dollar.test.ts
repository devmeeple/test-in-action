import { Dollar } from './dollar';

describe('2. 타락한 객체', () => {
  it('Dollar 클래스 부작용 처리하기', () => {
    const five = new Dollar(5);
    let product = five.times(2);

    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});