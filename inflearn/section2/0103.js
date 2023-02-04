function solution(a, b) {
  return a
    .map((num, index) => {
      if (b[index] - num === 1 || b[index] - num === -2) {
        return "B";
      }
      if (b[index] - num === 0) {
        return "D";
      }
      if (b[index] - num === -1 || b[index] - num === 2) {
        return "A";
      }
    })
    .join("");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
