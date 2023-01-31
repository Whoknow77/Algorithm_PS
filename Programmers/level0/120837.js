function solution(hp) {
  return (
    parseInt(hp / 5) + parseInt((hp % 5) / 3) + Math.ceil((hp % 5) % 3) / 1
  );
}

// 다른 사람 풀이

function solution2(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
