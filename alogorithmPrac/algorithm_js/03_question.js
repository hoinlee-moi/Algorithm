//https://www.acmicpc.net/problem/2884

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

cal_minute=(M-45)
if(cal_minute<0) {
    H--
    M = 60-cal_minute*-1
} else{
    M = cal_minute
}
if(H<0){
    H = 23
}
console.log(H , M)

