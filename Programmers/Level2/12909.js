function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(" || s.length === 1) {
    return false;
  }
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0 || s[i] === "(") {
      arr.push(s[i]);
    } else if (arr[arr.length - 1] === "(") {
      arr.pop();
    }
  }
  return arr.length ? false : true;
}

console.log(solution(")()("));

// 다른사람 풀이
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
