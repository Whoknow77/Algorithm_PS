function solution(arr) {
  let flagsum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      flagsum += 1;
      sum += flagsum;
    } else {
      flagsum = 0;
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
