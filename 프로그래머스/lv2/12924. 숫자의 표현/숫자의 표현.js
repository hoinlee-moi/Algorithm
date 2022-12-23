function solution(n) {
    if(n===1) return 1
    let answer = 1;
    let sumArr = [];
    for(let i=1; i<=Math.ceil(n/2)+1;i++){
        let sum = sumArr.reduce((acc,cur)=>{return acc+cur},0)
        if(sum>n) {
            while(sum>n) sum -= sumArr.shift()
        }
        if(sum<n) {
            sumArr.push(i)
        }
        if(sum===n){
            answer++
            sumArr.push(i)
        }
    }
    return answer;
}
