function solution(arr) {
    var answer = 0;
    return arr.reduce((acc,cur,index)=>{
        if(index===arr.length-1) return (acc+cur)/arr.length
        return acc+cur
    },0);
}

/*
reduce쓰기
*/