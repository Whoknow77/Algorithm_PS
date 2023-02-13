function solution(s) {
  let answer = 0;
  let map = new Map();
  [...s].forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

// 정답
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of sH) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
