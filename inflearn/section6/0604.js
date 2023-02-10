function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      // 연산식인 경우
      let result;
      let a = stack.pop();
      let b = stack.pop();
      if (s[i] === "*") {
        result = b * a;
      }
      if (s[i] === "+") {
        result = b + a;
      }
      if (s[i] === "-") {
        result = b - a;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(s[i]));
    }
  }
  return stack[0];
}

// 정답
function solution(s) {
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      if (x === "*") stack.push(lt * rt);
      if (x === "-") stack.push(lt - rt);
    }
  }

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
