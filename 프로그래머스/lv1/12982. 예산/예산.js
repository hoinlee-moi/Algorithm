function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let result = 0;
    let answer = 0;
    for(let i=0; i<d.length; i++) {
    result += d[i]
    if(result>budget) return answer
    answer++    
    }
    return answer
}

/*
그런데 이것보다 빠른 방법이 확실히 있다. reduce를 사용해 봤지만 for문을 이용하는 것이 break문을 통해 불필요한 작업을 줄일 수 있다.
function solution(d, budget) {
    let result = 0
    d.sort((a,b)=>a-b)
    const answer = d.reduce((acc,cur)=>{
        if(acc+cur<=budget) {
            result++
            return acc+cur
        }
        else return acc
    },0);
    return result;
}
*/
