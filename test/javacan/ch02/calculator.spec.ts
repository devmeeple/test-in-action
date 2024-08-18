import { Calculator } from '../../../src/javacan/calculator';

describe('CalculatorTest', () => {
  it('두 수의 덧셈을 계산한다 [성공]', () => {
    // given

    // when
    const sut = Calculator.plus(1, 2);

    // then
    expect(sut).toBe(3);
  });
});
