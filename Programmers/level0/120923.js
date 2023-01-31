// -100 부터 100까지 차례대로 더해서 만족시키면 리턴

function solution(num, total) {
  for (let i = -100; i <= 100; i++) {
    let sum = 0;

    for (let j = i; j < num + i; j++) {
      sum += j;
      if (sum === total) {
        return Array(num)
          .fill(i)
          .map((a, b) => a + b);
      }
    }
  }
}

// 다른 사람 풀이(등차가 1인 등차수열)

// total/num이 중간값이라는 규칙
function solution2(num, total) {
  let min = Math.ceil(total / num - Math.floor(num / 2));

  // 계산식에 쓰이지 않음
  // let max = Math.floor(total/num + Math.floor(num/2));

  return Array(num)
    .fill(min)
    .map((a, b) => a + b);
}
