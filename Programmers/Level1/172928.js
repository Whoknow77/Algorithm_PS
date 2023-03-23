function solution(park, routes) {
  const height = park.length;
  const width = park[0].length;
  // 세로, 가로

  // 시작 좌표 설정
  let currentLocation = [0, 0];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (park[i][j] === "S") {
        currentLocation = [i, j];
      }
    }
  }

  routes.forEach((route) => {
    const direction = route[0];
    const number = Number(route[2]);

    if (direction === "E") {
      const ud = currentLocation[0];
      const lr = currentLocation[1] + number;
      // 벗어나는지 검증
      if (lr >= 0 && lr <= width - 1) {
        // 장애물 검증
        for (let i = currentLocation[1]; i <= lr; i++) {
          if (park[ud][i] === "X") {
            return;
          }
        }
        currentLocation[1] = currentLocation[1] + number;
      }
    }

    if (direction === "W") {
      const ud = currentLocation[0];
      const lr = currentLocation[1] - number;
      // 벗어나는지 검증

      if (lr >= 0 && lr <= width - 1) {
        // 장애물 검증
        for (let i = currentLocation[1]; i >= lr; i--) {
          if (park[ud][i] === "X") {
            return;
          }
        }
        currentLocation[1] = currentLocation[1] - number;
      }
    }

    // 좌우
    if (direction === "N") {
      const ud = currentLocation[0] - number;
      const lr = currentLocation[1];
      // 벗어나는지 검증
      if (ud >= 0 && ud <= height - 1) {
        // 장애물 검증
        for (let i = currentLocation[0]; i >= ud; i--) {
          if (park[i][lr] === "X") {
            return;
          }
        }
        currentLocation[0] = currentLocation[0] - number;
      }
    }

    //상하
    if (direction === "S") {
      const ud = currentLocation[0] + number;
      const lr = currentLocation[1];
      // 벗어나는지 검증
      if (ud >= 0 && ud <= height - 1) {
        // 장애물 검증
        for (let i = currentLocation[0]; i <= ud; i++) {
          if (park[i][lr] === "X") {
            return;
          }
        }
        currentLocation[0] = currentLocation[0] + number;
      }
    }
  });

  return currentLocation;
}

// 다른 사람 풀이

function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));

// OOOX
// OOXO
// OXSX
