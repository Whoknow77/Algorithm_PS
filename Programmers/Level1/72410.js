function solution(new_id) {
  let answer = new_id.toLowerCase();
  answer = answer.replace(/[^\w-._]/g, "");
  answer = answer.replace(/\.\.+/g, ".");
  answer = answer.replace(/\.$/g, ""); // 끝
  answer = answer.replace(/^\./g, ""); // 처음

  if (answer == "") answer = "a";

  if (answer.length >= 16) {
    let newAnswer = answer.substr(0, 15);
    answer = newAnswer.replace(/\.$/g, "");
  }
  if (answer.length <= 2) {
    let newAnswer = answer[answer.length - 1];
    while (answer.length !== 3) {
      answer += newAnswer;
    }
  }

  return answer;
}

function solution2(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
}

console.log(solution2("=.="));
