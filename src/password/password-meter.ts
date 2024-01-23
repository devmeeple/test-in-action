import { PasswordStrength } from './password-strength.enum';

export class PasswordMeter {
  meter(password: string): PasswordStrength {
    if (!password) {
      throw new Error();
    }
    const criterialCount = this.countPasswordCriteria(password);

    if (criterialCount === 0 || criterialCount === 1) {
      return PasswordStrength.WEAK;
    }

    if (criterialCount === 2) {
      return PasswordStrength.NORMAL;
    }

    return PasswordStrength.STRONG;
  }

  private countPasswordCriteria(password: string) {
    let criteriaCount = 0;
    if (this.isLongerThanEight(password)) criteriaCount++;
    if (this.containsUpperCase(password)) criteriaCount++;
    if (this.containsDigit(password)) criteriaCount++;
    return criteriaCount;
  }

  /**
   * 비밀번호 길이가 8이상인지 검증
   * @param password
   * @private
   */
  private isLongerThanEight(password: string) {
    return password.length >= 8;
  }

  /**
   * 대문자를 포함하는지 검증
   * @param password
   * @private
   */
  private containsUpperCase(password: string) {
    for (const ch of password) {
      if (ch >= 'A' && ch <= 'Z') {
        return true;
      }
    }
    return false;
  }

  /**
   * 숫자가 포함되었는지 검증
   * @param password
   * @private
   */
  private containsDigit(password: string) {
    for (const ch of password) {
      if (ch >= '0' && ch <= '9') {
        return true;
      }
    }
    return false;
  }
}
