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