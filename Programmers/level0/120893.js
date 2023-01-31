function solution(my_string) {
  return my_string
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
}

// 다른 사람 풀이

function solution2(my_string) {
  let answer = "";
  for (let c of my_string) {
    if (c === c.toUpperCase()) {
      answer += c.toLowerCase();
    } else {
      answer += c.toUpperCase();
    }
  }
  return answer;
}

function solution3(my_string) {
  let answer = "";
  const bigRegExp = /[A-Z]/g;
  const smallRegExp = /[a-z]/g;
  for (let i of my_string) {
    if (i.match(bigRegExp)) {
      answer += i.toLowerCase();
    } else if (i.match(smallRegExp)) {
      answer += i.toUpperCase();
    }
  }
  return answer;
}
