function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        answer++
        while(true){
            if(answer%3!=0 && !String(answer).includes(3))break;
            answer++
        }
    }
    return answer;
}