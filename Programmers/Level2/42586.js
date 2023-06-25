function solution(progresses, speeds) {
  const arr = [];
  const answer = [];
  progresses.forEach((item, index) => {
    let count = 0;
    while (item < 100) {
      item += speeds[index];
      count++;
    }
    arr.push(count);
  });
  let lastitem = 100;
  let sum = 0;
  arr.forEach((item, index) => {
    if (lastitem >= item) {
      sum++;
      if (index === progresses.length - 1) {
        answer.push(sum);
      }
    } else {
      answer.push(sum);
      sum = 1;
      if (index === progresses.length - 1) {
        answer.push(sum);
      }
    }
    lastitem = item;
  });
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 5 10 1 1 20 1
// 자신보다 작은수가나올때까지 기능 배포
