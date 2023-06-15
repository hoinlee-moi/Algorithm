function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}