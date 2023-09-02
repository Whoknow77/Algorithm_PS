// function solution(numbers) {
//   const answer = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     let j = i + 1;
//     while (numbers[i] >= numbers[j]) {
//       j++;
//     }
//     if (j === numbers.length) {
//       answer.push(-1);
//     } else {
//       answer.push(numbers[j]);
//     }
//   }
//   answer.push(-1);
//   return answer;
// }

// 스택 풀이

function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
    stack;
  }
  return answer;
}

console.log(solution([9, 1, 5, 3, 6, 2]));
