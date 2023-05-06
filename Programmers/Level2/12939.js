function solution(s) {
  const arr = s.split(" ");
  arr.sort((a, b) => a - b);

  return arr[0].concat(" ").concat(arr[arr.length - 1]);
}

function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
console.log(solution("-1 -1"));
