// 효율성을 따지지 않은 풀이
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.filter((item) => {
    if (completion.includes(item)) {
      completion.splice(completion.indexOf(item), 1);
      return false;
    }
    return true;
  })[0];
}

// 효율성을 따진 풀이

function solution2(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant);
  console.log(completion);

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// Map 이용
function solution3(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  // par쪽이 하나 이상 더 많은 경우 => 완주 X

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

console.log(
  solution3(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
