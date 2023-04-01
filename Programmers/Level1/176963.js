function solution(name, yearning, photo) {
  const score = {};
  const answer = [];
  name.forEach((n, index) => {
    score[n] = yearning[index];
  });

  photo.forEach((p, index) => {
    let sum = 0;
    p.forEach((sc) => {
      sum += score[sc] || 0;
    });
    answer.push(sum);
  });
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

// 풀이2

function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
}
