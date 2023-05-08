const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

const arr = input.toString().split(" ").map(Number);
const stack = [];
arr.forEach((num) => {
  if (stack.length === 0 || stack[stack.length - 1] < num) {
    stack.push(num);
  }
  // 이분 탐색
  else {
    let idx = binary(stack, 0, stack.length - 1, num);
    stack[idx] = num;
  }
});

function binary(stack, left, right, target) {
  while (left < right) {
    let mid = parseInt((left + right) / 2);

    if (stack[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

console.log(stack.length);

// stack안에 왼쪽부터 순차적으로 값을 넣으면서 stack이 오름차순으로 정렬되어 있다는 점을 이용해 이분탐색을 통해 stack의 값을 변경시켜간다.
// LIS 알고리즘

// https://www.youtube.com/watch?v=voklbG1wU8A
