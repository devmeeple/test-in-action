import { PasswordMeter } from '../src/password/password-meter';
import { PasswordStrength } from '../src/password/password-strength.enum';

describe('암호 검사기', () => {
  // 검증하려는 대상 sut
  const passwordMeter = new PasswordMeter();

  const assertPasswordStrength = (
    password: string,
    expected: PasswordStrength,
  ) => {
    const result = passwordMeter.meter(password);
    expect(result).toEqual(expected);
  };

  it('null 입력하면 예외가 발생한다', () => {
    // given

    // when

    // then
    expect(() => passwordMeter.meter(null)).toThrow(Error);
  });

  it('빈 값을 입력하면 에러 발생', () => {
    // given

    // when

    // then
    expect(() => passwordMeter.meter('')).toThrow(Error);
  });

  it('모든 조건을 충족하면 강함', () => {
    // expect
    assertPasswordStrength('abcABC123', PasswordStrength.STRONG);
    assertPasswordStrength('123abcABC', PasswordStrength.STRONG);
  });

  it('길이가 8 미만, 다른 조건 충족', () => {
    // expect
    assertPasswordStrength('abcC123', PasswordStrength.NORMAL);
    assertPasswordStrength('123abcC', PasswordStrength.NORMAL);
    assertPasswordStrength('Cabc12', PasswordStrength.NORMAL);
  });

  it('대문자 없음, 다른 조건 충족', () => {
    assertPasswordStrength('abcd1234', PasswordStrength.NORMAL);
    assertPasswordStrength('1234abcdefw', PasswordStrength.NORMAL);
  });

  it('숫자 없음, 다른 조건 충족', () => {
    assertPasswordStrength('ABCDabcde', PasswordStrength.NORMAL);
    assertPasswordStrength('abcdeABCDEF', PasswordStrength.NORMAL);
  });

  it('길이만 충족한다', () => {
    assertPasswordStrength('helloworld', PasswordStrength.WEAK);
  });

  it('대문자만 충족한다', () => {
    assertPasswordStrength('abcABC', PasswordStrength.WEAK);
  });

  it('숫자만 충족한다', () => {
    assertPasswordStrength('abc123', PasswordStrength.WEAK);
  });

  it('아무것도 충족하지 않는다', () => {
    assertPasswordStrength('awef', PasswordStrength.WEAK);
  });
});
