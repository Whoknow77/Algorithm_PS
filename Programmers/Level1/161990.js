function solution(wallpaper) {
  const answer = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      const a = [];
      if (wallpaper[i][j] === "#") {
        a.push(i, j);
      } else {
        continue;
      }
      answer.push(a);
    }
  }
  let minx = answer.sort((a, b) => a[0] - b[0])[0][0];
  let miny = answer.sort((a, b) => a[1] - b[1])[0][1];
  let maxx = answer.sort((a, b) => b[0] - a[0])[0][0];
  let maxy = answer.sort((a, b) => b[1] - a[1])[0][1];
  return [minx, miny, maxx + 1, maxy + 1];
}

// 다른 사람 풀이
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}

console.log(solution(["..", "#."]));
