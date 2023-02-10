function solution(need, plan) {
  let planArray = Array.from(plan);
  let j = 0;
  for (let i = 0; i < planArray.length; i++) {
    if (planArray[i] === need[j]) {
      j++;
    }
  }
  return need.length === j ? "YES" : "NO";
}

// 정답
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  return queue.length ? "NO" : "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
