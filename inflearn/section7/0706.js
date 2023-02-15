function solution(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (sortedArray[i] !== arr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// 정답
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] !== arr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
