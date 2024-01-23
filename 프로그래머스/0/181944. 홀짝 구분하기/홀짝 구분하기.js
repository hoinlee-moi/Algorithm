const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    [n] = line.split(' ');
}).on('close', function () {
    console.log(Number(n)%2===0?`${n} is even`:`${n} is odd`)
});