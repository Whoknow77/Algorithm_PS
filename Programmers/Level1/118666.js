function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";
  for (let i = 0; i < choices.length; i++) {
    const [leftType, rightType] = survey[i].split("");
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) {
      // 비동의 -> 왼쪽 요소
      types[leftType] += result;
    } else if (choices[i] > 4) {
      // 동의 -> 오른쪽 원소
      types[rightType] += result;
    }
  }
  const type = Object.keys(types);
  console.log(type);
  for (let i = 0; i < type.length; i += 2) {
    const leftType = types[type[i]];
    const rightType = types[type[i + 1]];
    if (leftType >= rightType) {
      // 같거나 클 때는 왼쪽 요소
      answer += type[i];
    } else {
      // 작은 때는 오른쪽 요소
      answer += type[i + 1];
    }
  }
  return answer;
}

function solution2(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

function solution3(survey, choices) {
  const data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const score = choices[i] - 4;
    let type = survey[i].split("")[score < 0 ? 0 : 1];
    data[type] += Math.abs(score);
  }

  const { R, T, C, F, J, M, A, N } = data;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${
    A >= N ? "A" : "N"
  }`;
}

console.log(solution3(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
