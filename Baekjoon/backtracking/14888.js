const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const numbers = input.shift().split(' ').map(Number);
const operators = input.shift().split(' ').map(Number);


let max = -Infinity;
let min = Infinity;
 
function operation(num1, num2, operator) {
  switch (operator) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      const result =
        num1 >= 0 ? Math.floor(num1 / num2) : -Math.floor(-num1 / num2);
      return result;
  }
}
 
function dfs(index, result, operators) {
  if (index === numbers.length) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  }
 
  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      const newOpers = [...operators];
      newOpers[i] -= 1;
      dfs(index + 1, operation(result, numbers[index], i), newOpers);
    }
  }
}


dfs(1, numbers[0], operators);
console.log(max ? max : 0);
console.log(min ? min : 0);