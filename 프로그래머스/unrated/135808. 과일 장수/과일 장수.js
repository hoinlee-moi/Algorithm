function solution(k, m, score) {
    if(score.length<m) return 0
    let money = 0;
    score.sort((a,b)=>b-a)
    for(let i=m; i<=score.length;i+=m){     
            money += score[i-1]*m
    }
    return money;
}

/*
먼저 `score`의 길이가m보다 작다면 수익이 없으니 0을 return해준다
가격을 담아줄 변수 `money`를 선언해주고
박스당 가격이 최저 점수의 사과로 기준이 되어 있어`score`를 내림차순 시켜준다.
반복문을 이용해 첫 `m`번째 사과까지 한박스로 잡고 내림차순이기에 마지막 사과가 제일 낮은 점수이니 마지막 사과에 m을 곱해 박스당 사과 가격을 정한다.
이후 m번째 마다 한박스가 만들어지니 증감식은 `+=m`을 이용해 만든다.
*/
