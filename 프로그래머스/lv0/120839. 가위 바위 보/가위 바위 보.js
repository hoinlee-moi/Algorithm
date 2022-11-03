function solution(rsp) {
    let answer = rsp.split('').map(str =>{
        if(+str===0) return 5
        if(+str===2) return 0
        if(+str===5) return 2
    })
    return answer.join('');
}