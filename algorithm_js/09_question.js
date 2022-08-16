// https://www.acmicpc.net/problem/1316

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');
let count = 0
for(let i=1; i<=input[0]; i++ ) {
    dupulication(input[i])
}
function dupulication(word) {
    let dup = false
    let alphabet = word.trim()
    for(let j=0; j<alphabet.length; j++) {
        let first = alphabet[j]
        let second = alphabet[j+1]
        if(first != second){
            for(let k=j+2; k<alphabet.length;k++) {
                if(first === alphabet[k]) {
                    dup = true
                }
            }
        }
    }
    if(!dup) {
        return count++
    }
}
console.log(count)