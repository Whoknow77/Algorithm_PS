// 에라토스테네스의 체

// 주어진 숫자가 101일때 2부터 101의 제곱근(10) 까지 차례대로 각각의 배수들을 모두 삭제 시키고 남은 숫자가 소수(2~101사이의)이다.

function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  console.log(arr);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((item) => item === true).length;
}

console.log(solution(10));
