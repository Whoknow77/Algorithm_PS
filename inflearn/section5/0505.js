// 비교하고 앞에껄 빼고 더하고
function solution(k, arr) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}

// 정답(뒤에껄 더하고 빼고 비교)
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
