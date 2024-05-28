const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let A = Number(input);
let num = A
let count = 0

while (true) {
    count ++

    let sum = parseInt(num/10) + num%10
    num = (num%10)*10 + (sum%10)

    if(A ===  num) {
        break
    }
}
console.log(count)