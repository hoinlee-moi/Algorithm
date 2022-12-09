function solution(s) {
    const map = new Map();
    let answer = [];
    for(let i=0; i<=s.length-1; i++){
        if(map.get(s[i])>=0){
            answer.push(i-map.get(s[i]))
            map.set(s[i],i)
        }else{
            map.set(s[i],i)
            answer.push(-1)
        }
    }
    return answer;
}