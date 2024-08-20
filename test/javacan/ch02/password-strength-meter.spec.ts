class PasswordStrengthMeter {
  meter(password: string) {
    // 빈 문자열을 검증한다
    if (!password?.trim()) {
      return PasswordStrength.INVALID;
    }

    let metCounts = 0;
    if (password.length >= 8) {
      metCounts += 1;
    }

    if (this.meetsContainingNumberCriteria(password)) {
      metCounts += 1;
    }

    if (this.meetsContainingUppercaseCriteria(password)) {
      metCounts += 1;
    }

    if (metCounts <= 1) {
      return PasswordStrength.WEAK;
    }

    if (metCounts === 2) {
      return PasswordStrength.NORMAL;
    }

    return PasswordStrength.STRONG;
  }

  private meetsContainingUppercaseCriteria(password: string) {
    for (const char of password) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return true;
      }
    }
    return false;
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
  INVALID,
  WEAK,
  NORMAL,
  STRONG,
}

describe('PasswordStrengthMeterTest', () => {
  const meter = new PasswordStrengthMeter();
  const expectStrength = (password: string, expStr: PasswordStrength) => {
    const sut = meter.meter(password);
    expect(sut).toBe(expStr);
  };

  it('입력을 하지 않으면 유효하지 않다. [실패]', () => {
    // given
    const password = null;

    // when

    // then
    expectStrength(password, PasswordStrength.INVALID);
  });

  describe('규칙을 모두 만족하면 암호는 강함이다. [성공]', () => {
    it.each([['ab12!@AB'], ['abc1!Add']])('Password: %s', (password) => {
      // given

      // when

      // then
      expectStrength(password, PasswordStrength.STRONG);
    });
  });

  describe('규칙 2개를 만족하면 암호는 보통이다. [성공]', () => {
    it.each([['ab12!@A'], ['Ab12!c']])(
      '길이가 8글자 미만이고 나머지 조건은 만족한다. Password: %s',
      (password) => {
        // given

        // when

        // then
        expectStrength(password, PasswordStrength.NORMAL);
      },
    );

    it('숫자를 포함하지 않고 나머지 조건은 만족한다.', () => {
      // given
      const password = 'ab!@ABqwer';

      // when

      // then
      expectStrength(password, PasswordStrength.NORMAL);
    });

    it('대문자를 포함하지 않고 나머지 조건은 만족한다. [성공]', () => {
      // given
      const password = 'ab12!@df';

      // when

      // then
      expectStrength(password, PasswordStrength.NORMAL);
    });
  });

  describe('규칙 1개를 만족하면 암호는 약함이다. [성공]', () => {
    it('길이가 8글자 이상인 조건만 만족한다. [성공]', () => {
      // given
      const password = 'abdefghi';

      // when

      // then
      expectStrength(password, PasswordStrength.WEAK);
    });

    it('숫자 포함 조건만 만족한다. [성공]', () => {
      // given
      const password = '12345';

      // when

      // then
      expectStrength(password, PasswordStrength.WEAK);
    });

    it('대문자 포함 조건만 만족한다. [성공]', () => {
      // given
      const password = 'ABZEF';

      // when

      // then
      expectStrength(password, PasswordStrength.WEAK);
    });
  });

  it('규칙을 만족하지 않는 비밀번호는 약함이다. [성공]', () => {
    // given
    const password = 'abc';

    // when

    // then
    expectStrength(password, PasswordStrength.WEAK);
  });
});
