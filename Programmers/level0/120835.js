function solution(emergency) {
  let answer = [];
  for (let i = 0; i < emergency.length; i++) {
    let emer_num = 1;
    for (let j = 0; j <= emergency.length; j++) {
      if (emergency[i] < emergency[j]) {
        emer_num++;
      }
    }
    answer.push(emer_num);
  }
  return answer;
}

function solution2(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
