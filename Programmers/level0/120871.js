function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i.toString().includes("3")) {
      n++;
    }
  }
  return n;
}
