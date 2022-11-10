function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc,cur,i)=>{
        if(signs[i]===true) return acc+cur
        else return acc-cur
    },0);
    return answer;
}

/*
for문이 reduce보다 성능이 좋음으로 reduce를 사용하는 것도 좋을 것 같다.
let sum = 0
absoulutes.forEach((el,i)=> {
signs[i]===true ? sum += el : sum -= el
})
return sum
*/