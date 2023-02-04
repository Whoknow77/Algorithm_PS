function solution(arr) {
  let arr2 = [...arr];
  arr2.sort((a, b) => b - a);
  return arr2.map((num) => arr.indexOf(num) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
