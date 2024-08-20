# 테스트 주도 개발 시작하기

Test-Driven Development 작동하는 깔끔한 코드를 만드는 데 필요한 습관

**<참고 자료>**

* [최범균 『테스트 주도 개발 시작하기』](https://product.kyobobook.co.kr/detail/S000001248962)

# 1. TDD 개발 준비

Jest 환경을 이미 설정해서 생략했다.

# 2. TDD 시작

생산성을 높이기 위해 'TDD(Test-Driven Development)'를 선택했다.

## TDD란?

테스트, 구현 순서로 진행한다. 기능을 검증하는 테스트 코드를 먼저 작성하고 테스트를 통과시키기 위해 개발을 진행한다.

## TDD 예: 암호 검사기

암호 검사기는 문자열을 검사해서 규칙을 준수하는지에 따라 '약함', '보통', '강함'으로 구분한다.

* 길이가 8글자 이상이어야 한다.
* 0부터 9 사이의 숫자를 포함한다.
* 대문자를 포함한다.
* 규칙을 모두 만족하면 암호는 강함이다.
* 2개의 규칙을 만족하면 암호는 보통이다.
* 1개의 규칙을 만족하면 암호는 약함이다.

### 코드 정리: 테스트 코드 정리

테스트 코드도 코드이기 때문에 유지보수 대상이다. 테스트 메서드에서 발생하는 중복을 알맞게 제거하거나 의미가 잘 드러나게 수정할 필요가 있다.

> 우선 강의에서 제공하는 방식으로 구현했지만 중복을 메서드로 분리하는 방식은 동의하지 않는다. 오히려 가독성을 해치는 것 같다.
> 테스트를 보고 명확하게 한눈에 들어오기보단 또 다른 메서드를 이해해야 한다. 부자연스럽다고 생각한다. 이 정도 중복은 허용되는 범위 아닐까.
> 위 내용은 '단위 테스트'를 읽을 때 다시 한번 검증해야겠다.

하지만 테스트 코드의 중복을 무턱대고 제거하면 안 된다. 중복을 제거한 뒤에도 가독성이 떨어지지 않고 수정이 용이한 경우에만 중복을 제거해야 한다.
중복을 제거한 뒤 오히려 관리가 어려워진다면 되돌리자.

### 네 번째 테스트: 값이 없는 경우

값을 입력하지 않으면 프로그램은 어떻게 동작해야 자연스러울까.

1. 명시적인 방법으로 비교하기

```typescript
if (password === null || password === undefined || password === '') {
  return PasswordStrength.INVALID;
}
```

2. Optional Chaining, Nullish Coalescing 연산자 활용하기

```typescript
if (!password?.trim()) {
  return PasswordStrength.INVALID;
}
```

### 다섯 번째 테스트: 대문자를 포함하지 않고 나머지 조건은 만족하는 경우

```typescript
if (char === char.toUpperCase() && char !== char.toLowerCase()) {
  return `${char}는 대문자 입니다.`;
}
```

Java는 Character.isUpperCase(c)를 통해 문자열이 모두 대문자인지 소문자인지 검증한다. 반면 JavaScript는 위와 같이 작성한다.

### 여섯 번째 테스트: 길이가 8글자 이상인 조건만 만족하는 경우

- if 절의 위치를 이동시켜서 로직의 응집도를 높인다. 관련 있는 코드를 모은다.

### 일곱 번째 테스트: 숫자 포함 조건만 만족하는 경우

- 리팩터링이 필요한 코드가 보인다. 그런데 아이디어가 떠오르지 않는다.

> 만화 '나루토'가 생각났다. 흔히 리팩터링을 잘 하기 위해서는 '냄새를 맡는 능력'이 필요하다고 한다. 그런데 더 좋은 예시는 '사륜안 개안'이라고 생각한다.

### 여덟 번째 테스트: 대문자 포함 조건만 만족하는 경우

- 여섯 번째, 일곱 번째, 여덟 번째 테스트를 조건에 맞게 부정을 추가하여 작성한다.

```typescript
// 각 조건을 만족하는 상황을 구현
// 1. 길이가 8 이상인 조건만 만족하는 경우 통과한다
if (lengthEnough && !containsNumber && !containsUpp) {
  return PasswordStrength.WEAK;
}

// 2. 숫자 포함 조건만 만족하는 경우 통과한다
if (!lengthEnough && containsNumber && !containsUpp) {
  return PasswordStrength.WEAK;
}

// 3. 대문자 조건만 만족하는 경우 통과한다
if (!lengthEnough && !containsNumber && containsUpp) {
  return PasswordStrength.WEAK;
}

// NEW: 조건을 카운트 하는 변수를 선언하고, 값이 변경되면 반환
let metCounts = 0;
const lengthEnough = password.length >= 8;
if (lengthEnough) {
  metCounts += 1;
}

const containsNumber = this.meetsContainingNumberCriteria(password);
if (containsNumber) {
  metCounts += 1;
}

const containsUpp = this.meetsContainingUppercaseCriteria(password);
if (containsUpp) {
  metCounts += 1;
}

if (metCounts === 1) {
  return PasswordStrength.WEAK;
}
```

이전에는 각 조건을 만족하는 상황을 구현했다. 그런데 카운트 하는 변수 `metCounts`를 선언하고 값이 변경되었다면 '약함'을 반환하도록 리팩터링 했다.

> 구현하기 위해 작성했던 코드가 이렇게 이해하기 쉽게 변경될 수 있다는게 놀랍다. 어서 빨리 리팩터링 2판을 꺼내고 싶다.

### 아홉 번째 테스트: 아무 조건도 만족하지 않는 경우

**<참고 자료>**

* [DaleSeo 'Jest로 파라미터화 테스트하기: test.each(), describe.each()'](https://www.daleseo.com/jest-each/)
* [Baeldung Check if a String Is All Uppercase or Lowercase in Java](https://www.baeldung.com/java-check-string-uppercase-lowercase)
