function solution(prices) {
  answer = Array.from({ length: prices.length }, () => 0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answer[i] += 1;
      // 가격이 떨어진 경우
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
