function solution(money) {
    let answer = [];
    let americano = parseInt(money/5500)
    let change = parseInt(money % 5500)
    answer.push(americano,change)
    return answer;
}