function solution(s, t) {
  let sMap = new Map();
  let answerMap = new Map();
  let windowSum = "";
  let answer = 0;

  [...t].forEach((item) => {
    if (answerMap.has(item)) {
      answerMap.set(item, answerMap.get(item) + 1);
    } else {
      answerMap.set(item, 1);
    }
  });

  for (let i = 0; i < s.length; i++) {
    windowSum += s[i];
    if (i >= t.length - 1) {
      let sum = 0;
      let removeItem = s[i - (t.length - 1)];
      if (i === t.length - 1) {
        // 맨처음 연속수열은 모두 map에 넣기
        [...windowSum].forEach((item) => {
          if (sMap.has(item)) {
            sMap.set(item, sMap.get(item) + 1);
          } else {
            sMap.set(item, 1);
          }
        });
      } else {
        // 맨 처음 제외하고는 k개가되면 마지막만 map에 추가하고, 비교
        if (sMap.has(s[i])) {
          sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
          sMap.set(s[i], 1);
        }
      }
      for (let [key, value] of answerMap) {
        if (value === sMap.get(key)) {
          sum += 1;
        }
      }
      if (sum === answerMap.size) {
        answer += 1;
      }
      sMap.set(removeItem, sMap.get(removeItem) - 1); // Map에서 가장왼쪽 value --
      windowSum = windowSum.substring(1, t.length); // windowSum에서 가장 왼쪽값 제거
    }
  }
  return answer;
}

// 정답(map에 value가 0이 될때 delete로 삭제해야 한다했으나 answerMap으로 비교하면 됨)
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
}
let a = "bacaAacba";
let b = "cba";
console.log(solution(a, b));
