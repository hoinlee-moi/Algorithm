function solution(n, m, section) {
    let result = 0
    let paint = 0
    for(let i=0;i<=section.length-1;i++) {
        if(paint<section[i]){
            paint = section[i]+(m-1)
            result++
            continue;
        }
        
    }
    return result;
}