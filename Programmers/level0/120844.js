function solution(numbers, direction) {
  if (direction === "right") {
    let first = numbers[numbers.length - 1];
    numbers = numbers.map((num, idx) => (num = numbers[idx - 1]));
    numbers.splice(0, 1, first);
    return numbers;
  } else if (direction === "left") {
    let last = numbers[0];
    numbers = numbers.map((a, b) => (a = numbers[b + 1]));
    numbers.splice(numbers.length - 1, 1, last);
    return numbers;
  }
}
// 다른 사람 풀이

function solution2(numbers, direction) {
  let answer = numbers;
  direction === "right"
    ? answer.unshift(answer.pop())
    : answer.push(answer.shift());

  return answer;
}
