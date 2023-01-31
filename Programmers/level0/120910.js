function solution(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

// 다른 사람 풀이

function solution2(n, t) {
  return n << t;
}

function solution3(n, t) {
  return n * Math.pow(2, t);
}
