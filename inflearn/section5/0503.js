function solution(m, arr) {
  let data = arr;
  let n = arr.length;

  let interval_sum = 0;
  let count = 0;
  let end = 0;
  for (let start = 0; start < n; start++) {
    while (interval_sum < m && end < n) {
      interval_sum += data[end];
      end += 1;
    }
    if (interval_sum === m) {
      count += 1;
    }
    interval_sum -= data[start];
  }
  return count;
}

// 정답
function solution(m, arr) {
  let answer = 0,
    start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[start++];
      if (sum === m) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
