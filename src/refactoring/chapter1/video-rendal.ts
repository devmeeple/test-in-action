/**
 * 비디오 대여점 영수층 출력 프로그램
 * @param invoice 공연료 청구서 데이터
 * @param plays 연극 정보
 */

/**
 * 리팩토링 단계
 * 1) 테스트 준비: 다양한 장르의 공연들로 구성된 공연료 청구서 데이터를 준비하고 문자열 형태로 응답값을 선언해둔다.
 * 2) 함수 쪼개기: 부품을 분해하여 조립한다. 분해할 때 변수의 유효범위를 주의해야 한다. (전역변수, 지역변수)
 *    해당 변수의 값 변경 여부도 중요하다. 함수 안에서 값이 변경되는 변수는 조심해서 다뤄야 한다.
 */

export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (const perf of invoice.performances) {
    const play = plays[perf.playID];
    const thisAmount = amountFor(play, perf);

    // 포인트를 적립한다
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다
    result += `${play.name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점`;
  return result;
}

/**
 * 공연 요금 계산
 * @param play
 * @param perf
 */
function amountFor(play, perf) {
  let thisAmount = 0;

  switch (play.type) {
    case 'tragedy': // 비극
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case 'comedy': // 희극
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르 ${play.type}`);
  }
  return thisAmount;
}
