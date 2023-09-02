function solution(skill, skilltree) {
  let answer = 0;

  const skillList = skill.split("");

  for (const skills of skilltree) {
    let temp = [];
    // 스킬 겹치는 대로 다 넣기
    for (const s of skills) {
      if (skillList.includes(s)) temp.push(s);
    }
    // 스킬이 CBD이거나 CBD로 시작하면 +(C, CB, CBD만 가능)
    if (skill.startsWith(temp.join(""))) answer += 1;
  }
  return answer;
}

console.log(solution("CBD", [("BACDE", "CBADF", "AECB", "BDA")]));
