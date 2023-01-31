function solution(numer1, denom1, numer2, denom2) {
  let x = denom1 * numer2 + denom2 * numer1;
  let y = denom1 * denom2;
  let opr = gcd(x, y);
  return [x / opr, y / opr];
}

// 최대공약수 구하기
// a<b이면 a>b 자리바꿈 ==> 36 12 => 12 0 => 12
// 9 4 => 4 1 => 1 0 ==> 1

function gcd(a, b) {
  while (b != 0) {
    let temp = parseInt(a % b);
    a = b;
    b = temp;
  }

  return Math.abs(a);
}

// a<b 이거나 나누어 떨어지지 않으면 함수 실행

function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}
