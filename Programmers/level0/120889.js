function solution(sides) {
  // 5 2 6
  let answer = 0;
  let sum = 0;
  sides.sort((a, b) => a - b); // 오름차순 정렬
  sum = sides[0] + sides[1];

  if (sides[2] < sum) {
    return 1;
  } else {
    return 2;
  }
}

function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
