function solution(s) {
    const map = new Map();
    let answer = [];
    s.split("").forEach((v,i)=>{
        if(map.get(v)>=0){
            answer.push(i-map.get(v))
            map.set(v,i)
        }else{
            map.set(v,i)
            answer.push(-1)
        }
    })
    return answer;
}