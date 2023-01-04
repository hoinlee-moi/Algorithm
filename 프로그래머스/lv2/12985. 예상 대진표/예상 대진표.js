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

/*
단순한 느낌으로 풀었는데 일단 경기가 한 번 진행될 때마다 순서는 `/2`가 된다(이때 소수점 자리는 올림)
그 이후 서로 짝지어진 관계를 판단하는 방법으로 진행했는데
아래는 더욱 빠른시간으로 채점 됐다

function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}
나처럼 n을 이용해서 나누지 않고 계속해서 a와 b의 순서를 나눈다
나누다 서로 만나는 순간엔 같은 수가 되기 때문에 멈춘다
이 때 `answer`를 0부터 시작하고 `/2`계산이 된 후에 `++`증감하도록 하여 몇번째인지 파악 할 수 있도록 한다.
*/
