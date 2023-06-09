function solution(elements) {
  const element = elements.concat(elements);
  // 개수가 1 ~ elemenet.length까지 부분 수열의 합을 set자료구조에 넣기
  const answer = new Set();
  // 1~5
  for (let i = 1; i <= elements.length; i++) {
    // 1~10
    for (let j = 0; j < element.length; j++) {
      answer.add([...element].splice(j, i).reduce((a, b) => a + b, 0));
    }
  }

  return answer.size;
}

// 다른 사람 풀이
function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));
