function solution(s) {
    let answer = 0;
    let standard = s[0]
    let count = [1,0];
    for(let i=1;i<=s.length-1;i++){
        if(s[i]===standard) count[0]++
        else count[1]++
        if(count[0]===count[1]){
            answer++
            standard = s[i+1]
            count = [0,0]
        }
        
    }
    if(count[0]!==0||count[1]!==0) answer++
    return answer;
}