function solution(n) {
  answer = [];
  let i = 0,
    j = 0;
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    answer.push(arr);
  }
  let num = 1;

  while (num <= n * n) {
    while (j + 1 < n && answer[i][j + 1] === 0) {
      j++;
      answer[i][j] = num;
      num++;
    }

    while (i + 1 < n && answer[i + 1][j] === 0) {
      i++;
      answer[i][j] = num;
      num++;
    }

    while (j - 1 >= 0 && answer[i][j - 1] === 0) {
      j--;
      answer[i][j] = num;
      num++;
    }

    while (i - 1 >= 0 && answer[i - 1][j] === 0) {
      i--;
      answer[i][j] = num;
      num++;
    }
  }

  return answer;
}
console.log(solution(4));
