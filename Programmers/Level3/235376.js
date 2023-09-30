function solution(tickets) {
  const graph = {};

  for (const [src, dest] of tickets) {
    if (graph[src] === undefined) {
      graph[src] = [];
    }
    graph[src].push(dest);
  }

  for (const key in graph) {
    // 알파벳 역순 정렬(음수이면 교체)
    graph[key].sort((a, b) => (a > b ? -1 : 1));
  }
  // 출발은 ICN 고정
  const stack = ["ICN"];
  // 경로
  const answer = [];
  // DFS
  while (stack.length > 0) {
    const src = stack[stack.length - 1];
    // 이동할 곳이 더 있다면 graph에서 빼서 stack에 넣기
    if (graph[src] && graph[src].length > 0) {
      // 역순을 pop하면 알파벳 순으로
      stack.push(graph[src].pop());
    }
    // 목적지에서 갈 경로가 없을경우 stack에서 빼서 현재 경로 등록
    else {
      answer.push(stack.pop());
    }
  }
  return answer.reverse();
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["ICN", "AAD"],
    ["JFK", "ICN"],
  ])
);
// AAD로 가버리면 못나옴
