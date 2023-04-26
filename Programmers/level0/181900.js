function solution(my_string, indices) {
  indices.sort(function (a, b) {
    return a - b;
  });

  for (var i = indices.length - 1; i >= 0; i--) {
    my_string =
      my_string.slice(0, indices[i]) + my_string.slice(indices[i] + 1);
  }

  return my_string;
}

function solution(m, a) {
  let answer = "";

  for (let i = 0; i < m.length; i++) {
    if (!a.includes(i)) {
      answer += m[i];
    }
  }

  return answer;
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
