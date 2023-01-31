function solution(numbers) {
  num_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num_arr
    .filter((num) => !numbers.includes(num))
    .reduce((prev, curr) => prev + curr, 0);
}

function solution2(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
