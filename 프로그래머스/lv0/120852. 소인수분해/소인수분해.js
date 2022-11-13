function solution(n) {
    var answer = [];
    for(let i = 2; i<=n; i++){
        if(n%i ===0) {
            if(isPrime(i)) answer.push(i)
        }
    }
    return answer;
}

const isPrime = num => {
    if(num === 2) return true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}