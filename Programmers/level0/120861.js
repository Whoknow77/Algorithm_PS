function solution(keyinput, board) {
  let x = 0,
    y = 0;
  let max_width = parseInt(board[0] / 2);
  let max_height = parseInt(board[1] / 2);
  keyinput.map((a) => {
    if (a === "left" && Math.abs(x - 1) <= max_width) {
      x--;
    } else if (a === "right" && Math.abs(x + 1) <= max_width) {
      x++;
    } else if (a === "down" && Math.abs(y - 1) <= max_height) {
      y--;
    } else if (a === "up" && Math.abs(y + 1) <= max_height) {
      y++;
    }
  });

  return [x, y];
}

// 다른 사람 풀이 (음수쪽으로 갈때만 -붙임 => 음수에 마이너스 붙이면 절대값의 의미를 가지기때문에)

function solution2(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    console.log(board[0] / 2 - 1);
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
