// 2차원 배열을 만들고 다시 1차원 배열로 만들어 slice하는 풀이는 code dumped 오류 ==> 1차원 배열로 풀자 즉, 규칙을 발견해야 한다.
// 각 배열의 값에는 해당 칸의 행과 열 번호 중 큰 수가 들어간다.
// 1차원 배열의 인덱스만으로 2차원 배열의 행과 열을 한 번에 찾는 방법은?
// 행 : i=Math.floor(index/n)
// 열 : j=index%n

function solution(n, left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    arr.push(Math.max(Math.floor(i / n) + 1, (i % n) + 1));
  }

  return arr;
}

console.log(solution(3, 2, 5));

// 1차원배열 1 2 3 2 2 3 3 3 3
// index 0 1 2 3 4 5 6 7 8

// 1 2 3
// 2 2 3
// 3 3 3
