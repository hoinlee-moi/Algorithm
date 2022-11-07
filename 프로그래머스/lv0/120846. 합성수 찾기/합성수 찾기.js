function solution(n) {
    var answer = 0;
    for(let i = 4; i<=n; i++) {
      if(i%2===0||i%3===0||i%5===0||i%7===0)  answer++
      if(i===5||i===7) answer--;
    }
    return answer;
}