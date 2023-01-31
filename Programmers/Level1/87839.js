function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// 다른 사람 풀이

function solution2(n) {
  let x = 1;
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

console.log(solution(10));
