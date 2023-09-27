function solution(numbers) {
  console.log(
    numbers.map((number) => {
      return String(number);
    })
  );
  const answer = numbers
    .map((numbers) => String(numbers))
    .sort((a, b) => b + a - (a + b))
    .join("");

  //0인 경우는 제외해야 하니 삼항연산자 사용
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 9]));

["123", "456", "321"].sort((a, b) => {
  console.log(a);
  console.log(b);
});
