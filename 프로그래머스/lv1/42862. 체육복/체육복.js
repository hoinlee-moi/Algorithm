function solution(n, lost, reserve) {
    const uniformArr = new Array(n).fill(1);
    const uniform = uniformArr.map((v,i,ar)=>{
        if(lost.includes(i+1))  --v
        if(reserve.includes(i+1))  ++v
        return v
    });
    for(let i=0; i<=uniform.length-1; i++) {
        if(uniform[i]===0) {
            if(uniform[i-1]>1) {
                uniform[i-1]--
                uniform[i]++
            }else if(uniform[i+1]>1){
                uniform[i+1]--
                uniform[i]++
            }
        }
    }
    
    return uniform.filter(v=>v>0).length
        
}