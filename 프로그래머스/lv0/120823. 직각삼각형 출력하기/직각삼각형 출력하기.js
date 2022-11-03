const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for(let i=1;i<=line; i++){
        console.log("*".repeat(i))
    }
}).on('close', function () {
});