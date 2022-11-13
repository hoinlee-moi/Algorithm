function solution(n) {
    let multiply = 1;
    for(let i = 1; i<=n; i++){
        multiply *= i 
        if(multiply>n){
            i--
            return i
        }
    }
    return multiply
}