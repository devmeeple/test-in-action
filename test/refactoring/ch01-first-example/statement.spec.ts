import { statement } from '../../../src/refactoring/ch01-first-example/to-be/statment';

describe('공연료 청구서 출력 프로그램', () => {
  it('[성공] 청구서를 출력한다.', () => {
    // given
    const invoice = {
      customer: 'BigCo',
      performances: [
        { playID: 'hamlet', audience: 55 },
        { playID: 'as-like', audience: 35 },
        { playID: 'othello', audience: 40 },
      ],
    };
    const plays = {
      hamlet: { name: 'Hamlet', type: 'tragedy' },
      'as-like': { name: 'As You Like It', type: 'comedy' },
      othello: { name: 'Othello', type: 'tragedy' },
    };

    const expected = `청구 내역 (고객명: BigCo)\n  Hamlet: $650.00 (55석)\n  As You Like It: $580.00 (35석)\n  Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n`;

    // when
    const sut = statement(invoice, plays);

    // then
    expect(sut).toBe(expected);
  });

  it('[실패] 알 수 없는 장르는 에러가 발생한다.', () => {
    // given
    const invoice = {
      customer: '박찬욱',
      performances: [{ playID: 'chicago', audience: 100 }],
    };

    const plays = {
      chicago: { name: 'Chicago', type: 'musical' },
    };

    // when + then
    expect(() => statement(invoice, plays)).toThrow('알 수 없는 장르: musical');
  });
});
