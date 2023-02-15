function solution(str1, str2) {
  // value값을 비교하면됨
  let answer = "YES";
  let map1 = new Map();
  let map2 = new Map();
  [...str1].forEach((x) => {
    if (map1.has(x)) map1.set(x, map1.get(x) + 1);
    else map1.set(x, 1);
  });
  [...str2].forEach((x) => {
    if (map2.has(x)) map2.set(x, map2.get(x) + 1);
    else map2.set(x, 1);
  });
  for (let [key, value] of map1) {
    if (value !== map2.get(key)) {
      return "NO";
    }
  }
  return answer;
}

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || !sH.get(x)) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
