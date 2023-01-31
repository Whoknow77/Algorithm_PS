function solution(array, n) {
  return array.filter((item) => item === n).length;
}

function solution2(array, n) {
  let result = 0;
  array.map((item) => item === n && result++);
  return result;
}

function solution3(array, n) {
  var answer = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}
