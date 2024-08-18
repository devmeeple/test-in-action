class PasswordStrengthMeter {
  meter(password: string) {
    if (password.length < 8) {
      return PasswordStrength.NORMAL;
    }

    const containsNumber = this.meetsContainingNumberCriteria(password);
    if (!containsNumber) return PasswordStrength.NORMAL;

    return PasswordStrength.STRONG;
  }

  private meetsContainingNumberCriteria(password: string) {
    for (const char of password) {
      if (char >= '0' && char <= '9') {
        return true;
      }
    }
    return false;
  }
}

enum PasswordStrength {
  STRONG,
  NORMAL,
}

describe('PasswordStrengthMeterTest', () => {
  describe('규칙을 모두 만족하면 암호는 강함이다. [성공]', () => {
    it.each([['ab12!@AB'], ['abc1!Add']])('Password: %s', (password) => {
      // given
      const meter = new PasswordStrengthMeter();

      // when
      const sut = meter.meter(password);

      // then
      expect(sut).toBe(PasswordStrength.STRONG);
    });
  });

  describe('2개의 규칙을 만족하면 암호는 보통이다 [성공]', () => {
    it.each([['ab12!@A'], ['Ab12!c']])(
      '길이가 8글자 미만이고 나머지 조건은 만족한다. Password: %s',
      (password) => {
        // given
        const meter = new PasswordStrengthMeter();

        // when
        const sut = meter.meter(password);

        // then
        expect(sut).toBe(PasswordStrength.NORMAL);
      },
    );
  });

  it('숫자를 포함하지 않고 나머지 조건은 만족한다.', () => {
    // given
    const meter = new PasswordStrengthMeter();
    const password = 'ab!@ABqwer';

    // when
    const sut = meter.meter(password);

    // then
    expect(sut).toBe(PasswordStrength.NORMAL);
  });
});
