function solution(A,B){
    let answer = 0
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    A.forEach((v,i)=>{
        answer += v*B[i]
    })

    return answer;
}

/*
제일 큰 값을 제일 작은 값에 곱해야 작은 수가 됨으로 한쪽은 오름차순 한쪽은 내림차순으로 만들어 순차적으로 곱한다.
두 배열의 길이는 같기 때문에 여러 반복문을 통해 하나씩 곱해서 더하면 된다.
*/