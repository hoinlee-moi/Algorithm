function solution(num) {
    let cycle = 0;
    while(cycle<=500) {
        if(num===1) break;
        if(num%2===0) num /= 2
        else num = num*3+1
        cycle++
    }
    if(cycle>500) cycle=-1
    return cycle;
}