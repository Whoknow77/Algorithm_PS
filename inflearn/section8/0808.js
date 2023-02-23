// 다중 for문으로 구현 시 매번 n개만큼 for문을 계속 추가시켜야 함
function solution(n, m) {
  let answer = [];
  let sum = 0;
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
      sum++;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  answer.push(sum);
  return answer;
}

console.log(solution(3, 2));
