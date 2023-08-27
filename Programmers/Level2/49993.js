function solution(skill, skilltree) {
  let answer = 0;

  const skillList = skill.split("");

  for (const skills of skilltree) {
    let temp = [];
    for (const s of skills) {
      if (skillList.includes(s)) temp.push(s);
    }
    if (skill.startsWith(temp.join(""))) answer += 1;
  }
  return answer;
}
