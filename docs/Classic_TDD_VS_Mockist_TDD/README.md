# Classist VS Mockist

흔히 고전파와 런던파라고 이야기한다. 테스트를 작성할 때 의존하는 대상이 많을 경우 `Test double`을 활용해서 테스트를 해결하는 경우가 많다.

> 배경지식
> * Test Double: 가짜 객체
> * SUT(System Under Test): 테스트 대상 클래스
> * 협력객체(Collaborators): SUT가 의존하는 클래스

## 단위란?

* Low-Level
* 일반적인 도구 사용
* 빠르다

* 상태를 검증할 것인가? VS 행위를 검증할 것인가?
* Fixture VS Mock

## 참고자료

* [[10분 테코톡] 더즈, 티키의 Classic TDD VS Mockist TDD](https://www.youtube.com/watch?v=n01foM9tsRo&t=1214s)