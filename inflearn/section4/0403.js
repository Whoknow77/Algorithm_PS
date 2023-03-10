// 16가지 경우의수 모두 조사
function solution(test) {
  let sum = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) {
            pi = s;
          }
          if (test[k][s] === j) {
            pj = s;
          }
        }
        if (pi < pj) {
          cnt++;
        }
      }
      if (cnt === m) {
        sum++;
      }
    }
  }
  return sum;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
