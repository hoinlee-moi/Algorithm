function solution(x, n) {
    let num = 0;
    let answer = [];
    for(let i=1;i<=n; i++) {
        num += x
        answer.push(num)
    }
    return answer;
}