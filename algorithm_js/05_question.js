//https://www.acmicpc.net/problem/4344

let input = require('fs').readFileSync('test.txt').toString().split('\n');

let case_all = Number(input[0])
let score_all = []
let total_score = []
let avg = []
let total = 0
for(i=0; i<case_all; i++) {
    score_all[i] = input[i+1]
    console.log(score_all[i])
    for(j=0; j < score_all[j][0] ; j++) {
        console.log(score_all[j])
        // total += score_all[j][j+1]
    }
}

// for(j=0; j < score.length; j++ ) {
//     total += score[j]
// }
// console.log(total)