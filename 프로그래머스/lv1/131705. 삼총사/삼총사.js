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