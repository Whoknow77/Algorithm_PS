function solution(strArr) {
  const word = new Map();
  const answer = [];
  strArr.sort((a, b) => a.length - b.length);
  let sum = 0;
  let max = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (max < strArr[i].length) {
      max = strArr[i].length;
      answer.push(sum);
      sum = 1;
    } else {
      sum++;
    }
    if (i === strArr.length - 1) {
      answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b)[answer.length - 1];
}

function solution(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }
  return Math.max(...counter.values());
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
