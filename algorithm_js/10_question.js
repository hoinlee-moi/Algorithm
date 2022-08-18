//https://www.acmicpc.net/problem/4948
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');
for(let i=0; i<input.length; i++) {
    let count = 0;
    let num = Number(input[i])
    if(num>1){
        count = prime(num)
    } else if(num ===0){
        continue
    } else {
        count +=1
    }
    console.log(count)
}
function prime(number) {
    let result =0
    let num2 = number+1
    let num3 = number*2
    for(let i=num2; i<=num3; i++){
        let prime_num = true;
        if ((i === 2) | (i === 3) | (i === 5) | (i === 7)) {
            prime_num = true
          } else if(i %2 ===0 |
            i%3 ===0 |
            i%5 ===0 |
            i%7 ===0){
                prime_num = false
            } else {
                for(let j=2; j<=Math.sqrt(i); j++){
                    if(i % j ===0){
                        prime_num = false
                        break;
                    }
                }
            }
        if(prime_num) {
            result++
        }
    }
    return result
}