function solution(a, b, c, d, e, f, g) {
  return Math.min(a, b, c, d, e, f, g);
}

// 정답
function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
