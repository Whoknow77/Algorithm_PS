function solution(arr) {
  const sum = arr
    .sort((a, b) => b - a)
    .map((num) =>
      num
        .toString()
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
    );
  const index = sum.indexOf(Math.max.apply(null, sum));
  return arr[index];
}

// 정답
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [137, 2355, 12345, 40, 521, 128, 123];
console.log(solution(arr));
