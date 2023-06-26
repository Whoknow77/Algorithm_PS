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
  let lastitem = arr[0];
  let sum = 0;
  arr.forEach((item, index) => {
    if (lastitem >= item) {
      sum++;
    } else {
      answer.push(sum);
      sum = 1;
      lastitem = item;
    }
  });
  answer.push(sum);
  return answer;
}

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];
  days;

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 5 10 1 1 20 1
// 자신보다 작은수가나올때까지 기능 배포
