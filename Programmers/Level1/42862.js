function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여벌 체육복을 가진 학생이 도난 당한 경우 => 체육복 못 빌려줌 => lost와 reserve배열에서 제거
  reserve = reserve.filter((item) => {
    if (lost.includes(item)) {
      lost.splice(lost.indexOf(item), 1);
      return false;
    }
    return true;
  });

  return (
    n -
    lost.length +
    reserve.filter((item, index) => {
      // 번호 순으로 먼저 빌려주고 lost배열에서 제거
      if (lost.includes(item - 1)) {
        lost.splice(lost.indexOf(item - 1), 1);
        return true;
      } else if (lost.includes(item + 1)) {
        lost.splice(lost.indexOf(item + 1), 1);
        return true;
      }
      return false;
    }).length
  );
}

// 다른 사람 풀이
function solution2(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  // 도난당한학생은 0, 도난 당하지 않고 여분도 없는 학생 1(안따지면 됨), 여분이 있는 학생중 도난당한 학생은 1(안따지면 됨), 여분이 있는 학생은 2
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution2(4, [1, 2], [3, 4]));
