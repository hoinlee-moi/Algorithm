function solution(n) {
    const isEven = n%2 ===0
    let answer = 0
    for(let i=isEven?2:1;i<=n; i+=2){
        if(isEven) answer += i**2
        else answer+=i
    }
    
    return answer;
}