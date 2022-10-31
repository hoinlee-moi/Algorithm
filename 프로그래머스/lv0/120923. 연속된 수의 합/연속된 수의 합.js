function solution(num, total) {
    let answer = [];
    if(num%2 ===0) {
        const first = Math.floor((total/2)/(num/2))-(num/2-1)
        const last = Math.ceil((total/2)/(num/2))+(num/2-1)
        for(let i=first; i<=last; i++ ) answer.push(i)
    } else{
        const first = (total/num)-((num-1)/2)
        const last = total/num+((num-1)/2)
        for(let i=first; i<=last; i++ ) answer.push(i)
    }
    return answer;
}