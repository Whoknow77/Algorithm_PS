function solution(arr) {
  let arr2 = arr.map((item) =>
    item
      .join("")
      .toString(2)
      .padStart(arr.length + 1, 0)
      .padEnd(arr.length + 2, 0)
      .split("")
  );
  const zero = Array(arr.length + 2)
    .fill(0)
    .map((num) => num.toString(2));
  arr2.unshift(zero); // 앞에 0 넣기
  arr2.push(zero); // 뒤에 0 넣기
  let sum = 0;
  for (let i = 1; i < arr2.length - 1; i++) {
    for (let j = 1; j < arr2.length - 1; j++) {
      let standard = parseInt(arr2[i][j]);
      if (
        standard > parseInt(arr2[i - 1][j]) &&
        standard > parseInt(arr2[i][j - 1]) &&
        standard > parseInt(arr2[i][j + 1]) &&
        standard > parseInt(arr2[i + 1][j])
      ) {
        sum += 1;
      }
    }
  }
  return sum;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
