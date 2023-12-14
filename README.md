# 테스트 주도개발(Test-Driven Development)

## 목표
- 테스트 주도개발(이하 TDD)가 어떤점에서 중요한지, 생산성에 변화를 체감한다.
## 규칙
- 어떤 코드를 작성하기 전에 실패하는 자동화된 테스트를 작성하라.
- 중복을 제거하라. 

## 개발환경
1) 필요한 패키지를 설치한다.
2) config(설정)파일을 초기화 한다.
   - typescript, ts-jest
```bash
yarn add --dev jest typescript ts-jest @types/jest
yarn tsc --init
yarn ts-jest config:init
```
- jest: 테스트 프레임워크
- typescript: 타입스크립트
- ts-jest: jest ts모듈
- @types/jest: jest types

## 참고
- [Jest 공식문서](https://jestjs.io/docs/getting-started)
- [ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file)