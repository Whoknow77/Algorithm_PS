function solution(num_list) {
    let answer = [];
    answer.push((num_list.filter(num=>num%2===0)).length);
    answer.push((num_list.filter(num=>num%2===1)).length);
    return answer;
}

function solution2(num_list){
    return [
        num_list.filter((num) => num % 2 === 0).length,
        num_list.filter((num) => num % 2 === 1).length,
      ];
}


