//https://www.acmicpc.net/problem/2941


const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = String(input[0])
const croatia = ['c=', 'c-', 'dz=','d-', 'lj', 'nj', 's=', 'z=']
let count = 0
let count2 = 0
for(let i=0; i<a.length; i++) {
    let c = a[i]+a[i+1]
    let d = a[i]+a[i+1]+a[i+2]
    if(croatia.includes(c)) {
        a = a.replace(c , " ")
        count++
    } else if(croatia.includes(d)) {
        a = a.replace(d , " ")
        count++
    } else {
        count2++
    }
}
console.log(count+count2)