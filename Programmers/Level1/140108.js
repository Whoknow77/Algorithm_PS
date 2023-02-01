function solution(s) {
  let sum = 0;
  let answer = 0;
  let numArray = [];
  [...s].map((char, index) => {
    if (numArray.length === 0 || numArray[0] === char) {
      numArray.push(char);
      sum++;
    } else {
      sum--;
      if (sum === 0) {
        answer++;
        numArray = [];
      }
    }
    // 마지막에 읽을 문자가 없는 경우 분해
    if (numArray.length !== 0 && index === s.length - 1) {
      answer++;
      return;
    }
  });

  return answer;
}

// 같은 문자 sum++
// 다른 문자 sum--
// sum===0 => 분해

// 다른 사람 풀이
// 마지막에 읽을 것이 없을때를 생각해서 일단 숫자가 나오면 미리 answer++
function solution2(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
