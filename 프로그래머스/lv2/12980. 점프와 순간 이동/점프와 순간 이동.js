function solution(n){
    let ans = 0;
    while(true){
        if(n%2!==0) {
            n -= 1
            ans++
        }
        n /= 2
        if(n <=0) break;
    }
    return ans;
}