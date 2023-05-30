function solution(s) {
  let zerocount = 0; // 제거된 0의 수
  let twocount = 0; // 이진변환 수
  while (s !== "1") {
    s = s.split("").filter((item) => {
      if (item === "0") {
        zerocount++;
        return false;
      }
      return true;
    });
    s = s.length.toString(2);
    twocount++;
  }
  return [twocount, zerocount];
}

// 다른 사람 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

console.log(solution("110010101001"));
