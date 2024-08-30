const d = [[1, 0], [0, 1], [-1, -1]];

function solution(n) {
  const arr = Array.from({ length: n }, (_, idx) => Array(idx + 1).fill(0));
  let totalLength = ((n+1)*n)/2
  let curX = 0, curY = 0;
  let cur = 0;
  arr[0][0] = 1;
  let curNumber = 2;

  while (curNumber <= totalLength) {
    const [posX, posY] = d[cur % 3]; 

    // 다음거 조사
    while (curX + posX >= 0 && curX + posX < n && curY + posY >= 0 && curY + posY < n && arr[curX + posX][curY + posY] === 0) {
      curX += posX;
      curY += posY;
      arr[curX][curY] = curNumber;
      curNumber+=1;
    }
    cur++; 
  }

  return arr.flatMap((v) => v);
}

console.log(solution(4))
