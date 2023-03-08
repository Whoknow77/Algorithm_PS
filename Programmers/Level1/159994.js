function solution(cards1, cards2, goal) {
  while (goal.length) {
    if (goal[0] === cards1[0]) {
      cards1.shift();
      goal.shift();
    } else if (goal[0] === cards2[0]) {
      cards2.shift();
      goal.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

// 다른 사람 풀이
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
