function solution(name) {
  let answer = 0;
  let min = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    answer+= Math.min(name[i].charCodeAt()-65, 91-name[i].charCodeAt())
    let lastIndex = i + 1;
    while (lastIndex < name.length && name.charAt(lastIndex) === 'A') {
      lastIndex++
    }
    min = Math.min(
      min,
      i * 2 + name.length - lastIndex,
      i + (name.length - lastIndex) * 2
    );
  }
  answer += min;
  return answer;
}

console.log(solution("JERAANAAJ"))
