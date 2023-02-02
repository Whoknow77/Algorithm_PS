function solution(id_list, report, k) {
  const fire = {};
  // Set을 이용해 중복 제거
  // 신고 한 사람, 신고 받은 사람, 정지(0 || 1)
  id_list.forEach((id) => (fire[id] = [new Set(), new Set(), 0]));

  report.forEach((result) => {
    const [give, receive] = result.split(" ");
    fire[give][0].add(receive);
    fire[receive][1].add(give);
  });
  for (let i = 0; i < id_list.length; i++) {
    if (fire[id_list[i]][1].size >= k) {
      fire[id_list[i]][2] = 1;
    }
  }

  return (id_list = id_list.map((id) => {
    // 내가 신고했고, 정지 횟수가 1이면
    let sum = 0;
    for (let i = 0; i < fire[id][0].size; i++) {
      let char = fire[id][0];
      char = [...char];
      if (fire[char[i]][2] === 1) {
        sum++;
      }
    }
    return sum;
  }));
}

// 다른 사람 풀이

// Set, Map
function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  // 신고 당한 사람 횟수
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // 신고 한 사람 횟수
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

console.log(
  solution2(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
