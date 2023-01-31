function solution(my_string, letter) {
  return [...my_string].filter((item) => item != letter).join("");
}

// 다른 사람 풀이(letter를 기준으로 split하면 letter를 기점으로 배열이 생성됨)
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
