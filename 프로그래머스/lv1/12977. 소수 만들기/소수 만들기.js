function solution(nums) {
    let answer = 0;
    for(let i=0; i<=nums.length-1; i++){
        for(let j=i+1; j<=nums.length-1; j++){
            for(let k=j+1; k<=nums.length-1; k++){
                if(isPrime(nums[i]+nums[j]+nums[k]))answer++
            }
        }
    }
    return answer;
}

const isPrime = num => {
    if(num===2) return true
        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num%i===0) return false
        }
    return true
}

/*
먼저 소수 판별 함수를 따로 만든 후 3중첩 반복문을 이용해 각 경우의 수를 이용해 배열의 3자리 수의 합을 구하도록 했다.
*/
