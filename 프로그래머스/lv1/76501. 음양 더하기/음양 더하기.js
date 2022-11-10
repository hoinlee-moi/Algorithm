function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc,cur,i)=>{
        if(signs[i]===true) return acc+cur
        else return acc-cur
    },0);
    return answer;
}