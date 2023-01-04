function solution(n,a,b){
    let answer = 0
    let A = Math.min(a,b)
    let B = Math.max(a,b)
    while(n%2===0) {
        answer++
        if(A+1===B && B%2===0) break;
        A = Math.ceil(A/2)
        B = Math.ceil(B/2)
        n = n/2
    }
    return answer;
}