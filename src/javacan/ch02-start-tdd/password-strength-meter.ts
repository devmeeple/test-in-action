import { PasswordStrength } from './password-strength.enum';

export class PasswordStrengthMeter {
  meter(password: string) {
    if (!password?.trim()) {
      return PasswordStrength.INVALID;
    }
    const metCounts = this.getMetCriteriaCounts(password);

    if (metCounts <= 1) {
      return PasswordStrength.WEAK;
    }

    if (metCounts === 2) {
      return PasswordStrength.NORMAL;
    }

    return PasswordStrength.STRONG;
  }

  private getMetCriteriaCounts(password: string) {
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
    return metCounts;
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
