//https://school.programmers.co.kr/learn/courses/30/lessons/120819  아이스아메리카노

function solution(money) {
    let answer = [];
    let americano = parseInt(money/5500)
    let change = parseInt(money % 5500)ㄴ
    answer.push(americano,change)
    return answer;
}
// money가 정수로 주어지기에 parseInt를 쓸 필요는 없지만 혹시 하는 변수를 제외하기 위해 넣음