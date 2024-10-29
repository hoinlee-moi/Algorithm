function solution(l, r) {
    const answer = [];
    for(let i=l; i<=r; i+=1){
        if(i%5!==0)continue;
        if(/[1,2,3,4,6,7,8,9]/.test(String(i))) {
           continue;
           }
           answer.push(i);
    }
    return answer.length?answer:[-1];
}