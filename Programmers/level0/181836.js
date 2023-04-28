// flatMap
function solution(picture, k) {
  const answer = picture.map((item) => {
    let str = "";
    for (let i = 0; i < item.length; i++) {
      str += item[i].repeat(k);
    }
    return str;
  });

  const newAnswer = answer.flatMap((num) => {
    const s = [];
    for (let i = 0; i < k; i++) {
      s.push(num);
    }
    return s;
  });
  return newAnswer;
}

function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
