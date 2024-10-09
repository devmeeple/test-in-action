---
title: "[Chapter 01] 리팩터링: 첫 번째 예시"
description: ""
date: 2024-10-08 14:31:24
update: 2024-10-08 14:31:24
tags:
  - JavaScript
series: 
---

# 공연료 청구서 출력 프로그램

## 🚀 기능 요구사항

- 공연 요청은 연극의 장르와 관객 규모를 기반으로 비용을 책정한다.
    - 장르: 비극(tragedy), 희극(comedy)
- 다음 구매 시 할인 가능한 포인트를 제공한다.

## ✍🏻 입출력

### ⌨️ 입력

1. `invoices.json`: 공연료 청구서
2. `plays.json`: 연극 정보

```json
[
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
]
```

```json
{
  "hamlet": {
    "name": "Hamlet",
    "type": "tragedy"
  },
  "as-like": {
    "name": "As You Like It",
    "type": "comedy"
  },
  "othello": {
    "name": "Othello",
    "type": "tragedy"
  }
}
```
