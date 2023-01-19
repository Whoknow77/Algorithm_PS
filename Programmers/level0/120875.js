// 평행 조건 --> 두 선분의 기울기가 같다.(y증가량/x증가량)

function solution(dots) {
  let sum = 0;
  const case1 = [dots[0], dots[1]];
  const case2 = [dots[0], dots[2]];
  const case3 = [dots[0], dots[3]];
  const case4 = [dots[1], dots[2]];
  const case5 = [dots[1], dots[3]];
  const case6 = [dots[2], dots[3]];

  if (
    (case1[1][1] - case1[0][1]) / (case1[1][0] - case1[0][0]) ==
    (case6[1][1] - case6[0][1]) / (case6[1][0] - case6[0][0])
  ) {
    sum++;
  }

  if (
    (case3[1][1] - case3[0][1]) / (case3[1][0] - case3[0][0]) ==
    (case4[1][1] - case4[0][1]) / (case4[1][0] - case4[0][0])
  ) {
    sum++;
  }

  if (
    (case2[1][1] - case2[0][1]) / (case2[1][0] - case2[0][0]) ==
    (case5[1][1] - case5[0][1]) / (case5[1][0] - case5[0][0])
  ) {
    sum++;
  }
  return sum > 0 ? 1 : 0;
}

// 다른 풀이
// 마주보는 케이스는 중복되므로 반으로 줄임

function solution(dots) {
  if (cal(dots[0], dots[1]) === cal(dots[2], dots[3])) return 1;
  if (cal(dots[0], dots[2]) === cal(dots[1], dots[3])) return 1;
  if (cal(dots[0], dots[3]) === cal(dots[1], dots[2])) return 1;
  return 0;
}

function cal(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
