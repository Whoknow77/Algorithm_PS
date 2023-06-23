function solution(n) {
  let count = 0;
  while (n !== 0) {
    n;
    if (parseInt(n % 2) !== 0) {
      count++;
    }
    n = parseInt(n / 2);
  }
  return count;
}

// 다른 풀이
// function solution(n) {
//   return n.toString(2).match(/1/g).length;
// }
console.log(solution(5000));

// 이진수로 변환하여 1의 개수를 구하는 경우와 동일(1인 경우 나머지가 0이 아닌 경우,즉 j)
