function solution(arr) {
  let max = arr[0];
  let sum = 1;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      sum += 1;
    }
  }
  return sum;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
