const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const stack = [];
const answer = [];

input.forEach((item) => {
    const [a, b] = item.split(' ').map(Number);
    switch (a) {
        case 1:
            stack.push(b);
            break;
        case 2:
            if (stack.length > 0) {
                answer.push(stack.pop())
            }
            else {
                answer.push(-1)
            }
            break;
        case 3:
            answer.push(stack.length)
            break;
        case 4:
            if (stack.length > 0) {
                answer.push(0)
            }
            else {
                answer.push(1)
            }
            break;
        case 5:
            if (stack.length > 0) {
                answer.push(stack[stack.length-1])
            }
            else {
                answer.push(-1)
            }
            break;
    }
})
console.log(answer.join('\n'))
