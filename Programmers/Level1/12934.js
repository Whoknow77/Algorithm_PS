// 제곱수라면 제곱을 씌워도 정수로 나누어떨어짐
// 제곱수가 아니라면 무한소수로 뒤에 소수점이 길게이어짐 => 반올림하면 제곱수랑 같아지는 특성을 이용

function solution(n) {
  return Math.sqrt(n) === Math.round(Math.sqrt(n))
    ? (Math.sqrt(n) + 1) ** 2
    : -1;
}
