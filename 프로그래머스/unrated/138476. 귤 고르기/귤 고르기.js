function solution(k, tangerine) {
    let result = 0;
    let countArr = [0];
    tangerine.forEach(v=>{
        countArr[v] = countArr[v]?countArr[v]+1:1
    })
    countArr.sort((a,b)=>{
        return b-a
    })
    for(let i=0; i<=countArr.length-1; i++) {
        if(k-countArr[i]===0||k-countArr[i]<0){
            result++
            break;
        }
        k -= countArr[i]
        result++
    }
    return result;
}