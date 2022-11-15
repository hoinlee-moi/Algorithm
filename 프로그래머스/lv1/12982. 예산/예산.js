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
처음엔 아래 있는 reduce식을 사용해 봤지만 for문을 이용하는 것이 break문을 통해 불필요한 작업을 줄일 수 있다고 생각했다.
또한 for문 자체도 속도가 더 빠르기 때문에 차이가 있으리라 생각
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
결과 for문이 조금 더 빠르다 reduce는 정답이 나왔음에도 계속해서 돌아간 후 답을 도출해내는 반면 for는 답이 도출 되면 끝나서 그런 것 같다.
*/
