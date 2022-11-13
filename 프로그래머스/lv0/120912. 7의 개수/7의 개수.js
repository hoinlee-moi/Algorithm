function solution(array) {
    let arrayNum = String(array.join(''))
    let answer = [...arrayNum.matchAll(/[7]/g)]
    return answer.length;
}