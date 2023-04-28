function solution(rank, attendance) {
  let tempRank = [...rank].sort((a, b) => Number(a) - Number(b));
  const [a, b, c] = tempRank
    .map((item, index) => {
      const idx = rank.indexOf(item);
      return attendance[idx] ? idx : 1001;
    })
    .filter((i) => i !== 1001)
    .slice(0, 3);

  return a * 10000 + b * 100 + c;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
