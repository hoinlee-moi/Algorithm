function solution(a, b) {
    let answer = 0;
    a.forEach((el,i)=>{
        answer+=el*b[i]
    })
    return answer;
}

/*
reduce나 map을 써도 충분하지만 알고리즘의 성능을 올리기 위해 for문을 썻습니다.
다만 가장 빠른건 for 루프 메서드입니다
*/