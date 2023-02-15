function solution(size, arr) {
  let answer = Array(size).fill(0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        pos = i;
      }
    }
    // cache miss
    if (pos === -1) {
      // 맨 끝부터 당기기
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // cache hit
    else {
      for (let i = pos; i >= 1; i--) {
        // 히트난 지점부터 당기기
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        pos = i;
      }
    }
    // cache miss
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) {
        answer.pop();
      }
    }
    // cache hit
    else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
    answer[0] = x;
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
