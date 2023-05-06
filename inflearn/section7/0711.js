function count(songs, capacity) {
  // 몇장에 담아지는지
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      // 용량 초과
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(m, songs) {
  // DVD는 최소한 노래 한곡을 넣어야하므로 9~45
  // 이분탐색을 돌며 결정! (담을 수 있는지)
  // 만약 2장에 담아지면 3장도 가능하므로 용량으 줄여야 한다 => 왼쪽 조사(27보다 좋은값)
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    // 왼쪽에 있는 경우(개수가 m보다 적다 => 길이를 줄이자)
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    }
    // 오른쪽에 있는 경우((개수가 m보다 많다 => 길이를 늘리자))
    else lt = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
