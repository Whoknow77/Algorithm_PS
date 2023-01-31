function solution(dartResult) {
  let score = dartResult.match(/\d\d*/g).map((num) => +num); // 점수
  let section = dartResult.match(/[A-Z]/g).map((str) => {
    // 영역 => 숫자 변환
    if (str === "S") {
      return 1;
    } else if (str === "D") {
      return 2;
    } else if (str === "T") {
      return 3;
    }
  });

  let data = dartResult.replaceAll(/([A-Z]\d)|([A-Z]$)/g, " "); // 옵션(문자뒤에숫자가 바로나오거나, 문자로 끝나는 경우)
  data = data.replaceAll(/[A-Z]|\d/g, "").split(""); // 문자나 숫자는 공백으로 변환

  for (let i = 0; i < 3; i++) {
    if (data[i] === " ") {
      score[i] = Math.pow(score[i], section[i]);
    } else if (data[i] === "*") {
      // 처음에 * 나온 경우
      if (i === 0) {
        score[i] = Math.pow(score[i], section[i]) * 2;
        continue;
      }

      score[i - 1] = score[i - 1] * 2;
      score[i] = Math.pow(score[i], section[i]) * 2;
    } else if (data[i] === "#") {
      score[i] = -Math.pow(score[i], section[i]);
    }
  }
  return score.reduce((prev, curr) => prev + curr, 0);
}

// 다른 사람 풀이

function solution2(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g); // 이해 안감 .?
  console.log(darts);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    console.log(split);
    score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
