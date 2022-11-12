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

/*
나같은 경우 되게 하드코딩을 했는데 다른 사람 풀이를 보고 놀랐다.
개념적인 부분인데 제곱근이 정수면 약수의 개수가 홀수를 주는 건데 
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
로 해결됐다
*/