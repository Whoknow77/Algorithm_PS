const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let map = new Map();
let count = 0;

input.forEach((item, index) => {
  item = item.trim();
  if (index > 0) {
    if (item === "ENTER") {
      map.clear();
    } else {
      if (!map.has(item)) {
        count++;
        map.set(item, 0);
      }
    }
  }
});

console.log(count);
