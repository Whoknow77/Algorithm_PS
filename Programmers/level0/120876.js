// 선분마다 시작~끝-1 까지 배열을 채워나가고, 배열의 값이 2이상부터 겹치는것이므로 2인 칸들의 개수를 더해주면 됨(인덱스에 -이 들어가면안되니까 100더함)
// 100
// 102 103 104
// 103 104 105 106 107 108 109

function solution(lines) {
  let arr = Array(200).fill(0);
  let answer = 0;

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0] + 100; j < lines[i][1] + 100; j++) {
      arr[j]++;
    }
  }
  return arr.filter((a) => a > 1).length;
}
