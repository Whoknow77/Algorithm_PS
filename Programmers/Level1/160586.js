// target 문자를 만족시키지 못하면 break를 걸고 -1을 추가하고 다음 타겟 문자열을 조사한다.
function solution(keymap, targets) {
  let answer = [];
  for (let target of targets) {
    let sum = 0;
    loop1: for (let s of target) {
      let min = 100000;
      for (let key of keymap) {
        if (min > key.indexOf(s) + 1 && key.indexOf(s) >= 0) {
          //
          min = key.indexOf(s) + 1;
        }
      }
      if (min === 100000) {
        // keymap에 target 문자가 없는 경우
        sum = 0;
        break loop1;
      } else {
        sum += min;
      }
    }
    if (sum === 0) answer.push(-1);
    else answer.push(sum);
  }
  return answer;
}

// 다른 사람 풀이
function solution2(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items.split("").map((item, index) => {
      // map[item]이 undefined일때는 항상 false이므로 무조건 index+1 넣은 후, 최솟값으로 갱신
      map[item] = map[item] < index + 1 ? map[item] : index + 1;
    });
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

console.log(solution2(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
