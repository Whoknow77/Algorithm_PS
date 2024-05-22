function solution(arr) {
  let sumRow = [];
  let sumCol = [];
  let sumleftCross = [];
  let sumrightCross = [];
  let sumleft = 0;
  let sumright = 0;
  // 가로 세로
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    sumRow.push(arr[i].reduce((a, b) => a + b, 0)); // 가로
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i]; // 세로
      if (i === j) {
        // 왼 대각
        sumleft += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        // 오른 대각
        sumright += arr[i][j];
      }
    }
    sumleftCross.push(sumleft);
    sumrightCross.push(sumright);
    sumCol.push(sum);
  }
  const maxNum = [...sumRow, ...sumCol, ...sumleftCross, ...sumrightCross];
  return Math.max.apply(null, maxNum);
}

// 정답
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0); // 행,왼대각 / 열,오른대각
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
