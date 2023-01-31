function solution(arr) {
  return arr.filter((item, index) => {
    if (index === 0) {
      return true;
    } else {
      if (arr[index] === arr[index - 1]) {
        return false;
      } else {
        return true;
      }
    }
  });
}

// 다른 사람 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
  // 마지막은 undefined와 비교하여 true
}
