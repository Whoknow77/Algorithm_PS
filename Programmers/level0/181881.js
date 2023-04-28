function solution(arr) {
  const num = [];
  num.push(arr);
  while (true) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === num[i + 1]) {
        console.log(i);
        return num;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
        arr[i] = arr[i] * 2 + 1;
      }
    }
    num.push(arr);
    num.pop();
  }

  return num;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
