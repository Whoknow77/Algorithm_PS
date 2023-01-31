function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((item) => {
      if (item <= budget) {
        budget -= item;
        return true;
      }
    }).length;
}

// 다른 사람 풀이

function solution2(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      //  ((budget -= price) >= 0) => 1 : 0
      return count + ((budget -= price) >= 0);
    }, 0);
}
