function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function solution(n) {
  let i = 1;
  while (true) {
    if (factorial(i) > n) {
      i--;
      break;
    } else if (factorial(i) === n) {
      break;
    }
    i++;
  }
  return i;
}

// 다른 사람 풀이

function solution2(n) {
  let answer = 1;
  let i = 1;
  while (true) {
    i = i * answer;
    if (i > n) {
      answer--;
      break;
    }
    answer++;
  }
  return answer;
}

function solution3(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}

function solution4(n) {
  let i = 1;
  let f = 1;
  while (f < n) f *= ++i;
  return --i;
}
