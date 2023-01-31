function solution(s, n) {
  return [...s]
    .map((ch) => {
      // 대문자
      if (ch.charCodeAt() + n >= 91 && ch.charCodeAt() <= 96) {
        console.log(ch.charCodeAt() + n);
        return String.fromCharCode(((ch.charCodeAt() + n) % 90) + 64);
      } else if (ch.charCodeAt() + n >= 65 && ch.charCodeAt() <= 90) {
        return String.fromCharCode(ch.charCodeAt() + n);
      } else if (ch === " ") {
        return " ";
      }
      // 소문자
      else {
        if (ch.charCodeAt() + n >= 123) {
          return String.fromCharCode(((ch.charCodeAt() + n) % 122) + 96);
        }
        return String.fromCharCode(ch.charCodeAt() + n);
      }
    })
    .join("");
}

// 다른 사람 풀이
// 위의 로직과 동일
function solution2(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    let textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// 두번 써서 해결(좋은 방법 이나 1<=n<=25 일때만 가능)
function solution3(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
