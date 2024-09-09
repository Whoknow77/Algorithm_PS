function solution(targets) {
  let answer = 0,
    prev = -1;
  targets.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (prev <= start) {
      prev = end;
      answer++;
    }
  }
  return answer;
}

// 시작점을 기준으로 내림차순 or 끝점을 기준으로 오름차순(그리디하게)

console.log(solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]))

