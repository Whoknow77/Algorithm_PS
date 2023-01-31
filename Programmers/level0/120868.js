// 다른 사람 풀이

// https://school.programmers.co.kr/questions/41516

function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

function solution2(sides) {
  var answer = 0;
  sides.sort((a, b) => a - b);
  let line = 1;
  let small = sides[0];
  let large = sides[1];
  while (line <= large) {
    if (small + line > large) answer++;
    line++;
  }
  let max = large + 1;
  while (max < small + large) {
    max++;
    answer++;
  }
  return answer;
}

console.log(solution([11, 7]));
