function solution(s1, s2) {
  let sum = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        sum++;
      }
    }
  }
  return sum;
}

// 다른 사람 풀이
function solution2(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
