const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const answer = [];

// 문자를 다 제거하고 괄호검사를 하고 남은 것이 온점이면 yes

for (let i = 0; i < input.length-1; i++){
    const target = input[i].replace(/[a-z|A-Z|\s]/g, '').trim() // 문자열과 공백 제거 -> 괄호만 남음
    const stack = [];
    for (let j = 0; j < target.length; j++){
        // 열린 괄호는 +
        if (target[j] === "[" || target[j] === "(") {
            stack.push(target[j])
        }
        else if (target[j] === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            }
            else {
                stack.push(target[j])
                break;
            }
        }
        else if (target[j] === "]") {
            if (stack[stack.length - 1] === "[") {
                stack.pop();
            }
            else {
                stack.push(target[j])
                break;
            }
        }
    }
    if(stack.length===0){
        answer.push('yes')   
    }
    else {
        answer.push('no')
    }
}


console.log(answer.join('\n'))


