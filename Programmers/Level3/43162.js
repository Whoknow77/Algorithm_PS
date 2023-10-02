// DFS 함수를 만듭니다.
function dfs(n, computers, visited, start) {
  const stack = [start]; // DFS의 시작점을 미리 초기화

  while (stack.length > 0) {
    const curr = stack.pop();

    visited[curr] = true;

    for (let i = 0; i < n; i += 1) {
      // 탐색 가능한 곳 찾기
      if (!visited[i] && computers[curr][i]) {
        stack.push(i); // 가능하다면 추가
      }
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    // 노드 수 만큼 루프
    if (!visited[i]) {
      // 아직 방문하지 않은 곳이 있다면 탐색
      dfs(n, computers, visited, i);
      answer += 1; // 영역 하나를 찾았으므로 +
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
