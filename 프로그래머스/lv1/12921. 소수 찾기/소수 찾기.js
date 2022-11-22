function solution(n) {
    var answer = 1;
    isPrime : for(let i=3; i<=n; i++){
        for(let j=2; j<=Math.ceil(Math.sqrt(i)); j++) {
            if(i%j===0) continue isPrime;
        }
        answer++
    }
    return answer;
}