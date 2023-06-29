function solution(priorities, location) {
  const arr = Array(priorities.length)
    .fill()
    .map((v, i) => i);
  const answer = [];
  const target = arr[location];
  const queue = [...priorities];
  while (queue.length) {
    const last = queue[0];
    const max = Math.max(...queue);
    // 첫 숫자가 가장 큰 숫자인 경우
    // 삭제하고 비교하기

    if (last === max) {
      queue.shift();
      answer.push(arr.shift());
    }
    // 아닌 경우 가장 큰 숫자가 왼쪽에 오도록 하기
    else {
      queue.push(queue.shift());
      arr.push(arr.shift());
    }
  }
  answer;
  return answer.indexOf(target) + 1;
}

// 다른 풀이
function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    let cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
