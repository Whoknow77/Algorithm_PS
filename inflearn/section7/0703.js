function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // 양수와 음수 비교만 허용
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [1, 3, 2, -3, -2, 5, 6, -6];
console.log(solution(arr));
