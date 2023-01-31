// key:value 형태로 저장된 조카 발음들에서 replace(key, "") 한다음
// 배열에 공백 말고 남은단어가 있다면 발음할수 없는 단어다.

function solution(babbling) {
  return babbling.filter((item) => item.replace(/aya|ye|woo|ma/g, ""));
}
