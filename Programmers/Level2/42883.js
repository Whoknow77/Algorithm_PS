// 왼쪽에서부터 순차적으로 숫자를 탐색하면서 큰수가 나오는 경우 이전의 작은수들은 모두 삭제
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  // 9876543
  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}

console.log(solution("4177252841"));
