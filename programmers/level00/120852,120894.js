// https://school.programmers.co.kr/learn/courses/30/lessons/120852 소인수분해

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


// https://school.programmers.co.kr/learn/courses/30/lessons/120894  영어가 싫어요


function solution(numbers) {
  const number = {
      0 :"zero", 1: "one", 2: "two", 3: "three", 4: "four", 
      5: "five", 6: "six", 7: "seven", 8: "eight", 9:"nine"
  }
  for(let i =0; i<Object.values(number).length; i++) {
      if(numbers.includes(Object.values(number)[i])){
          const oldValue = new RegExp(Object.values(number)[i], "gi")
      numbers = numbers.replace(oldValue , i)
      }
  }
  return Number(numbers)
}

/*
먼저 주어진 문자열을 숫자로 바꾸기 위해 객체를 하나 만든후 for문을 이용해 객체마다 돌면서
문자열에 존재하는지 확인하고 있다면  RegExp 정규식 객체를 생성 replace를 이용해 문자열을 숫자문자열로 바꾼 후 Number를 이용해 숫자로 반환하였다.
*/

function solution(numbers) {
  const repStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < 10; i++) {
      numbers = numbers.replaceAll(repStr[i], i)
  }
  return +numbers
}
/*
내가 짠 코드를 좀 더 단순화한 코드이다. replaceAll을 쓰면 가능한 걸 너무 어렵게 꼬았다고 생각한다.
*/