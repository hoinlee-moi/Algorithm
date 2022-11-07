function solution(s){
    let pCount = 0;
    let yCount = 0;
    s = s.toLowerCase();
    s.split("").map(v=> {
        if(v==="p") pCount++
        if(v==="y") yCount++
    })
    return pCount===yCount;
}