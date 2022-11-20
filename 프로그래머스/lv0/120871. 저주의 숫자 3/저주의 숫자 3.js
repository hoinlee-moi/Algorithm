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
/*
for문으로 n까지의 숫자를 돌며 while문을 통해 3의 배수나 3이 글자에 들어가는지 체크한다.
*/