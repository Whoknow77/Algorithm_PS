function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, term] = terms[i].split(" ");
    map.set(type, term * 28);
  }

  return privacies.reduce((acc, curr, i) => {
    const [date, type] = curr.split(" ");
    const [cy, cm, cd] = date.split(".");
    const [ty, tm, td] = today.split(".");

    const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
    const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

    if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
    return acc;
  }, []);
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
