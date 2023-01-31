// 세수의 합이 중복되는 경우가 있어도 중복 카운트 하는 문제
function solution(nums) {
  let numArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        numArray.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return numArray.filter((num) => isPrime(num));
}

function isPrime(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr[n];
}

// 다른 사람 풀이
// n이 2~n제곱근 사이에 나누어 떨어지는 경우가 있으면 소수가 아님
// ex => 101은 2~10사이에 약수가 없음

function isPrime2(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
