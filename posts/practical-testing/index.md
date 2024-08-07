# Practical Testing: 실용적인 테스트 가이드

# 0. Intro

## 강의소개

- 테스트 코드가 필요한 이유
- 좋은 테스트 코드란 무엇인가?
- 실무처럼 작성하기
- 오답 피하기

## 어떻게 학습하면 좋을까?

무엇을 모르는지 아는것 만큼 호율성을 끌어올리는 방법은 없다.

- 검정색 깃발: 함께 학습한 키워드
- 주황색 깃발: 추가 학습을 위한 키워드

# 1. 테스트는 왜 필요할까?

## 테스트는 왜 필요할까?

도구를 사용할 때 등장배경과 어떻게 사용하는지 알아야 한다. 테스트를 짜야하는 이유가 명확하지 않으면 '귀찮은 작업'으로 끝난다.

소프트웨어는 변화한다. 회귀버그는 무섭다. 회귀버그를 방지하기 위해 테스트를 추가한다. 결국 테스트를 작성하는 이유는 '안정감'이다.
사람은 실수를 하기 마련이다. 수동 테스트도 한계가 있다.

소프트웨어가 변화하면 테스트 코드도 커진다. 만약 테스트 코드를 제대로 작성하지 못했다면 어떤 일이 일어날까? 안정감을 위해 추가한 작업이
불안과 스트레스가 되어 돌아온다.

효율을 중시한다. 하지만 가까이 보면 느리지만, 멀리 보면 가장 빠르다. 귀찮다. 하지만 해야 한다.

# 2. 단위 테스트

## 샘플 프로젝트 소개 & 개발 환경 안내

초간단 카페 키오스크 시스템을 구현한다.

## 프로젝트 세팅

의존성을 관리할 때 비슷한 내용끼리 그룹화하고 주석으로 정리한다.

## 수동 테스트 VS 자동화된 테스트

### 요구사항

- 주문 목록에 음료추가/삭제하기
- 주문 목록 전체 지우기
- 주문 목록 총금액 계산하기
- 주문 생성하기

## 테스트케이스 세분화 하기

### 요구사항

- 한 종류의 음료 여러 잔을 한 번에 담는 기능

요구사항이 추가됐다. 요구사항을 마주쳤을 때 질문할 줄 알아야 한다. 드러나지 않은 부분이 있을 수 있다. 염두하고 개발한다. 질문을 통해 이해관계를 맞춘다.
'테스트 케이스 세분화'란 요구사항을 만족시키는 상황과 만족시키지 않는 예외상황을 구분, 정의하는 것이다. 예를 들어 '경곗값 테스트'를 도입한다. 범위(이상, 이하, 초과, 미만), 구간, 날짜를 테스트한다.

## 테스트하기 어려운 영역을 분리하기

### 요구사항

- 영업시간(10:00~22:00) 외에는 주문을 생성할 수 없다.

제어할 수 없는 영역을 밖으로 분리한다. 테스트하기 어려운 코드는 냄새를 풍긴다. 주문을 생성하는 `createOrder`를 구현할 때 현재시간에 의존했다. 처음에는 함수 안에서 현재시간을 구했다.
결국 테스트하기 어려운 코드가 됐다. 영업시간 외에 테스트를 돌리면 실패한다. 문제를 해결하기 위해서는 설계를 변경해야 한다. 의존성을 매개변수(Parameter)로 분리하고 주입받았다.

```typescript
// bad: 테스트하기 어려운 코드
class CafeKiosk {
  createOrder() {
    const currentDateTime = LocalDateTime.now();
    const currentTime = currentDateTime.toLocalTime();

    if (
      currentTime.isBefore(CafeKiosk.SHOP_OPEN_TIME) ||
      currentTime.isAfter(CafeKiosk.SHOP_CLOSE_TIME)
    ) {
      throw new Error(
        '영업시간이 아닙니다. (10:00~22:00) 관리자에게 문의하세요',
      );
    }

    return new Order(currentDateTime, this._beverages);
  }
}

// good: 테스트하기 좋은 코드
class CafeKiosk {
  createOrder(currentDateTime: LocalDateTime) {
    const currentTime = currentDateTime.toLocalTime();

    if (
      currentTime.isBefore(CafeKiosk.SHOP_OPEN_TIME) ||
      currentTime.isAfter(CafeKiosk.SHOP_CLOSE_TIME)
    ) {
      throw new Error(
        '영업시간이 아닙니다. (10:00~22:00) 관리자에게 문의하세요',
      );
    }

    return new Order(currentDateTime, this._beverages);
  }
}
```

테스트하기 어려운 코드는 무엇일까. 매번 값이 바뀌는 값(현재날짜, 사용자 입력, 랜덤)과 다른 시스템에 영향을 받는 코드는 테스트하기 어렵다. 테스트하기 어려울 땐 어떻게 의존성을 주입, 역전하는
설계를 할지 고민한다. 단숨에 시야가 트이지 않는다. 시야를 길러야 한다.

**<참고 자료>**

- [박우빈 'Practical Testing: 실용적인 테스트 가이드'](https://inf.run/YLRXA)
- [향로 '현실 세계의 속성에 의존하지 않기'](https://jojoldu.tistory.com/672)
- [향로 '1. 테스트하기 좋은 코드 - 테스트하기 어려운 코드'](https://jojoldu.tistory.com/674)
- [향로 '2. 테스트하기 좋은 코드 - 제어할 수 없는 코드 개선'](https://jojoldu.tistory.com/676)
