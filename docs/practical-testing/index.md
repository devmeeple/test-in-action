# Practical Testing: 실용적인 테스트 가이드

## 수강평

맛있는 음식이 있다면, 이웃에게 음식을 나누고 싶어 한다. 강의에서 이런 감정을 느낄 수 있다. 대신 비용을 부담해서라도 친구에게 나눠주고 싶은 강의다.
책이 아닌 동영상 강의에서 '따뜻함'을 느낀 건 오랜만이다. 손에 꼽는다.

추상화되어있던 개념을 구체화할 수 있도록 도와준다. 테스트를 떠올릴 때 한 번씩 했던 고민을 구체적으로 풀어주신다. 디스크 조각 모음과 같다.
더불어, 커뮤니티에 좋은 질문과 답변이 많다. 강의를 넘어 숙성된 장맛을 느끼고 싶다면 둘러보자.

테스트 코드를 공부할 때 '어렵다'라고 느끼는 상황이 많았다. 문제는, '당장 필요하지는 않을 것 같다' 어림짐작하며 부채로 쌓았다.
우빈 님 강의는 쌓아둔 기술 부채를 상환할 수 있도록 손을 내어줬다.

현재, 약 2000명이 수강 중인 강의가 20000명, 그 이상이 될 때까지 함께하면 좋겠다. 앞날에 앞장서고 싶다.

- 한 번에 몰아듣지 않고 조금씩이라도 나눠서 정진하시길 바랍니다. 몰아듣는 악행을 저지른 사람 1인
- 강의에서 중간에 나누는 대화가 사람마다 고민하는 주제가 있다. 예를 들어 `@Transactional`이 대표적이다. 정답이 없는 문제다. 무엇이 더 나은 답일지 의견을 듣고
  선택하는 기준을 만든 후 나누면 좋겠다.
- 띄엄띄엄 듣기보단 일정 기간을 잡고 부담스럽지 않은 양을 규칙적으로 들었을 때 조금 더 매력을 느끼는 강의라고 생각한다.
- 'Test Fixture 클렌징'덕분에 데이터베이스의 필요성과 재미를 느꼈다.
- 전체 테스트를 실행할 때 서버가 몇 번 띄워졌는지 확인하는 방식이 직관적이어서 재밌었다.
- '다음 강의 설문조사'에서 편집에 대해 의견을 여쭤봤는데 정정한다. 사과하라. 풀영상이 맞다. 어떤 생각을 하는지 적나라하게 드러난다.
- 키워드 정리에 섹션을 만들 때 의도가 담겨있어서 좋다.

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

# 4. TDD: Test Driven Development

TDD(Test Driven Development)는 구현 과정을 테스트가 주도하는 방법이다. 프로덕션 코드보다 테스트 코드를 먼저 작성한다.
Red, Green, Refactor 과정을 거친다. 실패하고 통과하는 최소한의 테스트를 작성한 후 리팩터링 진행하는 흐름을 가진다.

## 피드백

> 학습을 할 때 피드백을 강조한다. 코드도 마찬가지다. 작성하고 있는 코드가 어떤 위험에 노출되어 있는지 TDD를 통해 피드백을 얻는다.

### 기능 -> 테스트 작성

- 테스트 자체의 누락 가능성
- 특정 테스트 케이스만 검증할 가능성(해피 케이스)
- 잘못된 구현을 다소 늦게 발견할 가능성

### 테스트 -> 기능 작성

- 복잡도가 낮은, 테스트 가능한 코드로 구현할 수 있게 한다. (유연하고 유지 보수가 쉬운)
- 쉽게 발견하기 어려운 에지(Edge) 케이스를 놓치지 않게 돕는다.
- 구현 시 빠른 피드백을 얻는다.
- 과감한 리팩터링이 가능해진다.

## 관점의 변화

TDD는 사고를 변화시킨다. 테스트와 구현 코드가 상호작용하며 애플리케이션을 만든다. 클라이언트 관점에서 피드백을 준다.
물론 TDD가 만병통치약은 아니다. 상황에 다른 방법을 시도한다. 하지만 TDD는 의식적으로 계속 노력해야 사용할 수 있다.

## 키워드 정리

- 애자일(Agile) 방법론 vs. 폭포수 방법론
- 익스트림 프로그래밍(XP, extreme programming)
- 스크럼(Scrum), 칸반(Kanban)

> 폭포수는 일반적인 기업에서 주로 선택하는 방법이다. 이전 단계가 해결되어야 이후 문제를 해결할 수 있다. 과정이 폭포와 비슷하다고 하여 '폭포수 방법론'이라고 부른다.

애자일 방법론에서 익스트림 프로그래밍, 스크럼, 칸반이 파생됐다. 익스트림 프로그래밍을 실천하는 방법으로 TDD를 사용한다.

# 5. 테스트는 []다.

## 5.1 테스트는 []다.

### 문서

- 프로덕션 기능을 설명하는 테스트 코드 문서
- 다양한 테스트 케이스를 통해 프로덕션 코드를 이해하는 시각과 관점을 보완
- 과거에 경험했던 고민의 결과물을 팀 차원으로 승격시켜서 모두의 자산으로 공유한다.

> 개발 실력은 당연히 중요하고, 더불어 소프트웨어 스킬을 강조한다. 1인 개발자가 아니라면 보통 팀 단위로 일한다. 팀에게 어떤 영향을 줄지 생각하며 행동한다.

## 5.2 DisplayName을 섬세하게

```typescript
// bad
it('음료 1개 추가 테스트', () => {
});

// good
it('음료 1개를 추가하면 주문 목록에 추가된다', () => {
});
```

- 명사의 나열보단 문장으로 작성하자.
    - A는 B다. A라면 B가 아니고 C다.
- 테스트 동작의 결과를 기술한다.
    - 음료 1개를 추가할 수 있다. -> 음료를 1개 추가하면 주문 목록에 담긴다.
- 도메인 용어를 사용하여 한층 추상화된 내용을 전달한다. (메서드가 아닌 도메인 정책 관점으로 바라보기)
    - 특정 시간 이전에 주문을 생성하면 실패한다. -> 영업시간 이전에는 주문을 추가할 수 없다.
- 테스트 현상을 중점으로 기술하지 않는다. (도메인 용어로 사용한다)

## 5.3 BDD 스타일로 작성하기

### BDD(Behavior Driven Development)

- TDD에서 파생된 개발 방법
- 함수 단위의 테스트에 집중하는 방식이 아닌 시나리오를 기반한 테스트 케이스에 집중한다.
- 개발자가 아닌 사람이 봐도 이해할 수 있는 정도로 추상화를 진행한다.

### Given, When, Then

- Given: 시나리오 진행에 필요한 소품(객체, 값, 상태 등)
- When: 시나리오 행동 진행
- Then: 시나리오 진행에 대한 결과 명시, 검증
- DisplyName을 명확하게 작성할 수 있도록 돕는다.
    - 어떤 환경에서(Given), 진행했을 때(When), 상태가 변화한다(Then)

### 5.4 키워드 정리

- @DisplayName: 도메인 정책 용어를 사용한 명확한 문장으로 작성한다.
- Given, When, Then: 주어진 환경, 행동, 상태 변화를 기반으로 테스트 시나리오를 구성한다.
- TDD vs. BDD: 테스트 주도 개발, 행위 주도 개발
- JUnit vs. Spock: Spock은 BDD 프레임워크다.
