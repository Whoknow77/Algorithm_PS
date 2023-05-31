function solution(n) {
  const arr = Array(n)
    .fill()
    .map((v, i) => i + 1);
  console.log(arr);
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === n) answer++;
    while (sum >= n) {
      sum -= arr[lt++];
      if (sum === n) answer++;
    }
  }
  return answer;
}

console.log(solution(15));
