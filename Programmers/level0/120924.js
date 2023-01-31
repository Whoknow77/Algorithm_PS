function solution(common) {
  // 등차수열 : 마지막항 + 공차

  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + common[1] - common[0];
  }

  // 등비 수열 : 마지막항 * 공비
  else {
    return common[common.length - 1] * parseInt(common[1] / common[0]);
  }

  // 공비가 1인 등비수열은 공차가 0인 등비수열인데 이건 둘다 해당함
}
