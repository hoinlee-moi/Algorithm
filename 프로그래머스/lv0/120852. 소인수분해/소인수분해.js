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

/*
소인수 분해이기 때문에 따로 소수를 판별하는 함수를 구현하였고 먼저 인수분해를 하기위해 반복문을 돌려 나눌때 나머지가 0이되는 즉 인수들을 구했다.
이후 조건문 중첩을 통해 소수판별 함수를 사용하여 소수들만 넣도록 만들었다.
*/
