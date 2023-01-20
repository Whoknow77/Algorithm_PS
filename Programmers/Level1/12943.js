function solution(num) {
  if (num === 1) {
    return 0;
  }

  let cal = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    cal++;
    if (cal === 501) {
      return -1;
    }
  }

  return cal;
}

function solution2(num) {
    let answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}


