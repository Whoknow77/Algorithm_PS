// 입력값이 매우 큼 -> 이진탐색
// 값을 찾는 것이 아니라 최소 몇 분에 모든 심사가 끝나는지..(Parametric search)

// 최소 1분 ~ 10억분 * n(이 사이에서 이진 탐색)
// 처리 가능한 입국자가 n보다 작으면 시간을 늘리고, n보다 작으면 시간을 낮춘다.
// 면접관당 시간대비 몇 명을 처리할 수 있는지를 아는게 관건
// 시간 / 심사시간 -> 명

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    const sum = sortedTimes.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    // 시간을 늘려야 하는 경우(불가능)
    if (sum < n) {
      left = mid + 1;
    }
    // 시간을 줄여야 하는 or 줄일 가능성이 있는 경우
    else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(solution(6, [7, 10]));
// 1 60
// 30
// 1~29
// 15
// 22
// 23~29
// 26
// 26~29
// 27
// 27~29
// 28
// 28~29
// 28
