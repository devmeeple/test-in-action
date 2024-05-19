import { statement } from '../../src/refactoring/chapter1/statement';

describe('statement', () => {
  const invoiceJson = {
    customer: 'BigCo',
    performances: [
      { playID: 'hamlet', audience: 55 },
      { playID: 'as-like', audience: 35 },
      { playID: 'othello', audience: 40 },
    ],
  };

  const playsJson = {
    hamlet: { name: 'Hamlet', type: 'tragedy' },
    'as-like': { name: 'As You Like It', type: 'comedy' },
    othello: { name: 'Othello', type: 'tragedy' },
  };

  it('공연료 청구서를 출력한다', () => {
    // given
    const expected = `청구 내역 (고객명: BigCo)
Hamlet: $650.00 (55석)
As You Like It: $580.00 (35석)
Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;
    // when
    const sut = statement(invoiceJson, playsJson);

    // then
    expect(sut).toBe(expected);
  });
});
