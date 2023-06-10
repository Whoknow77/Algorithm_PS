function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [...s];
    arr.push(arr.shift()); // 회전
    s = arr.join("");
    if (isAnswer(s)) {
      count++;
    }
  }
  return count;
}

// 문자열 검사 함수(Stack)
function isAnswer(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    // 괄호가 비어있을때 삽입
    // 현재 탐색중인 값의 아스키 코드 - 스택의 맨 위에 있는 값의 아스키 코드 = 1 or 2 일때 삭제
    if (
      !stack.length ||
      !(
        str[i].charCodeAt() - stack[stack.length - 1].charCodeAt() === 1 ||
        str[i].charCodeAt() - stack[stack.length - 1].charCodeAt() === 2
      )
    ) {
      stack.push(str[i]);
    } else {
      stack.pop();
    }
  }
  // 스택이 비어있으면 True, 아니면 False를 반환
  return stack.length ? 0 : 1;
}

// 다른 풀이
function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;
  const mapping = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{")
        stack.push(rotate[j]);
      else {
        const last = stack.pop();
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}

console.log(solution("}]()[{"));
