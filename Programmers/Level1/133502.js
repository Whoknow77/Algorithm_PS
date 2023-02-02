// 1231을 찾을경우 인덱스 -2, 처음으로 돌아가면 시간초과
// 통과는 하지만 시간은 많이걸린다.

function solution(ingredient) {
  let sum = 0;
  let i = 0;
  while (i <= ingredient.length - 4) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      sum++;
      ingredient.splice(i, 4);
      i -= 2;
    } else {
      i++;
    }
  }
  return sum;
}

// 다른 사람 풀이

// [1,2,3,1,2,3,1,1]일 경우 가운데 1231을 빼면
// 바깥의 1231을 읽기 위해 i가 자동으로 1이 더해지는 걸 감안해서 -4를 해서 3칸 뒤로 가야할 것 같지만
// 사실은 이런 경우에는 1열의 1231을 먼저 읽어야 하므로 절대 3칸 뒤로 갈 일이 발생 안함.
function solution2(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      console.log(i);
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return count;
}

// Stack
function solution3(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;
      stk.splice(-4);
    }
  }
  return count;
}

console.log(solution3([2, 1, 1, 2, 3, 1, 2, 3, 1]));
