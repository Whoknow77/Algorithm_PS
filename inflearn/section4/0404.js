function solution(m, product) {
  let ableProductNum = 0;
  let sortedproduct = product.sort(
    (a, b) => b[0] / 2 + b[1] - (a[0] / 2 + a[1])
  );
  for (let i = 0; i < sortedproduct.length; i++) {
    let sum = 0;
    for (let j = i; j < sortedproduct.length; j++) {
      if (j === i) {
        sum = sortedproduct[j][0] / 2 + sortedproduct[j][1];
      } else {
        sum += sortedproduct[j][0] + sortedproduct[j][1];
      }
    }
    if (sum > m) {
      return sortedproduct.length - 1 - i;
    }
  }
}

// 정답(할인을 기준으로 모두 탐색)
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] - a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break; // 더 이상 사지 못하는데 계속 반복할 경우를 방지
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
