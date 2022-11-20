function solution(number) {
    let answer = 0;
    while(number.length!=0) {
        let standardNum = number.shift();
        for(let i=0; i<number.length; i++) {
            for(let j=i+1;j<number.length;j++){
                if(standardNum+number[i]+number[j]===0) answer++
            }
        }
    }
    return answer;
}


/*
반복이 총 3번 돌아가야 하기 때문에 3중 for문을 쓰려다 맨 처음은 while문으로 묶었다.
forEach로 써도 되고 여러 반복문을 이용해도 괜찮았을 것 같다.
*/