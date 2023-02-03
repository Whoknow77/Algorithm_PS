function solution(n, array) {
  return array.filter((item) => item.toString().split("")[1] === n.toString())
    .length;
}

// 정답
function solution(day, array) {
  let answer = 0;
  for (let x of array) {
    if (x % 10 === day) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
