//https://www.acmicpc.net/problem/2588
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input2 = require('fs').readFileSync('/dev/stdin').toString().trim();

const fs=require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

console.log(num1*(num2%100%10))
console.log(num1*(parseInt(num2%100/10)))
console.log(num1*(parseInt(num2/100)))
console.log(num1*num2)