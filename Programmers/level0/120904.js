function solution(num, k) {
  const result = num
    .toString()
    .split("")
    .findIndex((item) => Number(item) === k);
  if (result != -1) {
    return result + 1;
  } else {
    return -1;
  }
}

function solution2(num, k) {
  let answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
}

function solution3(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((v) => +v)
      .indexOf(k) + 1 || -1
  );
}
