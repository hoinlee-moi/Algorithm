function solution(num, k) {
    let answer = String(num).split('').findIndex(v => +v===k)
    return answer===-1? answer : answer+1
}