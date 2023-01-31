function solution(array, height) {
  return array.filter((item) => height < item).length;
}

function solution2(array, height) {
  let sum = 0;
  for (let i of array) {
    if (height < i) {
      sum += 1;
    }
  }
  return sum;
}
