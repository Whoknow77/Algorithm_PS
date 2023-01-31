function solution(food) {
  let A = food
    .map((item, index) => {
      if (index > 0) {
        return index.toString().repeat(parseInt(item / 2));
      }
      return "";
    })
    .join("");

  let B = A.split("").reverse().join("");
  return A + 0 + B;
}

// 다른 사람 풀이

function solution2(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}

function solution3(food) {
  var answer = "";
  let arr = [];

  food.map((f, i) => {
    f = f % 2 == 0 ? f : f - 1;
    for (let j = 0; j < f / 2; j++) {
      arr.push(i);
    }
  });

  answer = arr.join("") + 0 + arr.reverse().join("");

  return answer;
}
