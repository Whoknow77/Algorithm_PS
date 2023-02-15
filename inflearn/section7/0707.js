function solution(arr) {
  arr.sort((next, prev) => {
    if (prev[0] < next[0]) {
      return 0;
    }
    if (prev[0] === next[0]) {
      if (prev[1] < next[1]) {
        return 0;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
  return arr;
}

// 정답
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
