function solution(numbers) {
  let answer = 0;
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] * numbers[j]);
    }
  }
  answer = Math.max.apply(null, result);
  return answer;
}

function solution2(numbers) {
  return Math.max.apply(
    null,
    numbers.map((a, b) => a * b)
  );
}
