function solution(players, callings) {
  // indexOf는 느리므로, Object를 활용해 선수 인덱스를 관리함
  const playerDict = {};
  players.forEach((player, pIdx) => (playerDict[player] = pIdx));

  // 호명된 선수를 순회하며 순위 변경사항 반영
  for (let i = 0; i < callings.length; i++) {
    const curPlayer = callings[i];
    const playerIdx = playerDict[curPlayer];
    const slowerPlayer = players[playerIdx - 1];

    players[playerIdx - 1] = curPlayer;
    players[playerIdx] = slowerPlayer;

    playerDict[curPlayer] = playerIdx - 1;
    playerDict[slowerPlayer] = playerIdx;
  }

  // 결과 반환
  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
