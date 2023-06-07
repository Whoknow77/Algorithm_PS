function solution(n, words) {
  const obj = {};
  const arr = [];
  let count = 0; // 사용자가 틀린 기점으로 턴이 얼마나 돌았는지 세는 수
  let lastword = ""; // 지금까지 나온 단어의 끝 문자를 담는 배열
  let answeridx = 0; // 끝말잇기를 틀린 사용자 번호

  // some을 이용하여 조건에 맞지 않으면 return으로 반복문 빠져나옴
  words.some((word, index) => {
    // 턴이 한바퀴 돌때마다 count 증가
    if (parseInt(index % n) === 0) {
      count++;
    }

    // 1. 끝말잇기를 만족해야함
    // 2. 이미 나온단어 이면 안됨

    // 사용자 번호
    const idx = parseInt((index % n) + 1);
    if (index === 0 || (lastword === word[0] && !arr.includes(word))) {
      const subarr = obj[idx] || [];
      obj[idx] = [...subarr, word]; // word를 새로 붙여서 넣기
    }
    // 끝말잇기 조건에 안맞거나 이미 나온 단어인 경우
    else {
      answeridx = idx;
      return true;
    }
    arr.push(word);
    lastword = word[word.length - 1];
  });

  // 끝말잇기를 틀린 사람이 없으면 답은 [0,0]
  if (answeridx === 0) {
    return [0, 0];
  }
  return [answeridx, count];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

function solution(n, words) {
  var fail_i = -1;
  for (var i = 1; i < words.length; i++) {
    var val = words[i];
    // 전단계의 끝말과 현단계 첫말이 다를 경우
    if (
      words[i - 1].substring(words[i - 1].length - 1) != val.substring(0, 1)
    ) {
      fail_i = i;
      break;
    }
    // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
    // 현재 인덱스와 맞지 않을 경우 중복된 값
    if (words.indexOf(val) != i) {
      fail_i = i;
      break;
    }
  }

  if (fail_i == -1) return [0, 0];

  var no = (fail_i % n) + 1;
  var turn = Math.floor(fail_i / n) + 1;

  return [no, turn];
}
