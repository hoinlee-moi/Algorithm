//https://www.acmicpc.net/problem/4344

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let case_all = input[0]

for(let i =1; i <= case_all; i++) {
    let score = input[i].split(' ');
    let case2 = score.shift()
    let count = 0;

    let avg = score.reduce((acc,value) => acc + value*1,0)
    avg /= case2

    for (let j =0; j<case2; j++) {
        if(score[j]>avg) {
            count++
        }
    }
    let result = ((count / case2)*100).toFixed(3);
    console.log(`${result}%`)
}

