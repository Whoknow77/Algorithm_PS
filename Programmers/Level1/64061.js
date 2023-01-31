// 가로 세로 전환 후 0제거 후 비교
function solution(board, moves) {
  let bucket = [];
  let arr = [[]];
  let sum = 0;
  for (let i = 0; i < board.length; i++) {
    arr[i] = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== 0) {
        arr[i].push(board[j][i]);
      }
    }
  }

  moves.forEach((item) => {
    if (arr[item - 1][0] !== undefined) {
      bucket.push(arr[item - 1].shift());
      if (bucket[bucket.length - 1] === bucket[bucket.length - 2]) {
        bucket.pop();
        bucket.pop();
        sum += 2;
      }
    }
  });
  return sum;
}

// 다른 사람 풀이

// 비교시에 가로 세로 전환, 바구니에 넣기 전에 비교하고 겹치면 안넣음
function solution2(board, moves) {
  let count = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}

console.log(
  solution2(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
