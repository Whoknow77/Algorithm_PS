function solution(genres, plays) {
  const score = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (score.get(genres[i])) {
      const newArr = [...score.get(genres[i])];
      const sum = newArr[0] + plays[i];
      newArr.shift();
      newArr.unshift(sum);
      newArr.push(plays[i]);
      score.set(genres[i], newArr);
    } else {
      // 최초 등록
      score.set(genres[i], [plays[i], plays[i]]);
    }
  }
  // 장르를 횟수순으로 나열
  const arr = [...score.values()].sort((a, b) => {
    return b[0] - a[0];
  });
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => {
      return b - a;
    });
    arr[i].shift();
    const target = plays.indexOf(arr[i][0]);
    const target2 = plays.indexOf(arr[i][1]);
    answer.push(target);
    if (target2 !== -1) {
      answer.push(target2);
    }
  }
  return answer;
}

// 강사님 풀이
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
