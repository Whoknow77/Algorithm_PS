function solution(arr, queries) {
  const answer = [];
  queries.forEach((item) => {
    const [s, e, k] = item;
    let flag = false;
    let min = 10000000;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k) {
        if (min > arr[i]) {
          min = arr[i];
        }
        flag = true;
      }
    }
    if (!flag) {
      answer.push(-1);
    } else {
      answer.push(min);
    }
  });
  return answer;
}

function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let result = -1;
    for (let i = s; i <= e; i += 1) {
      const v = arr[i];
      if (v <= k) continue;
      result = result === -1 ? v : Math.min(result, v);
    }
    return result;
  });
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
