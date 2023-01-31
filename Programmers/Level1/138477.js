function solution(k, score) {
  const honor = [];
  const min = [];

  for (let i = 0; i < k; i++) {
    honor.push(score[i]);
    min.push(Math.min.apply(null, honor));
  }

  for (let i = k; i < score.length; i++) {
    honor.sort((a, b) => b - a);
    if (score[i] > honor[honor.length - 1]) {
      honor.pop();
      honor.push(score[i]);
    }
    min.push(Math.min.apply(null, honor));
  }
  return min.filter((num) => Number.isInteger(num));
}

// 다른 사람 풀이

function solution2(k, score) {
  const answer = [];
  const announced_score = [];

  for (let i = 0; i < score.length; i++) {
    announced_score.push(score[i]);
    announced_score.sort((a, b) => b - a);

    if (announced_score.length >= k) answer.push(announced_score[k - 1]);
    else answer.push(announced_score[announced_score.length - 1]);
  }

  return answer;
}

console.log(solution2(9, [10, 30, 40, 3, 0, 20, 4]));
