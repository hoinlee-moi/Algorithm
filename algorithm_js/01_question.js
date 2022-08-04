//두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(parseInt(num1/num2))
console.log(num1%num2)

// const fs=require('fs');
// const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(parseInt(num1/num2))
// console.log(num1%num2)