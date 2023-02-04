function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      answer.push(arr[i]);
    }
    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
