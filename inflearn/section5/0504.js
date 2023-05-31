function solution(m, arr) {
  let answer = 0,
    end = 0,
    sum = 0;
  for (let start = 0; start < arr.length; start++) {
    end = start + 1;
    sum += arr[start];
    if (sum <= m) {
      answer++;
    }
    while (sum < m && end < arr.length) {
      sum += arr[end++];
      if (sum <= m) {
        answer++;
      }
    }
    sum = 0;
  }
  return answer;
}

// 정답
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

// 1
// 3 (31)
// (1) (13) (131)

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
