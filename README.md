# Algorithm_PS

## 자바스크립트를 사용해 푼 알고리즘 문제 풀이를 저장하는 곳 입니다.

<br>

## ⚡ : 풀지 못한 문제(시간내에 못 푼 문제 포함)

## ✔️ : 푼 문제

<br>

---

## 📁 프로그래머스

- ### [Level 0](./Programmers/level0/README.md)
- ### [Level 1](./Programmers/Level1/README.md)

## 인프런 강의(김태원님)

- ### [Section 1](./inflearn/section1/README.md)
- ### [Section 2(1,2 차원 탐색)](./inflearn/section2/README.md)
- ### [Section 3(문자열 탐색)](./inflearn/section3/README.md)
- ### [Section 4(완전탐색)](./inflearn/section4/README.md)
- ### [Section 5(효율성)](./inflearn/section5/README.md)
- ### [Section 6(스택, 큐)](./inflearn/section6/README.md)
- ### [Section 7(정렬, 그리디, 결정)](./inflearn/section7/README.md)
- ### [Section 8(재귀함수와 완전탐색)](./inflearn/section8/README.md)
- ### [Section 9(그래프와 탐색)](./inflearn/section9/README.md)
- ### [Section 10(DP)](./inflearn/section10/README.md)

## 백준

#### 입력

```js
// 1. 입력값이 한 개일 때(한 줄)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/
const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

- ### [심화 1](./Baekjoon/intense/README.md)
- ### [심화 2](./Baekjoon/intense2/README.md)
- ### [큐, 덱](./Baekjoon/queue,deque/README.md)
