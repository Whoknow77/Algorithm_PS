const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];


console.log(Math.min( (input.split("0").filter((item)=>item!=='').length) ,(input.split("1").filter((item)=>item!=='').length)));
