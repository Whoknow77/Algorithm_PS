function solution(array) {
  return array
    .join("")
    .split("")
    .filter((a) => +a === 7).length;
}

// 다른 사람 풀이

function solution2(array) {
  return array.join("").split("7").length - 1;
}
