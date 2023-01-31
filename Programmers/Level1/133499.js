function solution(babbling) {
  let count = 0;
  let dup = ["ayaaya", "yeye", "woowoo", "mama"];
  while (babbling.length) {
    let b = babbling.pop();
    // 연속되는 발음은 패스
    if (dup.some((v) => b.includes(v))) continue;
    b = b
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    b = b.replace(/[1234]/g, "");
    // 모두 가능한 발음의 경우 count++
    if (b.length === 0) count++;
  }

  return count;
}

// 잘 이해 안감
// test는 true or false
// console.log(true/1) => 1
// console.log(false/1) => 0
function solution2(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

function solution3(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl) => {
    for (let i = 0; i < babblables.length; i++) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i++) {
      // join(' ')는 oyyeem => oyem 일때 ye를 지우지 않기 위해서
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}

console.log(
  solution3(["ayaye", "uuu", "yewoyeoyemaye", "yemsawoo", "ayaayaa"])
);
