function solution(arr) {
  let sum = 0;
  return arr.filter((key) => {
    sum += key;
    if (sum < 100) {
      return true;
    }
    return false;
  });
}

// 정답
function solution(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // 앞의 i를 먼저 지우면 j 인덱스가 당겨져서 인덱스-1에 헤당하는 값을 지우므로 j먼저 지우기
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
