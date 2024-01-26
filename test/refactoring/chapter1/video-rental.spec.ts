import { statement } from '../../../src/refactoring/chapter1/video-rendal';

describe('비디오 대여점 영수증 출력 프로그램', () => {
  const invoice = {
    customer: 'BigCo',
    performances: [
      { playID: 'hamlet', audience: 55 },
      { playID: 'as-like', audience: 35 },
      { playID: 'othello', audience: 40 },
    ],
  };

  const play = {
    hamlet: { name: 'Hamlet', type: 'tragedy' },
    'as-like': { name: 'As You Like It', type: 'comedy' },
    othello: { name: 'Othello', type: 'tragedy' },
  };

  it('should return', () => {
    // given
    const expected =
      '청구내역 (고객명: BigCo)\n' +
      'Hamlet: $650.00 (55석)\n' +
      'As You Like It: $580.00 (35석)\n' +
      'Othello: $500.00 (40석)\n' +
      '총액: $1,730.00\n' +
      '적립 포인트: 47점';

    // when + then
    expect(statement(invoice, play)).toBe(expected);
  });
});
