function solution(number, limit, power) {
  const arr = Array(number)
    .fill(1)
    .map((a, b) => a + b);
  return arr
    .map((num) => (f(num) > limit ? power : f(num)))
    .reduce((a, b) => a + b);
}

// 약수 구하기(빠르게 구해야함)

// 제곱근
function f(num) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum++;
      if (num / i != i) sum++;
    }
  }
  return sum;
}

// 다른 사람 풀이

// 역 제곱근
function solution2(number, limit, power) {
  let answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++; // 제곱근일 때
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

console.log(solution2(10, 3, 2));
