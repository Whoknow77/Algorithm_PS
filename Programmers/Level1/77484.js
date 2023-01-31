// 최고 : 중복 회수 + 0의 개수
// 최저 : 중복 회수
function solution(lottos, win_nums) {
  let zeroNumber = 0;
  let sum = 0;
  lottos.map((num) => {
    if (num === 0) {
      zeroNumber++;
      return;
    }
    if (win_nums.includes(num)) {
      sum++;
    }
  });
  // 로또 번호가 애초에 겹치거나 하나 겹치는 경우 => 최고는 0의 개수를 반영해서 계산하고, 최저는 무조건 꼴등
  // 거기다 0이 없는 경우 => 무조건 꼴등
  return sum === 0 || sum === 1
    ? zeroNumber === 0
      ? [6, 6]
      : [7 - (zeroNumber + sum), 6]
    : [7 - (zeroNumber + sum), 7 - sum];
}

// 다른 사람 풀이
// 최고 : 중복 회수 + 0의 개수
// 최저 : 중복 회수
function solution2(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

// min이나 max가 0이나 1일때를 미리 조건에서 뺌
function solution3(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}

console.log(solution2([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
