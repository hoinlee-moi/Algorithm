function solution(n) {
    const count = n.toString(2).match(/1/gi).length
    while(true){
        n++
        if(n.toString(2).match(/1/gi).length===count) break;
    }
    return n;
}