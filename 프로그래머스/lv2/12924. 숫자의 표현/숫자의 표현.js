function solution(n) {
    if(n===1) return 1
    let answer = 1;
    let num = 1;
    let sumArr = [];
    while(num<=Math.ceil(n/2)+1) {
        let sum = sumArr.reduce((acc,cur)=>{return acc+cur},0)
        if(sum>n) {
            while(sum>n){
                let a =sumArr.shift()
                sum -= a
            } 
        }
        if(sum<n) {
            sumArr.push(num)
            num++
        }
        if(sum===n){
            answer++
            sumArr.push(num)
            num++
        }
    }
    return answer;
}