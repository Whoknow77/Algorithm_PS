function solution(users, emoticons) {
  const answer = [0, 0];
  let cases = [[]];

  emoticons.forEach(() => {
    const temp = [];
    cases.forEach(c => {
      [10, 20, 30, 40].forEach(percent => {
        temp.push([...c, percent]);
      });
    });
    cases = temp;
  });


  cases.forEach(c => {
    let totalPay = 0,
      member = 0;
    users.forEach(([rate, price]) => {
      let pay = 0;
      emoticons.forEach((emoticon, idx) => {
        if (rate <= c[idx]) pay += (emoticon * (100 - c[idx])) / 100;
      });
      if (price <= pay) member += 1;
      else totalPay += pay;
    });
    if (answer[0] < member) [answer[0], answer[1]] = [member, totalPay];
    else if (answer[0] === member && answer[1] < totalPay) answer[1] = totalPay;
  });

  return answer;
}


// dfs 풀이

// function solution(users, emoticons) {
//   let discount = [10, 20, 30, 40];
//   let len = emoticons.length;
//   let res = [];
//   let arr = Array(len).fill(0);

//   const dfs = (depth) => {
//       if (depth === len) {
//           res.push(arr.slice());
//           return;
//       }

//       for (let i = 0; i < 4; i++) {
//           arr[depth] = discount[i];
//           dfs(depth + 1);
//           arr[depth] = 0;
//       }
//   };

//   dfs(0);
// }


 

console.log(solution([[40, 10000], [25, 10000]],	[7000, 9000]))
