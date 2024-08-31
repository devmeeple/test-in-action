import { LocalDate } from '@js-joda/core';

class ExpiryDateCalculator {
  calculateExpiryDate(billingDate: LocalDate, payAmount: number) {
    return LocalDate.of(2024, 4, 1);
  }
}

describe('ExpiryDateCalculatorTest', () => {
  it('만 원을 납부하면 만료일은 한 달 뒤 다', () => {
    // given
    const billingDate = LocalDate.of(2024, 3, 1);
    const payAmount = 10_000;
    const cal = new ExpiryDateCalculator();

    // when
    const sut = cal.calculateExpiryDate(billingDate, payAmount);

    // then
    expect(sut).toEqual(LocalDate.of(2024, 4, 1));
  });
});
