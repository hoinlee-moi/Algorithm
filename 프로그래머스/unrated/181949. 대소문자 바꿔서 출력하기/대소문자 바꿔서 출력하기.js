const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str = str.split("").map(v=>{
         if(v.charCodeAt(0) >= 65 && v.charCodeAt(0) <= 90){
             return v.toLowerCase()
         }; 
        return v.toUpperCase()
    })
    console.log(str.join(""))
});