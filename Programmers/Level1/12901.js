function solution(a, b) {
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return day[new Date(2016, a-1, b).getDay()];
}

function solution2(a,b){
    return new Date(2016,a-1,b).toString().slice(0,3).toUpperCase();
  }

// 1월 1일은 금요일이므로 인덱스 1이 금요일이 되도록 맞춤
// 5월 24일이면 24 + 1,2,3,4월의 일수를 다 더하고 나머지로 계산
function solution3(a, b) {
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    let days = b
    for(let i=0 ; i<a-1 ; i++)
        days += monthDay[i];
    
    return weekDay[days%7];
} 