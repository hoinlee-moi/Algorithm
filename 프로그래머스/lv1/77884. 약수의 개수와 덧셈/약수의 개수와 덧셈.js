function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++) {
        if(measure(i)) answer+=i
        else answer-=i
    }
    return answer;
}
const measure = num => {
    let measure = []
    for(let i=1;i<=num;i++) {
        if(num%i===0) measure.push(i)
    }
    return measure.length%2===0?true:false
}