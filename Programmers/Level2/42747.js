function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b);
  for (let i = 1; i < citations.length + 1; i++) {
    const min = citations[citations.length - i];
    if (min >= i) {
      answer = i;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
// 6 5 3 1 0
// 1 2 3 4 5
