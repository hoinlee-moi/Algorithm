function solution(n) {
    let answer = 0;
    let numString = String(n)
    for(let i=0; i < numString.length; i++) {
        answer += Number(numString[i])
    }
    return answer;
}