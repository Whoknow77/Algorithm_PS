function solution(spell, dic) {
  return dic
    .map((a) => a.split("").sort().join(""))
    .includes(spell.sort().join(""))
    ? 1
    : 2;
}

// 다른 사람 풀이

function solution2(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

console.log(solution2(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
